import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import raname from 'gulp-rename';

import cleanCss from 'gulp-clean-css';
import webpcss from 'gulp-webpcss';
import autoprefixer from 'gulp-autoprefixer';
import groupCssMediaQueries from 'gulp-group-css-media-queries';


const sass = gulpSass(dartSass);

export const scss = () => {
    return app.gulp.src(app.path.src.scss, {soursemaps: true})
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: 'SCSS',
            massege: 'Error: <%= error.massage %>'
        })
    ))
    .pipe(app.plugins.replace(/@img\//g, '../asset/'))
    .pipe(sass({
        outputStyle: 'expanded'
    }))

    .pipe(
        app.plugins.if(
            app.isBuild,
            groupCssMediaQueries()
        )
    )

    .pipe(
        app.plugins.if(
            app.isBuild,
            webpcss(
                {
                    webpClass: ".webp",
                    noWebpClass: ".no-webp"
                }
            )
        )
    )

    .pipe(
        app.plugins.if(
            app.isBuild,
            autoprefixer({
                grid: true,
                overriderBrowserlist: ["last 3 version"],
                cascade: true
            })
        )
    )
    .pipe(cleanCss())
    .pipe(raname({
        extname: '.min.css'
    }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream())
}