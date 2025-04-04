In the client-old iteration, I've removed CRA and replaced with Vite,
    and I've also gotten rid of a shitload of deps, breaking the whole damn project

I'm thinking that the move is to: 
1. trash this version, 
2. copy over a fresh copy of the old, 
3a*. start coding the whole app from scratch
OR
3b*. Strip unnecessary deps, update deps that can be updated, and start replacing nextui compenents in-place with shadcn components
*No preference, maybe flip a coin?
    Flipped a coin, it landed on tails, so we're attempting remake-in-place... again xD

                 ______________
    __,.,---'''''              '''''---..._
 ,-'             .....:::''::.:            '`-.
'           ...:::.....       '
            ''':::'''''       .               ,
|'-.._           ''''':::..::':          __,,-
 '-.._''`---.....______________.....---''__,,-
      ''`---.....______________.....---''

[3a] Coding it Again
    [X] Create React Router App
    [X] Setup up routing to match old project
    [ ] Starting at the End Pages, refactor code and replace components
        [ ] End Pages
            [X...?] Zoning
            [ ] Permit
            [ ] License
        [ ] Assistant
        [ ] Home
    [ ] Test thoroughly
    [ ] Style to match ClayCo branding