import {terser} from 'rollup-plugin-terser';
import json from 'rollup-plugin-json';
import vue from 'rollup-plugin-vue'
import postCss from 'rollup-plugin-postcss'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve';
import builtins from 'rollup-plugin-node-builtins'
import replace from 'rollup-plugin-replace'
import tailwind from 'tailwindcss';

module.exports = {
    input: 'src/app.js',
    output: {
        file: 'static/app.js',
        name: 'app',
        format: 'iife'
    },
    plugins: [
        replace({
            'process.env.NODE_ENV': JSON.stringify( 'production' )
        }),
        postCss({
            plugins: [
                tailwind()
            ]
        }),
        builtins(),
        vue(),
        json(),
        commonjs(),
        resolve(),
        terser()
    ]
};