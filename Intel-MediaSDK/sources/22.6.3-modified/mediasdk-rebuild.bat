@echo off
setlocal
set MYDIR=%~dp0
set MSBUILDCOMMAND="C:\Program Files (x86)\Microsoft Visual Studio\2019\Professional\MSBuild\Current\Bin\amd64\MSBuild.exe"
rem set PROJECTPATH=AllBuild.sln
set PROJECTPATH=api\mfx_dispatch\windows\libmfx_vs2015.vcxproj
rem set TASK=Rebuild
rem set TASK=Clean
set TASK=Build

pushd %MYDIR%
echo = Current directory %CD%

for %%P in ( Win32 x64 ) do (
    for %%C in ( Debug Release ) do (
        echo ===============================================
        echo == Rebuilding %PROJECTPATH% for %%P in %%C mode
        echo ===============================================
        rem %MSBUILDCOMMAND% %PROJECTPATH% /nologo /t:%TASK% /p:Configuration=%%C,Platform=%%P /m:8 /v:m
        %MSBUILDCOMMAND% %PROJECTPATH% /nologo /t:%TASK% /p:Configuration=%%C,Platform=%%P,TargetName=libmfx /m:8 /v:m
    )
)

rem %MYDIR%
popd

endlocal

