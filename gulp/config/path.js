import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
    build: {
        images: `${buildFolder}/asset/`,
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        files: `${buildFolder}/files/`,
        fonts: `${buildFolder}/fonts/`,
    },
    src: {
        images: `${srcFolder}/asset/**/*.{jpg,jpeg,png,gif,webp,mp4,m4v}`,
        svg: `${srcFolder}/asset/**/*.svg`,
        js: `${srcFolder}/js/app.js`,
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.pug`,
        files: `${srcFolder}/files/**/*.*`,
    },
    watch: {
        images: `${srcFolder}/asset/**/*.{jpg,svg,jpeg,png,gif,ico,webp,mp4,m4v}`,
        js: `${srcFolder}/js/**/*.js`,
        scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.pug`,
        files: `${srcFolder}/files/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``,
}