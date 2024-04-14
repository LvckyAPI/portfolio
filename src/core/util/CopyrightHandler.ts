export class CopyrightHandler {
    public static printLvckyWorldBrandingToConsole() {
        const styleLogo = 'color: #D795FF; font-size:17px;';
        const styleText = 'color: #EBCAFF; font-size:17px;';

        const logo = `%c
    "=-:::::::::::::::::::::::::::::::::::::=
    "+:                                     +
    "+:                                     +
    "+:          . .                   :    +
    "+:          :=+    .=.          -+.    +
    "+:        .+***.  :+*:    :    +*=     +
    "+:        +**=.  .+**   :-=   -**.     +
    "+:       :***.   ++**  =**+  -+*:      +
    "=:       ++*-    ***= .+**= -*+=       =   %cThis website is made with ❤️ by LvckyWorld %c
    "=:      :***     ***:.+***-.***.       =   %cIt's based on Next.js and contains TailwindCSS %c
    "=:      =**+     ***-+***+--+*=        =   %cDo you want to visit us? https://lvckyworld.net %c
    "=:      +**=     ***+**=*****+         =   %cThe design is inspired by https://cnrad.dev/ %c
    "=:    :+****=+*+=*****=.*****:         =
    "=:   .:+****+==--+***+. +***-          =
    "=:      ..       :++=   +**=           =
    "=:                     :+=:            =
    "=:                      .              =
    "=:                                     =
    "=:                                     =
    "=-:::::::::::::::::::::::::::::::::::::=
    `;

        console.clear();
        console.log(logo, styleLogo, styleText, styleLogo, styleText, styleLogo, styleText, styleLogo, styleText, styleLogo);
    }

    public static getLvckyWorldBrandingForHtml() {
        return `
    <!--
    "=-:::::::::::::::::::::::::::::::::::::=
    "+:                                     +
    "+:                                     +
    "+:          . .                   :    +
    "+:          :=+    .=.          -+.    +
    "+:        .+***.  :+*:    :    +*=     +
    "+:        +**=.  .+**   :-=   -**.     +
    "+:       :***.   ++**  =**+  -+*:      +
    "=:       ++*-    ***= .+**= -*+=       =   This website is made with ❤️ by LvckyWorld
    "=:      :***     ***:.+***-.***.       =   It's based on Next.js and contains TailwindCSS
    "=:      =**+     ***-+***+--+*=        =   Do you want to visit us? https://lvckyworld.net
    "=:      +**=     ***+**=*****+         =   The design is inspired by https://cnrad.dev/
    "=:    :+****=+*+=*****=.*****:         =   
    "=:   .:+****+==--+***+. +***-          =
    "=:      ..       :++=   +**=           =
    "=:                     :+=:            =
    "=:                      .              =
    "=:                                     =
    "=:                                     =
    "=-:::::::::::::::::::::::::::::::::::::=
    -->
    `;
    }

}
