@ECHO OFF
cd /D "%~dp0"
CLS


ECHO.
ECHO what you want to do?
ECHO 1. run
ECHO 2. run (ssr)
ECHO 3. install
ECHO.

CHOICE /C 123 /N /D 1 /T 5 /M "select... (default: run)"
set task=%ERRORLEVEL%
IF %task% == 3 GOTO install
IF %task% == 2 GOTO run
IF %task% == 1 GOTO run

echo %task%
pause
:run
if %task%==1 ( call ng serve --open --watch ) else ( call npm run ssr )
GOTO End

:install
call npm i
GOTO End


:End
pause