@echo off

:: Variables
set ER_Launch_Timeout=30
set ME3_CONSOLE_LOG_LEVEL=error
chcp 65001 > nul
setlocal enabledelayedexpansion

:: Only kill the game if it's found
tasklist /fi "imagename eq eldenring.exe" | findstr /b "eldenring.exe" > nul
if %errorlevel%==0 (
    echo Killing old instance of eldenring.exe which is running in the background.
    taskkill /im eldenring.exe /f >nul
    :: A tiny delay to make sure the process has been killed properly before attempting a launch
    ping /n 2 localhost >nul 
)

cd /d "%~dp0"
if exist ".\SeamlessCoop\ersc.dll" (
    echo Launching the Convergence: Elden Ring with Seamless Coop.
    start .\me3\Windows\me3.exe launch --auto-detect -p ".\me3\convergence - seamless.me3"
) else (
    echo Launching the Convergence: Elden Ring.
    start .\me3\Windows\me3.exe launch --auto-detect -p ".\me3\convergence.me3"
)

:: Verify that eldenring.exe has launched
set i=0
set /a timeout=%ER_Launch_Timeout%*2
set /a timeout_quarter=%ER_Launch_Timeout%/2
set /a timeout_half=%ER_Launch_Timeout%
set /a timeout_threequarter=%ER_Launch_Timeout%/4*6

:wait_loop
ping /n 1 localhost >nul 
tasklist /fi "imagename eq eldenring.exe" | findstr /b "eldenring.exe" > nul
if %errorlevel%==1 (
    if !i! == !timeout_quarter! (
        set /a msg_quarter=!timeout_quarter!/2
        if !msg_quarter! lss 10 set msg_quarter=0!msg_quarter!

        echo Timing out: !msg_quarter!/!ER_Launch_Timeout! seconds.
    ) else if !i! == !timeout_half! (
        set /a msg_half=!timeout_half!/2
        if !msg_half! lss 10 set msg_half=0!msg_half!

        echo Waiting for Elden Ring to successfully launch.
        echo Timing out: !msg_half!/!ER_Launch_Timeout! seconds..
    ) else if !i! == !timeout_threequarter! (
        set /a msg_threequarter=!timeout_threequarter!/2
        if !msg_threequarter! lss 10 set msg_threequarter=0!msg_threequarter!

        echo Timing out: !msg_threequarter!/!ER_Launch_Timeout! seconds...
    ) else if !i! == !timeout! (
        setlocal disabledelayedexpansion
        echo Timing out: %ER_Launch_Timeout%/%ER_Launch_Timeout% seconds!!!
        setlocal enabledelayedexpansion

        goto auto_troubleshooter
    )

    set /a i+=1
    goto wait_loop
)

exit

:auto_troubleshooter
echo Failed to launch Elden Ring: The Convergence.
echo Initiating self-diagnosis.

:: Steam detector
echo:
echo Trying to find Steam...
tasklist /fi "imagename eq steam.exe" | findstr /b "steam.exe" > nul
if %errorlevel%==1 (
    echo:
    echo Steam is not running, open Steam in online mode and run the .bat again.
    echo Elden Ring needs to be legitimately owned on Steam.
    echo:
    pause
    exit
)
echo Steam found.

:: Game folder detector
echo:
echo Reviewing installation folder... (1/2)
set str1=%cd%
if not x%str1:"ELDEN RING\Game"=%==x%str1% (
    echo:
    echo The mod should not be installed in the %'%ELDEN RING%\%Game%'% folder.
    echo Place it in its own separate folder on the same drive and run the .bat again.
    echo:
    pause
    exit
)

:: OneDrive detector
echo Reviewing installation folder... (2/2)
if not x%str1:Onedrive=%==x%str1% (
    echo:
    echo Please disable OneDrive for the ConvergenceER folder and/or Elden Ring.
    echo:
    pause
    exit
)
echo Installation folder OK.

echo:
echo Self-diagnosis failed to troubleshoot.
echo Join our discord and go to #troubleshooting for more ways to troubleshoot the mod.

echo:
echo Do you wish to auto join the server? (Y/N)
:answer_label
set /p answer= 
if /i "!answer:~,1!" EQU "Y" (
    start "" "https://discord.gg/aGuWxS5Fhg"
    exit
) else if /i "!answer:~,1!" EQU "N" (
    exit
)
echo Please type Y for Yes or N for No.
goto answer_label
