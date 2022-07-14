function tiptapCurrentVersion () {
        let importedTiptapCurrentVersion
        // eslint-disable-next-line
        if (process.env.VUE_VERSION_BASE === "2") {
            // importedTiptapCurrentVersion = import('@tiptap/vue-2');
            importedTiptapCurrentVersion = require('@tiptap/vue-2')
        }
        // eslint-disable-next-line
        else if (process.env.VUE_VERSION_BASE === "3") {
            // importedTiptapCurrentVersion = import('@tiptap/vue-3');
            importedTiptapCurrentVersion = require('@tiptap/vue-3')

        }
        return importedTiptapCurrentVersion
}
const AllTiptapModules = tiptapCurrentVersion()
let VueNodeViewRenderer = AllTiptapModules.VueNodeViewRenderer

export {
    VueNodeViewRenderer
}



