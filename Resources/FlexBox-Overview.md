# Flexbox
Flexbox allows you to create flexible, responsive website layouts. 
Essentially, they display HTML elements as flexible box models that are easy to resize and reposition.

Flexbox containers are one-dimensional, meaning they lay out boxes one row or column at a time.
    * Unlike grids, which are two dimensional.

Now let's cover the main elements of Flexbox.

### Flex Container 
`Flex containers` are HTML elements with `flex` or `inline-flex` as their display property value.
`Flex items` are the direct children of `flex containers`.
Both `flex containers` and `flex items` have properties for positioning them.
`Flex containers` have six properties:
    * `flex-direction`: Specifies the direction (row or column) that flex items should be positioned in.
        * Essentialy, it defines the `main axis` of the flexbox.
        * The `cross axis` will be the axis which is perpendicular to the main axis.
    * `flex-wrap`: Specifies whether flex item overflow should wrap onto multiple lines.
        * By default, all flex items are positioned on a single line and do not wrap.
        * `flex-items` may overflow beyond the container if they are not set to wrap. (Or if overflow isn't hiddent)
    * `flex-flow`: An alternative to using both `display` and `flex-flow`. Helps you shorten your code by combining the two.
        * Example: `flex-flow: column wrap;`
    * `justify-content`: Specifies how `flex items` should be positioned along the `main axis`.
        * By default, `flex items` are aligned with the starting edge of the main axis.
    * `align-items`: Specifies how `flex items` should be positioned along the `cross axis`.
        * By default, `align-items` is set to stretch the `flex items` along the `cross axis`.
    * `align-content`: Specifies how a `flex container's lines` are positioned along the `cross axis`.
        * Doesn't affect flexboxes that are set to `nowrap`, as they only have one `line`.
        * Like `align-items`, the `lines` are stretched to fill the `cross axis` by default.

`Flex items` also have six properties:
    * Note: These properties only affect the specific `flex item`.
    * `align-self`: Specifies how `flex items` should be positioned along the `cross axis`.
        * Overrides `align-items`.
    * `order`: Specifies how the `flex items` are arranged, letting you reposition the items without altering the layout.
        * Only use this property if necessary, it will prevent screen readers from getting the correct ordering of the items.
        * It's best practice to rearrange the items directly, instead of using CSS.
    * `flex-grow`: Specifies how much remaining space should be added to the item's size.
        * By default, `flex-grow` is set to `0`.
    * `flex-shrink`: Similarly, `flex-shrink` specifies how much the item should shrink when all `flex items` in the container exceed the flexbox's size.
        * Essentially shrinks the item(s) to fit in the container.
        * By default, `flex-shrink` is set to `1`.
        * If the value is set to `0`, then the items will not be shrunk.
    * `flex-basis`: Specifies the initial length of the item.
        * By default, `flex-basis` is set to `auto`.
        * Note that you are setting the `content box's` initial width. But you can change it to set the `border box's` width instead using the `box-sizing` property.
    * `flex`: Another shorthand property that combines `flex-grow`, `flex-shrink`, and `flex-basis`.
        * `flex: flex-grow, flex-shrink, flex-basis`  ->  `flex: 0.5 0 100px;`
        * `flex: inherit` will inherit the parent element's `flex` values.
        * A few equivalencies to keep in mind:
            * `auto` == `flex: 1 1 auto;`
            * `none` == `flex: 0 0 auto;`
            * `initial` == `flex: 0 1 auto` (flex's default value)

Each property has different values to choose from. More on those later.

### Flex
As mentioned before, `flex` makes browsers display HTML elements as a block-level flexbox.
Setting an element's display to 'flex' will covert the element and its direct children to flexible elements.
Only the direct children will be affected, grandchildren will not be converted.
    * HTML element -> flexible box
    * Element's direct children -> flex items

### Inline-Flex
Similarly, `inline-flex` makes browsers display HTML elements as inline-level flexible box models.
Setting an element's display to 'inline-flex' will covert the element and its direct children to flexible elements.
Again, grandchildren are unaffected.


