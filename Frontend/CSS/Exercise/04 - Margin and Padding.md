# 04 - Margin and Padding

References
- https://www.w3schools.com/css/css_margin.asp 
- https://www.w3schools.com/css/css_padding.asp
- https://www.w3schools.com/css/css_boxmodel.asp
- https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing

Start with this HTML

    <p class="task">Margin</p>
    <div class="madde">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>

    <p class="task">Padding</p>
    <div class="padde">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>

    <p class="task">Margin and padding</p>
    <div class="madde padde">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>

    <p class="task">Margin to the left and padding above</p>
    <div class="maddeSpecial">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>


Add this styling:

        div {
            border: solid 3px;
            background: grey;
            margin: 0;
            padding: 0;
        }

Continue with the CSS and create this page:

![](img/04.png)