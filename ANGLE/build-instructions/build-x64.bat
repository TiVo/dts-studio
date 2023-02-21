@echo off
setlocal
set MYDIR=%~dp0
set MYDIR=%MYDIR:~0,-1%

pushd %MYDIR%
rmdir /q /s angle-384ce5c\out\Release-x64
mkdir angle-384ce5c\out\Release
copy args-x64.gn angle-384ce5c\out\Release\args.gn
pushd angle-384ce5c
call gn gen out/Release
call autoninja -j 8 -C out/Release
ren out\Release Release-x64
popd
popd

endlocal
