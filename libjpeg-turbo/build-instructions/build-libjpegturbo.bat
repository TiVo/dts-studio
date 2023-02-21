@echo off
setlocal

set MYDIR=%~dp0
set JPEGTURBODIR=libjpeg-turbo

pushd %MYDIR%\%JPEGTURBODIR%

for %%P in (x64 Win32) do (
    echo ------------------------------------
    echo %%P
    echo ------------------------------------
    cmake ^
        -Bbuild-%%P -H. ^
        -DCMAKE_INSTALL_PREFIX=%MYDIR%\%JPEGTURBODIR%-%%P ^
        -DCMAKE_DEBUG_POSTFIX=d ^
        -DCMAKE_CONFIGURATION_TYPES:STRING="Debug;Release" ^
        -DCMAKE_C_FLAGS_DEBUG:STRING="/MTd /Zi /Ob0 /Od /RTC1" ^
        -DCMAKE_C_FLAGS_RELEASE:STRING="/MT /O2 /Ob2 /DNDEBUG" ^
        -G "Visual Studio 16 2019" -A %%P
    for %%C in (Debug Release) do (
        echo ------------------------------------
        echo %%C
        echo ------------------------------------
        cmake --build build-%%P --config %%C
        cmake --build build-%%P --config %%C -t INSTALL
    )
)

popd

endlocal
