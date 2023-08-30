Ideas for solo project:

Chromesthesia site (Honeytone)
- each hexagon renders from left to right, and quick ripple once all are rendered. From there, multi-color changes starting at top right corner. Once reached opposing ends, ripple starts from right to left. clicking on a button, causes a ripple
- the color you pick will give a coordinated song epitomizing emotion. (lighter = happier/ upbeat, darker = slow/ sad)
- log will be kept (option to turn off in order to explore; click on rainbow bee) of what color you picked, and personalized color pallete will be populated somewhere on page
    - is there a technology I can research to accomplish this?
- reactive site that creates waves through the color before you click, and will ripple when you click on color
- each color is a honeycomb/ hexagonal structure... maybe have a vibing bee/ colorful bee as a logo
    - site will open color-coordinated song in another window

- once returned to site, a window will pop up... "what did we think? *eye emoji*"
    - options will be: banger *fire x 2*, lit *fire*, meh, pass *thumb down*, hard pass *thumb down x 2*
    - comments section (greyed out... tell me what you really think); add further notes/ thoughts on song. Friends can see your comments on the songs you listened to, and it could inspire discussion or branching of new songs
- Possibly look into machine learning through TensorFlow
    -can create conditionals like... if classified under *broad ROYGBIV color*, then pick a certain song/ artists t`hat is epitomized from it
- bee cursor
    - https://custom-cursor.com/en/collection/neon/neon-bee-honeycomb
    - https://custom-cursor.com/en/collection/neon/neon-bee
- have feed at bottom that scrolls periodically. Have each name of person from cohort that scrolls by every 5 seconds with different colors of each hexagon
- Each individual profile is an AI image created from the colors most epitomizing their music preference
    
- Possibly use redux/ object property to assign history of colors that were accessed so far, then gets re-rendered
    - reset upon logout or after certain amount of time

- explore different animation styles that are possible. Add border to buttons. Add maybe texture to buttons?

- create a credit system, where after amount of time (or adding funds) you can get credits, which allow you to save AI images from friends profiles. Maybe limit updating profile AI image depending on amount of credits you have

- Profile starts with logo, and when ready to generate a picture, click on profile image. It will disappear for a second, and reappear with an AI image

Steps:
    - Html
    - CSS
    - DOM manipulation (jS)
        - curser
        - profiles across the screen
        - adding click logic
    - Login
    - Database/ machine learning?
        - AI image rendering


Tech-stack:
    - OAuth for account registration
        - https://developers.google.com/identity/protocols/oauth2
    - Spotify API?
    - front-end:
        -D3 visual
    - back-end:
        - SQL or NO-SQL?

Web Pack?

                         (front page)
Index.js --| App ---| login ---| Hexagon Buttons ---| songSelector
                            ---| profile ---| collections
                            ---| explore
                            ---| friendFeed ---| Profile ---| chatlog





Challenges so far:
    - Using D3 svg
    - getting front-end and back-end to work (mongoose)
        - ES5/commonJS (require(), module.exports = {}) and ES6 Module syntax (import, export)
    