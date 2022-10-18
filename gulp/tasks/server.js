export const server = (done) => {
    app.plugins.browsersync.init({
        proxy: "wsk.loc",
        // server: {
        //     baseDir: `${app.path.build.html}`
        // },
        notify: false,
        part: 3000
    })
}