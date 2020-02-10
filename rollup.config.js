import {terser} from 'rollup-plugin-terser';
import json from 'rollup-plugin-json';
import vue from 'rollup-plugin-vue'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve';
import builtins from 'rollup-plugin-node-builtins'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import autoprefixer from 'autoprefixer';
import postcssImport from 'postcss-import';
import tailwind from 'tailwindcss';

const production = !process.env.ROLLUP_WATCH;

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
        postcss({
            plugins: [
                postcssImport,
                tailwind(),
                autoprefixer
            ],
            extract: 'static/app.css',
        }),
        builtins(),
        vue(),
        json(),
        resolve(),
        commonjs(),
        !production && livereload('static'),
        production && terser()
    ]
};