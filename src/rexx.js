export default function (hljs) {
    return {
        name: 'REXX',
        aliases: ['rexx'],
        case_insensitive: true,
        keywords: {
            $pattern: /[a-zA-Z]+(?:-[a-zA-Z0-9]+)*/,
            keyword: [
                'Address',
                'Arg',
                'Call',
                'Do',
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
            commands: [
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
        contains:
            [
                {
                    scope: 'comment',
                    being: /\/\*/i,
                    end: /\*\//i,
                },
                {
                    scope: 'operator',
                    begin: /(\+| - |\*\*|\*|\/|<>|>=|<=|¬<|¬>|>|<|==|¬==|=|¬=|&&|&|%|::)/
                },
                {
                    scope: 'number',
                    begin: /([0-9]+(?:(\.|,)[0-9]+)*)/
                },
                {
                    scope: 'string',
                    begin: '"', end: '"'
                },
                {
                    scope: 'string',
                    begin: "'", end: "'"
                },
            ]

    }
}