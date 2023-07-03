This is some feedback from Grace to someone else:

- ~~Logo should be in a header, not main~~
- ~~Logo must have correct alt text~~
- The input must have a label
- The error element (or an element wrapping the error) should be present in the DOM at all times, have an aria-live attribute and a unique ID. The input should have aria-describedby pointing to that ID. This is how you programmatically link errors to their inputs
- The form should have a submit event listener but you seem to have the event on the input instead
- The button img alt should say 'submit' no need for the word icon (or you can leave alt blank and label the button in another way if you prefer)
- I expect once you add a header outside of main your layout will break. You may want to place the image into a labelled aside element outside of main if you think it is a meaningful image; If you do that you must update the alt description to describe the image properly. I should be able to see it in my head based off the description. If not and you think the image is decorative only, it can be inside a div but alt should be empty.
- I think the performance could be improved once to change that html structure anyway. Having one image in an aside or div outside of main will allow you to use the picture element. Much more performance. You then can arrange your layout and order of items using css grid. (eg "header", "aside", "main" rows by default, then a 2-column, 2 row grid of "header aside", "main aside" on desktop)

And somemore feedback from Grace:

- Landmarks like aside and section should always have an accessible name. Eg aria-label

So you could do something like

Header
Aside - aria-label of “image”
Main
Footer (for frontend mentor attribution)

Then use css grid to order and arrange them as necessary

With the aside labelled like that it would be announced to screenreaders as “complementary image” then inside it you would place the picture element and make sure the img has a proper alt description of what the image looks like

And just one more feedback from Grace:

The HTML needs tweaking in this.

You've put the header within main but it can't go there. Header and main are distinct landmarks, they can't sit within each other. There is no reason to have two logos in this anyway. As it's only a landing page, it's fine for all to be within main and you can use CSS grid to achieve the required layout 2.Logo is important content. It definitely cannot have an empty alt!
There is no reason to wrap every element in a div like the h1 and paragraph. Get out of that habit as soon as possible. Always keep HTML as simple as it can be
The input needs a label. This is inaccessible at the moment
The hidden class should be on validationMessagecontainer\_\_text not it's wrapping div. The wrapping div needs to be present in the DOM (not display none) at all times. It also needs aria-live on it.
The input then needs aria-describedby pointing to the error wrapping div's ID. This is how you programmatically link the error message to its input
The event listener should be on the form listening for a submit, not a click on the button
Never use width: 100vw; That is causing horizontal overflow so a sideways scrollbar appears. You will never want to use that as it will make the element wider than the screen on certain devices. 100vw means "full width of the viewport PLUS the width of the vertical scrollbar"
The image is missing the object-fit property so is becoming skewed/distorted
Because you are using CSS media queries of 1024px for large screens but 1000px in the picture element, it is causing the layout to break at some points as you shrink/enlarge the viewport
