@ECHO OFF
cd /D "%~dp0"
CLS


ECHO.
ECHO what you want to do?
ECHO 1. run (ssr)
ECHO 2. run (serve)
ECHO 3. install
ECHO 4. generate documentation
ECHO.

CHOICE /C 1234 /N /D 1 /T 5 /M "select... (default: run)"
set task=%ERRORLEVEL%
IF %task% == 4 GOTO doc
IF %task% == 3 GOTO install
IF %task% == 2 GOTO run
IF %task% == 1 GOTO run

echo %task%
pause
:run
if %task%==1 ( call npm run start) else ( call npm run serve )
GOTO End

:install
call npm i
GOTO End

:doc
call npm run doc
GOTO End


:End
pause