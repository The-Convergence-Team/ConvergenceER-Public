@echo off
chcp 65001 > nul
:: The above line is necessary in case you edit this file to lead to a path with Unicode characters.

:: Only kill the game if it's found
tasklist /fi "imagename eq eldenring.exe" | findstr /b "eldenring.exe" > nul
if %errorlevel%==0 (
    echo Killing old instance of eldenring.exe which is running in the background.
    taskkill /im eldenring.exe /f >nul
    taskkill /FI "WINDOWTITLE eq Custom Music Injector" /F > nul
    :: A tiny delay to make sure the process has been killed properly before attempting a launch
    ping /n 1 /w 500 localhost >nul 
)

cd /d "%~dp0"
echo Launching the Convergence: Elden Ring.
.\modengine2_launcher.exe -t er -c .\config_eldenring.toml

:: Verify that eldenring.exe has launched
set i=0
:wait_loop
ping /n 1 /w 500 localhost >nul 
tasklist /fi "imagename eq eldenring.exe" | findstr /b "eldenring.exe" > nul
if %errorlevel%==1 (
    set /a i=i+1
    if %i%==10 (
        goto wait_loop_break
    )
    goto wait_loop
) else if not exist "%SystemDrive%/Program Files/Windows Media Player/wmplayer.exe" (
    if not exist "%SystemDrive%/Program Files (x86)/Windows Media Player/wmplayer.exe" (
        echo:
        echo Windows Media Player is required for the Convergence's Custom Music Injector to function.
        echo If you wish to have custom music, please install Windows Media Player.
        echo:
        pause
        exit
    )
)

:: Launch the Custom Music Injector
powershell -Command "Unblock-File -Path '.\mod\CMI.dll'" 
ping /n 1 /w 500 localhost >nul
cscript //nologo "%~f0?.wsf" %1
exit

:: Steam detector
tasklist /fi "imagename eq steam.exe" | findstr /b "steam.exe" > nul
if %errorlevel%==1 (
    echo:
    echo Steam is not running, open Steam in online mode and run the .bat again.
    echo Elden Ring needs to be legitimately owned on Steam.
    echo:
    pause
    exit
)

:: Game folder detector
set str1=%cd%
if not x%str1:"ELDEN RING\Game"=%==x%str1% (
    echo:
    echo The mod should not be installed in the %'%ELDEN RING%\%Game%'% folder.
    echo Place it in it's own seperate folder on the same drive and run the .bat again.
    echo:
    pause
    exit
)

:: OneDrive detector
if not x%str1:Onedrive=%==x%str1% (
    echo:
    echo Please disable OneDrive for the ConvergenceER folder and/or Elden Ring.
    echo:
    pause
    exit
)

----- CMI Starter Script --->
<job><script language="VBScript">
Set objShell = CreateObject("WScript.Shell")
objShell.Run "powershell -WindowStyle Hidden -Command ""Add-Type -Path './mod/CMI.dll'; [CMI.CMI]::Main()""", 0, False
</script></job>