/** @type LanguageFn */
export default function (hljs) {
    return {
        name: 'REXX',
        aliases: ['rexx','TRL','TRL-2'],
        case_insensitive: true,
        keywords: {
            $pattern: /[a-zA-Z]+(?:-[a-zA-Z0-9]+)*/,
            keyword: [
                'Address',
                'Arg',
                'Call',
                'Do',
                'End',
                'Drop',
                'Exit',
                'If',
                'Then',
                'Else',
                'Interpret',
                'Iterate',
                'Leave',
                'Nop',
                'Numeric',
                'Options',
                'Parse',
                'Procedure',
                'Pull',
                'Push',
                'Queue',
                'Return',
                'Say',
                'Select',
                'Signal',
                'Trace',
                'Upper',
                'RC',
                'Result',
                'Sigl',
            ],
            built_in: [
                'DELSTACK',
                'DROPBUF',
                'EXECIO',
                'EXECUTIL',
                'HE',
                'HI',
                'HT',
                'MAKEBUF',
                'NEWSTACK',
                'QBUF',
                'QELEM',
                'QSTACK',
                'RT',
                'SUBCOM',
                'TE',
                'TS',
            ]
        },
        contains: [
            hljs.COMMENT(
            /\/\*/,
            /\*\//,
            ),
            {
                scope: 'string',
                begin: '"', end: '"'
            },
            {
                scope: 'string',
                begin: "'", end: "'"
            },
            {
                scope: 'operator',
                begin: /(\+| - |\/==|\/=|\*\*|\*|\/\/|\/|<>|\**\|\*\|>=|<=|¬<|¬>|>|<|==|¬==|=|¬=|¬|&&|&|%)/
            },
            {
                scope: 'number',
                begin: /(\b[0-9]+(?:(\.)[0-9]+)*)/
            },
        ]
    }
}