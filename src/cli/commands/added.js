export default function () {
    return {
        command: 'added <msg>',
        description: 'Writes your changelog indicating new stuff.',
        action(parser) {
            parser.root.children[0].children[0].value = Date.now().toString();
        }
    };
}
