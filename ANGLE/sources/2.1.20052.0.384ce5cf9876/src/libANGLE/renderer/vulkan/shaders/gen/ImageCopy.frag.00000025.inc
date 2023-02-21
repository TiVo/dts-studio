// GENERATED FILE - DO NOT EDIT.
// Generated by gen_vk_internal_shaders.py.
//
// Copyright 2018 The ANGLE Project Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//
// shaders/gen/ImageCopy.frag.00000025.inc:
//   Pre-generated shader for the ANGLE Vulkan back-end.

#pragma once
constexpr uint8_t kImageCopy_frag_00000025[] = {
    0x1f,0x8b,0x08,0x00,0x00,0x00,0x00,0x00,0x02,0xff,0x85,0x96,0xed,0x4b,0x9e,0x65,
    0x18,0xc6,0xef,0xe7,0xdd,0x69,0xbe,0x4c,0xdd,0xcc,0x91,0xab,0xb5,0x09,0x85,0x4b,
    0x1f,0xc8,0x96,0x69,0x1b,0xd8,0xb2,0xd5,0xb2,0x36,0xdd,0x4b,0xa5,0x50,0x39,0xe6,
    0x6a,0xca,0x4c,0x59,0x6d,0xf4,0x25,0x72,0x4d,0x83,0xb6,0x4a,0x09,0x59,0x51,0x0a,
    0xa5,0x1f,0x4a,0xb1,0x0f,0x41,0x9f,0x22,0xa2,0x36,0xdc,0xd6,0xcb,0x9f,0x13,0xbd,
    0x40,0xd0,0x75,0x5e,0xcf,0xef,0x1c,0x07,0x0f,0xc5,0x84,0x8b,0xfb,0xbe,0x8e,0xf3,
    0xed,0x38,0xce,0xf3,0xba,0x2f,0x9f,0x4c,0x7a,0x67,0x21,0x49,0x52,0x49,0x65,0x52,
    0x91,0xfc,0x96,0x94,0xfe,0x36,0x27,0xe9,0x80,0x24,0x49,0x55,0x92,0x8f,0xcf,0x03,
    0xfd,0x47,0xfa,0xdb,0xcf,0xbe,0x7e,0xb2,0xbd,0xf3,0xa1,0xa2,0xd9,0x6b,0x92,0x4c,
    0xf4,0x33,0x5b,0x6d,0x52,0x48,0xb2,0xe1,0x69,0xeb,0xcc,0xc8,0xe9,0x09,0xc3,0xab,
    0xc3,0xfa,0x3a,0xac,0xba,0xe0,0x67,0x78,0xc1,0x72,0x84,0xb7,0xea,0x98,0xd3,0x62,
    0x92,0xe4,0xc9,0x24,0x97,0x34,0x50,0x6f,0x27,0x4f,0xc7,0x52,0x60,0x15,0x82,0xa5,
    0xc1,0xea,0x04,0xcb,0x80,0x35,0x0a,0x96,0x05,0xbb,0x53,0xb0,0x1c,0xd8,0x5d,0x82,
    0xe5,0xc1,0xee,0x11,0xac,0x00,0xb6,0x4b,0xb0,0x0a,0xb0,0xfb,0x04,0xdb,0x04,0xb6,
    0x5b,0xb0,0x4a,0xb0,0xa2,0x60,0x55,0x60,0x9d,0x82,0xdd,0x01,0xd6,0x25,0x58,0x35,
    0xd8,0xa3,0xb1,0x4f,0x99,0x5b,0x7a,0xad,0x67,0xfb,0xc3,0xf3,0x5e,0xfa,0xe3,0xfb,
    0x1d,0xb2,0xb7,0x3e,0x6f,0x67,0xdf,0x10,0xa2,0xd2,0xd1,0x9e,0x89,0xbd,0xb1,0xf7,
    0x2d,0xc1,0x27,0x8f,0x4e,0xeb,0x6b,0x53,0xd8,0x17,0xd0,0x6f,0xf6,0xad,0xc1,0xb3,
    0x12,0xbb,0xd9,0xaa,0xd0,0x92,0x8d,0x58,0x36,0xf2,0x4d,0xa1,0xa5,0x87,0x7d,0xb5,
    0xe4,0xaa,0xc1,0xdf,0x6b,0xd5,0x93,0x2b,0x89,0xbc,0xea,0x6e,0xf5,0xd5,0x6b,0xda,
    0xaa,0xbf,0xcd,0x72,0x1f,0xab,0xdf,0x48,0xbf,0x1b,0xa8,0xdf,0x18,0xeb,0x94,0xb0,
    0x36,0xb4,0x6d,0x85,0x8f,0xf9,0x37,0x61,0x2b,0x88,0xbd,0x45,0xf4,0x6c,0xc7,0x5e,
    0x1f,0xcf,0x4d,0x3a,0xf6,0xb2,0x0d,0xde,0xde,0x67,0x8f,0x6b,0xe3,0xec,0xf8,0x7e,
    0x0f,0xda,0x4d,0xf7,0x3e,0x78,0x5a,0xde,0xe6,0x90,0xb1,0x57,0x7a,0xaa,0x7f,0x29,
    0x9e,0x56,0xfb,0x31,0xde,0x7b,0xd1,0x62,0xfb,0xfd,0x65,0x35,0xfb,0xca,0xf6,0x07,
    0x39,0xe7,0x16,0xff,0x34,0xdc,0xf3,0x70,0x78,0x96,0xf7,0x8c,0xf8,0x0f,0xc2,0xc1,
    0xf7,0xc7,0xf1,0xf1,0xfd,0xa9,0xb2,0xde,0x4c,0x73,0xc6,0x7d,0x7f,0xb9,0xac,0xb7,
    0x57,0x38,0xb3,0x56,0x7f,0x9d,0x5a,0xfb,0xe0,0xbf,0xce,0x77,0x9e,0x89,0xbd,0xc9,
    0xc5,0xba,0x59,0xf8,0x1b,0xf6,0x67,0x40,0xac,0x7f,0x7b,0x39,0x57,0xb5,0xf4,0xef,
    0x50,0x60,0x50,0xc3,0xb7,0x5c,0xcb,0xf2,0x5e,0x4d,0x70,0x3e,0x37,0x63,0xef,0x0d,
    0x19,0x9a,0xf8,0x9e,0xb7,0x30,0xeb,0xbd,0xf8,0x34,0x83,0x5f,0x08,0x3e,0xb6,0xdf,
    0x46,0x5c,0x33,0x71,0x36,0xeb,0xbb,0x89,0x6b,0x21,0xce,0xcf,0xa7,0xe1,0x6b,0xc1,
    0x67,0x87,0xdc,0x03,0x36,0xff,0x3f,0x02,0xf3,0x56,0xf8,0xfc,0x1d,0xfc,0xfd,0x3e,
    0x68,0x45,0x8f,0xbd,0x0f,0x84,0xb8,0x3c,0x77,0xc2,0x36,0x7c,0xdf,0xa2,0x5f,0xf7,
    0x83,0x0f,0x86,0x9d,0x71,0xfa,0x06,0xcc,0xfd,0xfe,0x0a,0x39,0x3c,0x97,0x3d,0x7f,
    0x0f,0x5e,0xe6,0xf7,0x13,0x3e,0x39,0x62,0x76,0x89,0x86,0xdd,0x68,0x68,0x13,0x0d,
    0x0f,0x80,0xbb,0x86,0x76,0x30,0xd7,0x50,0x14,0x0d,0x66,0xeb,0xe0,0x6e,0xb2,0xba,
    0x1d,0xa2,0xe1,0x41,0x6a,0xa7,0x44,0x43,0x27,0xb8,0x6b,0xf8,0x16,0xcc,0xfd,0x4c,
    0x83,0xe7,0x2a,0x8a,0x86,0xab,0xf8,0xb4,0x12,0xd3,0x21,0x1a,0x1e,0x46,0xc3,0x1e,
    0xd1,0xd0,0x05,0xee,0x1a,0x1e,0x01,0x73,0x0d,0x3d,0xa2,0xc1,0x6c,0xdd,0xf1,0xdc,
    0x95,0xea,0x76,0x73,0x8e,0x0a,0x31,0x5f,0xa9,0xf6,0x55,0xf9,0xde,0x8c,0xa3,0xfb,
    0xf6,0x08,0xc7,0x6b,0xf8,0x15,0x89,0xeb,0x86,0x8f,0x7d,0x93,0x8f,0xf3,0x3d,0xfa,
    0x99,0x7b,0x02,0xce,0x7d,0x72,0xe6,0x0e,0x80,0xbf,0xcd,0x99,0x7b,0x0a,0xec,0x1a,
    0x71,0xf6,0x8d,0xf6,0x13,0x77,0x90,0x38,0xeb,0xe9,0x33,0xe0,0xde,0xf7,0x43,0xc4,
    0x26,0x82,0x1d,0x06,0x4b,0xc5,0xf7,0x7c,0xfc,0xbe,0x07,0xf0,0x3d,0x4c,0x0e,0xaf,
    0x71,0x84,0x1a,0x83,0x52,0xe3,0x28,0xf8,0x4b,0x81,0x99,0x7d,0xa3,0xc7,0xd0,0x34,
    0xc0,0x9d,0x70,0x54,0xe6,0xf1,0x1c,0xf1,0xc7,0x65,0x1e,0xcf,0x83,0xfb,0x3c,0x5e,
    0x00,0xf3,0x79,0x0c,0xcb,0x3c,0xcc,0x36,0x14,0xd6,0x28,0x3d,0x1e,0x12,0x1d,0x2f,
    0x52,0x3b,0x13,0xb9,0x57,0x44,0x1d,0x2f,0x83,0x1d,0x93,0x6f,0x3d,0x2d,0x3a,0x47,
    0x88,0xf3,0x75,0x31,0xe4,0x32,0xfc,0x04,0xb1,0x23,0x31,0xd7,0xa6,0xa8,0xeb,0x24,
    0x79,0x4e,0x70,0xdf,0xe4,0xe4,0x1e,0xb4,0xb9,0x0f,0xc3,0x69,0x54,0xf4,0xbe,0x82,
    0xde,0x53,0xa2,0xf7,0x55,0x70,0xd7,0x7b,0x1a,0xcc,0xf5,0x8e,0x8b,0x5e,0xb3,0x8d,
    0x85,0x35,0x4e,0xee,0x31,0xd1,0x7b,0x46,0xf4,0xae,0x93,0x6b,0x02,0xbc,0x0f,0x4e,
    0x1e,0x37,0xce,0x59,0x34,0x9f,0xd7,0xa8,0x39,0x8a,0xff,0x18,0x75,0xa7,0xa4,0xae,
    0xf9,0x4c,0x86,0x35,0x45,0xfc,0xa4,0xd4,0x3d,0xfb,0x1f,0x7d,0x7e,0xe3,0x36,0x7d,
    0x3e,0x47,0x9c,0xaf,0x77,0xe9,0xf3,0x79,0x62,0xcf,0x49,0x9f,0xdf,0x24,0xcf,0xf9,
    0xff,0xe9,0xb3,0x73,0x9a,0x42,0x93,0xc5,0x5c,0x27,0x66,0x9c,0xf8,0xc9,0xb2,0x99,
    0x0c,0x8b,0xef,0x06,0xb3,0x1c,0x22,0x6e,0x4a,0xe6,0x75,0x81,0x79,0x4d,0xcb,0xbc,
    0xde,0x01,0xf7,0x79,0x5d,0x04,0xf3,0x79,0xcd,0x4a,0xdf,0xcc,0x36,0x13,0xd6,0x25,
    0xea,0xce,0x88,0xae,0xf7,0xa8,0xbd,0x81,0xae,0x02,0x3d,0x72,0x5d,0xb3,0xc4,0x5c,
    0x12,0x3e,0xef,0xc3,0xe7,0xb2,0xf0,0xf9,0x00,0xdc,0xf9,0x7c,0x08,0xe6,0x7c,0xe6,
    0x85,0x8f,0xd9,0xe6,0xc2,0x5a,0x20,0xf7,0x9c,0xcc,0xf1,0x23,0xb8,0x64,0xb8,0x73,
    0x8d,0xe3,0x77,0x82,0xfb,0x7d,0x36,0x4f,0xec,0x82,0xdc,0x03,0x1f,0xc3,0xeb,0x8a,
    0xdc,0x03,0x9f,0x80,0x5f,0x27,0xff,0xa7,0x60,0x83,0xc2,0xf5,0x33,0xf0,0x3e,0xb8,
    0x2e,0x09,0x57,0xb3,0x2d,0x86,0xb5,0x44,0xbd,0x45,0xe1,0xf5,0x3d,0x31,0x1b,0xf2,
    0xbf,0xc0,0xfd,0x96,0x64,0xb6,0x37,0xf0,0x59,0x20,0x66,0x51,0xf8,0x7c,0x0e,0x9f,
    0x16,0xe1,0xf3,0x05,0xb8,0xf3,0x59,0x11,0x3e,0x66,0x5b,0x0e,0x6b,0x85,0x3a,0xcb,
    0xc2,0xe7,0x07,0x62,0x6e,0x30,0x43,0xe3,0xe3,0x7e,0x2b,0xc2,0xe7,0x26,0x3e,0x4b,
    0xc4,0x2c,0x0b,0x9f,0x2f,0xe1,0x33,0x2d,0x7c,0xbe,0x02,0x77,0x3e,0x6b,0xc2,0xc7,
    0x6c,0xab,0xd1,0xb7,0x54,0x67,0x55,0xf8,0xfc,0xc8,0x6f,0x94,0x9b,0x72,0x9e,0xdc,
    0x6f,0x4d,0xf8,0xfc,0x8a,0xcf,0x0a,0x31,0xab,0x65,0x33,0x9e,0x17,0xdf,0x5f,0x38,
    0x0f,0x73,0xc4,0xad,0x95,0x9d,0xd3,0x59,0xf1,0xfd,0x99,0xf3,0x3d,0x43,0xdc,0x7c,
    0xfc,0xbd,0x96,0x89,0xbf,0xd3,0xcc,0xf6,0x4f,0x98,0x5a,0x57,0x58,0xff,0x02,0x3c,
    0x97,0x98,0x92,0xf8,0x0d,0x00,0x00
};

// Generated from:
//
// #version 450 core
//
// #extension GL_EXT_samplerless_texture_functions : require
//
// layout(set = 0, binding = 0)uniform itexture3D src;
// layout(location = 0)out ivec4 dst;
//
// layout(push_constant)uniform PushConstants {
//
//     ivec2 srcOffset;
//     ivec2 dstOffset;
//     int srcMip;
//     int srcLayer;
//
//     bool flipX;
//     bool flipY;
//
//     bool premultiplyAlpha;
//     bool unmultiplyAlpha;
//
//     bool dstHasLuminance;
//     bool dstIsAlpha;
//
//     bool srcIsSRGB;
//     bool dstIsSRGB;
//
//     int dstDefaultChannelsMask;
//     bool rotateXY;
// } params;
//
// void main()
// {
//     ivec2 dstSubImageCoords = ivec2(gl_FragCoord . xy)- params . dstOffset;
//
//     ivec2 srcSubImageCoords = dstSubImageCoords;
//
//     if(params . flipX)
//     {
//         srcSubImageCoords . x = - srcSubImageCoords . x;
//     }
//     if(params . flipY)
//     {
//         srcSubImageCoords . y = - srcSubImageCoords . y;
//     }
//     if(params . rotateXY)
//     {
//         srcSubImageCoords . xy = srcSubImageCoords . yx;
//     }
//
//           ivec4 srcValue = texelFetch(src, ivec3(params . srcOffset + srcSubImageCoords, params . srcLayer), params . srcMip);
//
//     if(params . premultiplyAlpha)
//     {
//         srcValue . rgb *= srcValue . a;
//     }
//     else if(params . unmultiplyAlpha && srcValue . a > 0)
//     {
//         srcValue . rgb /= srcValue . a;
//     }
//
//            ivec4 dstValue = ivec4(srcValue);
//
//     if(params . dstHasLuminance)
//     {
//         dstValue . rg = dstValue . ra;
//     }
//     else if(params . dstIsAlpha)
//     {
//         dstValue . r = dstValue . a;
//     }
//     else
//     {
//         int defaultChannelsMask = params . dstDefaultChannelsMask;
//         if((defaultChannelsMask & 2)!= 0)
//         {
//             dstValue . g = 0;
//         }
//         if((defaultChannelsMask & 4)!= 0)
//         {
//             dstValue . b = 0;
//         }
//         if((defaultChannelsMask & 8)!= 0)
//         {
//             dstValue . a = 1;
//         }
//     }
//
//     dst = dstValue;
// }