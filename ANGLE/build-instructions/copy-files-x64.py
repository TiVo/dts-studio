#env python

import os		# provide output to command prompt
import signal	# allow communication between child and parent processes
import time		# delay functions
import sys		# flush command prompt output
import platform
import re
import glob
import shutil
import argparse

# the parent directory of this script is stored in my_dir
( my_dir, my_name ) = os.path.split(os.path.realpath(__file__))

angle_dest = 'angle-distrib-2.1.20052.0.384ce5cf9876-20221207-1847'

file_dict = {
    # x64
    'angle-384ce5c/out/Release-x64/angle_shader_translator.exe'    : 'bin/windows/x64/angle_shader_translator.exe',
    'angle-384ce5c/out/Release-x64/args.gn'                        : 'bin/windows/x64/args.gn',
    'angle-384ce5c/out/Release-x64/d3dcompiler_47.dll'             : 'bin/windows/x64/d3dcompiler_47.dll',
    'angle-384ce5c/out/Release-x64/glslang_validator.exe'          : 'bin/windows/x64/glslang_validator.exe',
    'angle-384ce5c/out/Release-x64/libEGL.dll'                     : 'bin/windows/x64/libEGL.dll',
    'angle-384ce5c/out/Release-x64/libEGL.dll.pdb'                 : 'bin/windows/x64/libEGL.dll.pdb',
    'angle-384ce5c/out/Release-x64/libGLESv1_CM.dll'               : 'bin/windows/x64/libGLESv1_CM.dll',
    'angle-384ce5c/out/Release-x64/libGLESv1_CM.dll.pdb'           : 'bin/windows/x64/libGLESv1_CM.dll.pdb',
    'angle-384ce5c/out/Release-x64/libGLESv2.dll'                  : 'bin/windows/x64/libGLESv2.dll',
    'angle-384ce5c/out/Release-x64/libGLESv2.dll.pdb'              : 'bin/windows/x64/libGLESv2.dll.pdb',
    'angle-384ce5c/out/Release-x64/libGLESv2_with_capture.dll'     : 'bin/windows/x64/libGLESv2_with_capture.dll',
    'angle-384ce5c/out/Release-x64/libGLESv2_with_capture.dll.pdb' : 'bin/windows/x64/libGLESv2_with_capture.dll.pdb',
    'angle-384ce5c/out/Release-x64/nasm.exe'                       : 'bin/windows/x64/nasm.exe',
    'angle-384ce5c/out/Release-x64/angle_libs/openGL32.dll'        : 'bin/windows/x64/openGL32.dll',
    'angle-384ce5c/out/Release-x64/angle_libs/openGL32.dll.pdb'    : 'bin/windows/x64/openGL32.dll.pdb',
    'angle-384ce5c/out/Release-x64/protoc.exe'                     : 'bin/windows/x64/protoc.exe',
    'angle-384ce5c/out/Release-x64/spirv-as.exe'                   : 'bin/windows/x64/spirv-as.exe',
    'angle-384ce5c/out/Release-x64/spirv-cfg.exe'                  : 'bin/windows/x64/spirv-cfg.exe',
    'angle-384ce5c/out/Release-x64/spirv-dis.exe'                  : 'bin/windows/x64/spirv-dis.exe',
    'angle-384ce5c/out/Release-x64/spirv-link.exe'                 : 'bin/windows/x64/spirv-link.exe',
    'angle-384ce5c/out/Release-x64/spirv-opt.exe'                  : 'bin/windows/x64/spirv-opt.exe',
    'angle-384ce5c/out/Release-x64/spirv-reduce.exe'               : 'bin/windows/x64/spirv-reduce.exe',
    'angle-384ce5c/out/Release-x64/spirv-remap.exe'                : 'bin/windows/x64/spirv-remap.exe',
    'angle-384ce5c/out/Release-x64/spirv-val.exe'                  : 'bin/windows/x64/spirv-val.exe',
    'angle-384ce5c/include/angle_gl.h'                             : 'include/angle_gl.h',
    'angle-384ce5c/include/angle_windowsstore.h'                   : 'include/angle_windowsstore.h',
    'angle-384ce5c/include/export.h'                               : 'include/export.h',
    'angle-384ce5c/include/EGL'                                    : 'include/EGL',
    'angle-384ce5c/include/GLES'                                   : 'include/GLES',
    'angle-384ce5c/include/GLES2'                                  : 'include/GLES2',
    'angle-384ce5c/include/GLES3'                                  : 'include/GLES3',
    'angle-384ce5c/include/GLSLANG'                                : 'include/GLSLANG',
    'angle-384ce5c/include/KHR'                                    : 'include/KHR',
    'angle-384ce5c/include/platform'                               : 'include/platform',
    'angle-384ce5c/include/WGL'                                    : 'include/WGL',
    'angle-384ce5c/out/Release-x64/libEGL.dll.lib'                 : 'lib/windows/x64/libEGL.dll.lib',
    'angle-384ce5c/out/Release-x64/libGLESv1_CM.dll.lib'           : 'lib/windows/x64/libGLESv1_CM.dll.lib',
    'angle-384ce5c/out/Release-x64/libGLESv2.dll.lib'              : 'lib/windows/x64/libGLESv2.dll.lib',
    'angle-384ce5c/out/Release-x64/libGLESv2_with_capture.dll.lib' : 'lib/windows/x64/libGLESv2_with_capture.dll.lib',
    'angle-384ce5c/out/Release-x64/angle_libs/openGL32.dll.lib'    : 'lib/windows/x64/openGL32.dll.lib',
    # Win32
    'angle-384ce5c/out/Release-Win32/angle_shader_translator.exe'    : 'bin/windows/Win32/angle_shader_translator.exe',
    'angle-384ce5c/out/Release-Win32/args.gn'                        : 'bin/windows/Win32/args.gn',
    'angle-384ce5c/out/Release-Win32/d3dcompiler_47.dll'             : 'bin/windows/Win32/d3dcompiler_47.dll',
    'angle-384ce5c/out/Release-Win32/glslang_validator.exe'          : 'bin/windows/Win32/glslang_validator.exe',
    'angle-384ce5c/out/Release-Win32/libEGL.dll'                     : 'bin/windows/Win32/libEGL.dll',
    'angle-384ce5c/out/Release-Win32/libEGL.dll.pdb'                 : 'bin/windows/Win32/libEGL.dll.pdb',
    'angle-384ce5c/out/Release-Win32/libGLESv1_CM.dll'               : 'bin/windows/Win32/libGLESv1_CM.dll',
    'angle-384ce5c/out/Release-Win32/libGLESv1_CM.dll.pdb'           : 'bin/windows/Win32/libGLESv1_CM.dll.pdb',
    'angle-384ce5c/out/Release-Win32/libGLESv2.dll'                  : 'bin/windows/Win32/libGLESv2.dll',
    'angle-384ce5c/out/Release-Win32/libGLESv2.dll.pdb'              : 'bin/windows/Win32/libGLESv2.dll.pdb',
    'angle-384ce5c/out/Release-Win32/libGLESv2_with_capture.dll'     : 'bin/windows/Win32/libGLESv2_with_capture.dll',
    'angle-384ce5c/out/Release-Win32/libGLESv2_with_capture.dll.pdb' : 'bin/windows/Win32/libGLESv2_with_capture.dll.pdb',
    'angle-384ce5c/out/Release-Win32/nasm.exe'                       : 'bin/windows/Win32/nasm.exe',
    'angle-384ce5c/out/Release-Win32/angle_libs/openGL32.dll'        : 'bin/windows/Win32/openGL32.dll',
    'angle-384ce5c/out/Release-Win32/angle_libs/openGL32.dll.pdb'    : 'bin/windows/Win32/openGL32.dll.pdb',
    'angle-384ce5c/out/Release-Win32/protoc.exe'                     : 'bin/windows/Win32/protoc.exe',
    'angle-384ce5c/out/Release-Win32/spirv-as.exe'                   : 'bin/windows/Win32/spirv-as.exe',
    'angle-384ce5c/out/Release-Win32/spirv-cfg.exe'                  : 'bin/windows/Win32/spirv-cfg.exe',
    'angle-384ce5c/out/Release-Win32/spirv-dis.exe'                  : 'bin/windows/Win32/spirv-dis.exe',
    'angle-384ce5c/out/Release-Win32/spirv-link.exe'                 : 'bin/windows/Win32/spirv-link.exe',
    'angle-384ce5c/out/Release-Win32/spirv-opt.exe'                  : 'bin/windows/Win32/spirv-opt.exe',
    'angle-384ce5c/out/Release-Win32/spirv-reduce.exe'               : 'bin/windows/Win32/spirv-reduce.exe',
    'angle-384ce5c/out/Release-Win32/spirv-remap.exe'                : 'bin/windows/Win32/spirv-remap.exe',
    'angle-384ce5c/out/Release-Win32/spirv-val.exe'                  : 'bin/windows/Win32/spirv-val.exe',
    'angle-384ce5c/out/Release-Win32/libEGL.dll.lib'                 : 'lib/windows/Win32/libEGL.dll.lib',
    'angle-384ce5c/out/Release-Win32/libGLESv1_CM.dll.lib'           : 'lib/windows/Win32/libGLESv1_CM.dll.lib',
    'angle-384ce5c/out/Release-Win32/libGLESv2.dll.lib'              : 'lib/windows/Win32/libGLESv2.dll.lib',
    'angle-384ce5c/out/Release-Win32/libGLESv2_with_capture.dll.lib' : 'lib/windows/Win32/libGLESv2_with_capture.dll.lib',
    'angle-384ce5c/out/Release-Win32/angle_libs/openGL32.dll.lib'    : 'lib/windows/Win32/openGL32.dll.lib',
}

shutil.rmtree(angle_dest, ignore_errors=True)

for dict_key in file_dict:
    # src_path = os.path.join(my_dir, dict_key)
    # dst_path = os.path.join(my_dir, angle_dest, file_dict[dict_key])
    src_path = dict_key
    dst_path = os.path.join(angle_dest, file_dict[dict_key])
    dst_path_parent = os.path.dirname(dst_path)
    os.makedirs(dst_path_parent, exist_ok=True)
    if os.path.isdir(src_path):
        print("Copying directory", src_path, "to", dst_path)
        shutil.copytree(src_path, dst_path)
    elif os.path.isfile(src_path):
        print("Copying file", dict_key, "to", dst_path)
        shutil.copy2(src_path, dst_path)
    else:
        print(src_path, "could not be found.")
