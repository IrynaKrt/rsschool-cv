# Iryna Sittsava
## Student & future full-stack developer

#### **My e-mail:** irynakrt@gmail.com
#### **My phone:** +375447174281 (Telegram&WhatsApp)

### Somethings about me:
#### My name is Irina, I'm 19 years old and my English is not that good...
#### By education I am a teacher of German, with level B2, but I became interested in another "language". And now for a little over 5 months I have been learning JavaScript! 
#### Of my strengths, I can single out perseverance and diligence - which allows me not to quit my studies, even when it is very difficult! I am also an open, active and very sociable person.
#### I am ready to learn and learn new things, because I want to be useful!

### Skills
* basic knowledge of layout & design;
* basic knowledge of CSS and SCSS syntax;
* good command of JS
* skills of working with Git&GitHub;
* skills of working with JQuery, Bootstrap, Angular;
* skills of working with Webpack, Gulp;
* skills of working with AJAX, RAF;
* creating projects in OOP-style and own mini-library;

### for example:
``` JavaScript
    const postData = async (url, data) => {
        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    };

    const getResource = async (url) => {
        let res = await fetch(url);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }; 

    export {postData, getResource}; 
 ```
#### or
``` JavaScript
function createCards(response) {
        response.forEach(({src, title, link}) => {
            let card = document.createElement('div');

            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
        
            card.innerHTML = `
                <div class="styles-block">
                    <img src=${src} alt="style">
                    <h4>${title}</h4>
                    <a href=${link}>Подробнее</a>
                </div>
            `;

            document.querySelector(wrapper).appendChild(card);
        });
    }
```

#### I don't have any work experience yet, but I would like to try to work in a team and see how this process really happens!

### Education:
1. MINSK STATE LINGUISTIC UNIVERSITY COLLEGE OF LINGUISTICS
2. intensive: "Frontend Start" from Itlogia
3. Practical JavaScript (Advanced level) from UDEMY
4. The full course on JavaScript + React (the part about React is still in the study!) from UDEMY

### My English is not good...(A2)
#### But I'll try to raise my level!
