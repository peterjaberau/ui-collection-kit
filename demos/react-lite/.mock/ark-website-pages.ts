export const data = [
    {
        "id": "changelog",
        "title": "Changelog",
        "description": "All notable changes will be documented in this file.",
        "metadata": {
            "readingTime": 3,
            "wordCount": 918
        },
        "content": "<h3>Unreleased</h3>\n<h3>Added</h3>\n<ul>\n<li><strong>[NEW] Listbox</strong>: Introduced the <code>Listbox</code> component for selecting a single or multiple items from a list. See the\n<a href=\"https://ark-ui.com/docs/components/listbox\">documentation</a> for details.</li>\n<li>Improved support for grouping collection items. Check the <code>Listbox</code>, <code>Select</code> or <code>Combobox</code> documentation for more\ndetails.</li>\n</ul>\n<h3>Changed</h3>\n<ul>\n<li>Added <code>package.json</code> to <code>exports</code> for improved compatibility with tools like Vite.</li>\n</ul>\n<h2>[5.6.0] - 2025-04-15</h2>\n<h3>Added</h3>\n<ul>\n<li><strong>[NEW] AngleSlider</strong>: Introduced the <code>AngleSlider</code> component for selecting an angle. See the\n<a href=\"https://ark-ui.com/docs/components/angle-slider\">documentation</a> for details.</li>\n<li><strong>[NEW] FloatingPanel</strong>: Introduced the <code>FloatingPanel</code> component for creating floating windows. See the\n<a href=\"https://ark-ui.com/docs/components/floating-panel\">documentation</a> for details.</li>\n<li><strong>Toast</strong>: Added toast queuing when the max limit is reached:\n<ul>\n<li>New toasts were queued instead of dropped</li>\n<li>Queued toasts were shown when space became available</li>\n<li>Queue cleared when all toasts were removed</li>\n</ul>\n</li>\n<li><strong>Combobox</strong>:\n<ul>\n<li>Fallbacked to the trigger element as the positioning anchor</li>\n<li>Added <code>data-empty</code> attribute to indicate an empty listbox or content</li>\n</ul>\n</li>\n</ul>\n<h2>[5.5.0] - 2025-04-05</h2>\n<h3>Added</h3>\n<ul>\n<li><strong>Presence</strong>: Added support for skipping the initial animation when the component is mounted. This can be used in all\ndisclosure components (e.g., <code>Dialog</code>, <code>DatePicker</code>, <code>Menu</code> etc).</li>\n</ul>\n<h3>Fixed</h3>\n<ul>\n<li>\n<p><strong>Tabs</strong>: Fixed issue where tabs indicator animation behaves inconsistently.</p>\n</li>\n<li>\n<p><strong>Date Picker</strong></p>\n<ul>\n<li>Fixed issue where datepicker throws error when navigating month view.</li>\n<li>Fixed issue where range selection doesn't reset correctly when clicking the same start date.</li>\n</ul>\n</li>\n<li>\n<p><strong>Disclosure Components</strong></p>\n<ul>\n<li>Fixed issue where pointerdown outside doesn't work consistently on mobile devices.</li>\n<li>Improved pointerdown outside click detection in shadow DOM environments.</li>\n</ul>\n</li>\n</ul>\n<h2>[5.4.0] - 2025-03-28</h2>\n<h3>Added</h3>\n<ul>\n<li>\n<p><strong>Slider</strong></p>\n<ul>\n<li>Add support for <code>origin: end</code> to align the thumb to the end of the track.</li>\n<li>Expose <code>thumbSize</code> as CSS variables in the root element. Can be useful for styling the slider.</li>\n</ul>\n</li>\n<li>\n<p><strong>Menu</strong></p>\n<ul>\n<li>Added <code>onSelect</code> event to the <code>Menu.Item</code> component.</li>\n</ul>\n</li>\n</ul>\n<h3>Fixed</h3>\n<ul>\n<li>Ensured each component's state machine starts before processing events.</li>\n<li><strong>HoverCard, ColorPicker</strong>: Added missing <code>tabIndex</code> for better dialog support.</li>\n<li><strong>Menu</strong>: Assigned unique IDs to menu items to improve accessibility and HTML validation.</li>\n</ul>\n<h2>[5.3.1] - 2025-03-24</h2>\n<h3>Fixed</h3>\n<ul>\n<li>Fixed an issue where a function was imported from a package that wasn't declared as a dependency.</li>\n</ul>\n<h2>[5.3.0] - 2025-03-24</h2>\n<h3>Added</h3>\n<ul>\n<li><strong>Collapsible</strong>: Added an <code>Indicator</code> part to display whether the collapsible was open or closed.</li>\n<li><strong>ColorPicker</strong>: Added support for formatting the <code>ValueText</code> component.</li>\n</ul>\n<pre><code class=\"language-tsx\">&#x3C;ColorPicker.ValueText format=\"hex\" /> // #ff0000\n</code></pre>\n<h3>Fixed</h3>\n<ul>\n<li><strong>Combobox</strong>: Fixed an issue where <code>onOpenChange</code> was called with the same <code>open</code> value.</li>\n<li><strong>DownloadTrigger</strong>: Added the missing <code>use client</code> directive.</li>\n<li><strong>Splitter</strong>: Fixed an issue where <code>onResizeStart</code> and <code>onResizeEnd</code> callbacks weren't triggered during keyboard\ninteractions.</li>\n</ul>\n<h2>[5.2.0] - 2025-03-22</h2>\n<h3>Added</h3>\n<ul>\n<li><strong>[NEW] DownloadTrigger</strong>: Added Component for downloading a blob or file, whether retrieved synchronously or\nasynchronously.</li>\n</ul>\n<pre><code class=\"language-tsx\">import { DownloadTrigger } from '@ark-ui/react/download-trigger'\n\nexport const DownloadImage = () => {\n  async function fetchImage() {\n    const response = await fetch('https://picsum.photos/200/300')\n    return response.blob()\n  }\n\n  return (\n    &#x3C;DownloadTrigger data={fetchImage} fileName=\"avatar.jpeg\" mimeType=\"image/jpeg\">\n      Download Image\n    &#x3C;/DownloadTrigger>\n  )\n}\n</code></pre>\n<h3>Changed</h3>\n<ul>\n<li><strong>NumberInput</strong>: Set the default step to <code>0.01</code> when <code>formatOptions.style</code> was set to <code>percent</code>.</li>\n<li><strong>[Breaking] Splitter</strong>: Redesigned splitter machine to support more use cases and improve DX. Check out the\n<a href=\"https://ark-ui.com/docs/components/splitter\">Splitter</a> documentation for more details.</li>\n</ul>\n<h3>Fixed</h3>\n<ul>\n<li><strong>Toast</strong>: Fixed issue where setting <code>offsets</code> to <code>undefined</code> caused the machine to throw.</li>\n<li><strong>Select</strong>: Fixed issue where select <code>valueAsString</code> lost reactivity.</li>\n</ul>\n<h2>[5.1.0] - 2025-03-17</h2>\n<h3>Added</h3>\n<ul>\n<li>Added support for a cleanup function in <code>ref</code>.</li>\n</ul>\n<h3>Fixed</h3>\n<ul>\n<li><strong>Field</strong>: Exported the missing <code>useField</code> hook.</li>\n<li><strong>NumberInput</strong>: <code>onValueChange</code> correctly received <code>valueAsNumber</code>.</li>\n<li><strong>Slider</strong>: Thumbs initialized correctly when <code>min</code> was set to a non-zero value.</li>\n</ul>\n<h2>[5.0.1] - 2025-03-11</h2>\n<h3>Fixed</h3>\n<ul>\n<li>Effects now flush synchronously instead of using a microtask.</li>\n<li><strong>Checkbox</strong>: <code>data-invalid</code> is no longer set when <code>invalid</code> is <code>false</code>.</li>\n<li><strong>Combobox</strong>: Fixed unexpected cursor movement when editing input.</li>\n<li><strong>PinInput</strong>: OTP SMS autofill now works as expected.</li>\n<li><strong>RatingGroup</strong>: Fixed incorrect focus placement on the label.</li>\n<li><strong>TagsInput</strong>: Improved caret detection to prevent unintended tag removal.</li>\n<li><strong>Timer</strong>\n<ul>\n<li>Fixed slowdown when switching tabs/windows.</li>\n<li>Changed default <code>interval</code> from <code>250</code> to <code>1000</code>.</li>\n</ul>\n</li>\n</ul>\n<h2>[5.0.0] - 2025-03-06</h2>\n<p>Ark UI just got a major performance boost! 🚀</p>\n<h3>What’s new in v5?</h3>\n<ul>\n<li><strong>Blazing-fast performance</strong> – Every component runs smoother and renders faster.</li>\n<li><strong>Smaller bundle size</strong> – Leaner components and adapters for a more efficient build.</li>\n</ul>\n<p>We made this happen by using React’s native reactive primitives instead of external stores.</p>\n<p>In our stress tests with <strong>10,000 components</strong>, Ark v5 delivered <strong>1.5x–4x</strong> better performance across the board.</p>\n<p><img src=\"/static/v5-14071630.svg\" alt=\"Performance comparison showing Ark v5 is 1.5x-4x faster than other libraries\"></p>\n<h3>A quick note on tests</h3>\n<p>Most component updates are non-breaking, but due to this change, some tests may need adjustments. For example:</p>\n<pre><code class=\"language-jsx\">// Before\nit('should open by default', () => {\n  render(&#x3C;ComponentUnderTest defaultOpen />)\n  expect(screen.getByRole('dialog')).toBeInTheDocument()\n})\n\n// After\nit('should open by default', async () => {\n  render(&#x3C;ComponentUnderTest defaultOpen />)\n  expect(await screen.findByRole('dialog')).toBeInTheDocument()\n})\n</code></pre>\n<h4>Added</h4>\n<ul>\n<li><strong>Carousel</strong>: ⚠️ Breaking change: Added required prop <code>slideCount</code> to <code>Carousel.Root</code> component.</li>\n<li><strong>Clipboard</strong>: Added <code>onValueChange</code> and <code>defaultValue</code> props.</li>\n<li><strong>ColorPicker</strong>: Added <code>defaultFormat</code> prop.</li>\n<li><strong>Combobox</strong>: Added <code>defaultHighlightedValue</code> and <code>defaultInputValue</code> props.</li>\n<li><strong>DatePicker</strong>: Added <code>defaultFocusedValue</code> prop, <code>getViewProps</code>, and <code>visibleRangeText</code>.</li>\n<li><strong>HoverCard</strong>: Expanded interaction handlers.</li>\n<li><strong>Menu</strong>: Added <code>defaultHighlightedValue</code> prop.</li>\n<li><strong>Pagination</strong>: Added <code>defaultPageSize</code> prop.</li>\n<li><strong>PinInput</strong>: Added <code>count</code> prop for better SSR aria-label.</li>\n<li><strong>Progress</strong>: Added <code>locale</code> and <code>formatOptions</code> props.</li>\n<li><strong>QrCode</strong>: Added <code>pixelSize</code> prop.</li>\n<li><strong>Select</strong>: Added <code>defaultHighlightedValue</code> prop.</li>\n<li><strong>TagsInput</strong>: Added <code>defaultInputValue</code> prop.</li>\n<li><strong>Toggle</strong>: Reintroduced toggle machine.</li>\n</ul>\n<h4>Fixed</h4>\n<ul>\n<li><strong>Accordion</strong>: Fixed issue in Safari where clicking triggers didn't show content.</li>\n<li><strong>Avatar</strong>: Fixed <code>api.setSrc</code> not working.</li>\n<li><strong>Carousel</strong>: Fixed pagination sync and initial page issues.</li>\n<li><strong>File Upload</strong>: Fixed drag-and-drop when <code>directory: true</code>.</li>\n<li><strong>Menu</strong>: Fixed context menu positioning not updating on right-click.</li>\n<li><strong>Number Input</strong>: Fixed <code>value</code> prop not being consumed.</li>\n<li><strong>Pin Input</strong>: Fixed focus warnings and editing issues.</li>\n<li><strong>Progress</strong>: Allowed more precise (decimal) values.</li>\n<li><strong>Radio Group, Switch</strong>: Improved focus behavior in Safari.</li>\n<li><strong>Select</strong>: Fixed regression where <code>multiple: true</code> didn't work.</li>\n<li><strong>Steps</strong>: Ensured ARIA attributes use valid values and wrapped <code>&#x3C;li></code> elements correctly within <code>&#x3C;ul></code> or <code>&#x3C;ol></code>.</li>\n<li><strong>Textarea</strong>: Fixed <code>ResizeObserver</code> warning.</li>\n<li><strong>Timer</strong>: Fixed stopping issue when switching tabs; resolved issue where <code>action</code> prop was passed to <code>ActionTrigger</code>.</li>\n<li><strong>Toast</strong>: Fixed keyboard navigation skipping close button.</li>\n<li><strong>Toggle Group</strong>: Fixed <code>data-focus</code> not being removed on blur.</li>\n</ul>",
        "framework": "react",
        "toc": [
            {
                "title": "[5.6.0] - 2025-04-15",
                "url": "#560---2025-04-15",
                "items": []
            },
            {
                "title": "[5.5.0] - 2025-04-05",
                "url": "#550---2025-04-05",
                "items": []
            },
            {
                "title": "[5.4.0] - 2025-03-28",
                "url": "#540---2025-03-28",
                "items": []
            },
            {
                "title": "[5.3.1] - 2025-03-24",
                "url": "#531---2025-03-24",
                "items": []
            },
            {
                "title": "[5.3.0] - 2025-03-24",
                "url": "#530---2025-03-24",
                "items": []
            },
            {
                "title": "[5.2.0] - 2025-03-22",
                "url": "#520---2025-03-22",
                "items": []
            },
            {
                "title": "[5.1.0] - 2025-03-17",
                "url": "#510---2025-03-17",
                "items": []
            },
            {
                "title": "[5.0.1] - 2025-03-11",
                "url": "#501---2025-03-11",
                "items": []
            },
            {
                "title": "[5.0.0] - 2025-03-06",
                "url": "#500---2025-03-06",
                "items": []
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:i}=arguments[0];function _createMdxContent(d){const r={a:\"a\",code:\"code\",h2:\"h2\",h3:\"h3\",h4:\"h4\",img:\"img\",li:\"li\",p:\"p\",pre:\"pre\",span:\"span\",strong:\"strong\",ul:\"ul\",...d.components};return i(e,{children:[i(r.h3,{id:\"unreleased\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#unreleased\",children:n(r.span,{className:\"icon icon-link\"})}),\"Unreleased\"]}),\"\\n\",i(r.h3,{id:\"added\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#added\",children:n(r.span,{className:\"icon icon-link\"})}),\"Added\"]}),\"\\n\",i(r.ul,{children:[\"\\n\",i(r.li,{children:[n(r.strong,{children:\"[NEW] Listbox\"}),\": Introduced the \",n(r.code,{children:\"Listbox\"}),\" component for selecting a single or multiple items from a list. See the\\n\",n(r.a,{href:\"https://ark-ui.com/docs/components/listbox\",children:\"documentation\"}),\" for details.\"]}),\"\\n\",i(r.li,{children:[\"Improved support for grouping collection items. Check the \",n(r.code,{children:\"Listbox\"}),\", \",n(r.code,{children:\"Select\"}),\" or \",n(r.code,{children:\"Combobox\"}),\" documentation for more\\ndetails.\"]}),\"\\n\"]}),\"\\n\",i(r.h3,{id:\"changed\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#changed\",children:n(r.span,{className:\"icon icon-link\"})}),\"Changed\"]}),\"\\n\",i(r.ul,{children:[\"\\n\",i(r.li,{children:[\"Added \",n(r.code,{children:\"package.json\"}),\" to \",n(r.code,{children:\"exports\"}),\" for improved compatibility with tools like Vite.\"]}),\"\\n\"]}),\"\\n\",i(r.h2,{id:\"560---2025-04-15\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#560---2025-04-15\",children:n(r.span,{className:\"icon icon-link\"})}),\"[5.6.0] - 2025-04-15\"]}),\"\\n\",i(r.h3,{id:\"added-1\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#added-1\",children:n(r.span,{className:\"icon icon-link\"})}),\"Added\"]}),\"\\n\",i(r.ul,{children:[\"\\n\",i(r.li,{children:[n(r.strong,{children:\"[NEW] AngleSlider\"}),\": Introduced the \",n(r.code,{children:\"AngleSlider\"}),\" component for selecting an angle. See the\\n\",n(r.a,{href:\"https://ark-ui.com/docs/components/angle-slider\",children:\"documentation\"}),\" for details.\"]}),\"\\n\",i(r.li,{children:[n(r.strong,{children:\"[NEW] FloatingPanel\"}),\": Introduced the \",n(r.code,{children:\"FloatingPanel\"}),\" component for creating floating windows. See the\\n\",n(r.a,{href:\"https://ark-ui.com/docs/components/floating-panel\",children:\"documentation\"}),\" for details.\"]}),\"\\n\",i(r.li,{children:[n(r.strong,{children:\"Toast\"}),\": Added toast queuing when the max limit is reached:\",\"\\n\",i(r.ul,{children:[\"\\n\",n(r.li,{children:\"New toasts were queued instead of dropped\"}),\"\\n\",n(r.li,{children:\"Queued toasts were shown when space became available\"}),\"\\n\",n(r.li,{children:\"Queue cleared when all toasts were removed\"}),\"\\n\"]}),\"\\n\"]}),\"\\n\",i(r.li,{children:[n(r.strong,{children:\"Combobox\"}),\":\",\"\\n\",i(r.ul,{children:[\"\\n\",n(r.li,{children:\"Fallbacked to the trigger element as the positioning anchor\"}),\"\\n\",i(r.li,{children:[\"Added \",n(r.code,{children:\"data-empty\"}),\" attribute to indicate an empty listbox or content\"]}),\"\\n\"]}),\"\\n\"]}),\"\\n\"]}),\"\\n\",i(r.h2,{id:\"550---2025-04-05\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#550---2025-04-05\",children:n(r.span,{className:\"icon icon-link\"})}),\"[5.5.0] - 2025-04-05\"]}),\"\\n\",i(r.h3,{id:\"added-2\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#added-2\",children:n(r.span,{className:\"icon icon-link\"})}),\"Added\"]}),\"\\n\",i(r.ul,{children:[\"\\n\",i(r.li,{children:[n(r.strong,{children:\"Presence\"}),\": Added support for skipping the initial animation when the component is mounted. This can be used in all\\ndisclosure components (e.g., \",n(r.code,{children:\"Dialog\"}),\", \",n(r.code,{children:\"DatePicker\"}),\", \",n(r.code,{children:\"Menu\"}),\" etc).\"]}),\"\\n\"]}),\"\\n\",i(r.h3,{id:\"fixed\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#fixed\",children:n(r.span,{className:\"icon icon-link\"})}),\"Fixed\"]}),\"\\n\",i(r.ul,{children:[\"\\n\",i(r.li,{children:[\"\\n\",i(r.p,{children:[n(r.strong,{children:\"Tabs\"}),\": Fixed issue where tabs indicator animation behaves inconsistently.\"]}),\"\\n\"]}),\"\\n\",i(r.li,{children:[\"\\n\",n(r.p,{children:n(r.strong,{children:\"Date Picker\"})}),\"\\n\",i(r.ul,{children:[\"\\n\",n(r.li,{children:\"Fixed issue where datepicker throws error when navigating month view.\"}),\"\\n\",n(r.li,{children:\"Fixed issue where range selection doesn't reset correctly when clicking the same start date.\"}),\"\\n\"]}),\"\\n\"]}),\"\\n\",i(r.li,{children:[\"\\n\",n(r.p,{children:n(r.strong,{children:\"Disclosure Components\"})}),\"\\n\",i(r.ul,{children:[\"\\n\",n(r.li,{children:\"Fixed issue where pointerdown outside doesn't work consistently on mobile devices.\"}),\"\\n\",n(r.li,{children:\"Improved pointerdown outside click detection in shadow DOM environments.\"}),\"\\n\"]}),\"\\n\"]}),\"\\n\"]}),\"\\n\",i(r.h2,{id:\"540---2025-03-28\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#540---2025-03-28\",children:n(r.span,{className:\"icon icon-link\"})}),\"[5.4.0] - 2025-03-28\"]}),\"\\n\",i(r.h3,{id:\"added-3\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#added-3\",children:n(r.span,{className:\"icon icon-link\"})}),\"Added\"]}),\"\\n\",i(r.ul,{children:[\"\\n\",i(r.li,{children:[\"\\n\",n(r.p,{children:n(r.strong,{children:\"Slider\"})}),\"\\n\",i(r.ul,{children:[\"\\n\",i(r.li,{children:[\"Add support for \",n(r.code,{children:\"origin: end\"}),\" to align the thumb to the end of the track.\"]}),\"\\n\",i(r.li,{children:[\"Expose \",n(r.code,{children:\"thumbSize\"}),\" as CSS variables in the root element. Can be useful for styling the slider.\"]}),\"\\n\"]}),\"\\n\"]}),\"\\n\",i(r.li,{children:[\"\\n\",n(r.p,{children:n(r.strong,{children:\"Menu\"})}),\"\\n\",i(r.ul,{children:[\"\\n\",i(r.li,{children:[\"Added \",n(r.code,{children:\"onSelect\"}),\" event to the \",n(r.code,{children:\"Menu.Item\"}),\" component.\"]}),\"\\n\"]}),\"\\n\"]}),\"\\n\"]}),\"\\n\",i(r.h3,{id:\"fixed-1\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#fixed-1\",children:n(r.span,{className:\"icon icon-link\"})}),\"Fixed\"]}),\"\\n\",i(r.ul,{children:[\"\\n\",n(r.li,{children:\"Ensured each component's state machine starts before processing events.\"}),\"\\n\",i(r.li,{children:[n(r.strong,{children:\"HoverCard, ColorPicker\"}),\": Added missing \",n(r.code,{children:\"tabIndex\"}),\" for better dialog support.\"]}),\"\\n\",i(r.li,{children:[n(r.strong,{children:\"Menu\"}),\": Assigned unique IDs to menu items to improve accessibility and HTML validation.\"]}),\"\\n\"]}),\"\\n\",i(r.h2,{id:\"531---2025-03-24\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#531---2025-03-24\",children:n(r.span,{className:\"icon icon-link\"})}),\"[5.3.1] - 2025-03-24\"]}),\"\\n\",i(r.h3,{id:\"fixed-2\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#fixed-2\",children:n(r.span,{className:\"icon icon-link\"})}),\"Fixed\"]}),\"\\n\",i(r.ul,{children:[\"\\n\",n(r.li,{children:\"Fixed an issue where a function was imported from a package that wasn't declared as a dependency.\"}),\"\\n\"]}),\"\\n\",i(r.h2,{id:\"530---2025-03-24\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#530---2025-03-24\",children:n(r.span,{className:\"icon icon-link\"})}),\"[5.3.0] - 2025-03-24\"]}),\"\\n\",i(r.h3,{id:\"added-4\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#added-4\",children:n(r.span,{className:\"icon icon-link\"})}),\"Added\"]}),\"\\n\",i(r.ul,{children:[\"\\n\",i(r.li,{children:[n(r.strong,{children:\"Collapsible\"}),\": Added an \",n(r.code,{children:\"Indicator\"}),\" part to display whether the collapsible was open or closed.\"]}),\"\\n\",i(r.li,{children:[n(r.strong,{children:\"ColorPicker\"}),\": Added support for formatting the \",n(r.code,{children:\"ValueText\"}),\" component.\"]}),\"\\n\"]}),\"\\n\",n(r.pre,{children:n(r.code,{className:\"language-tsx\",children:'<ColorPicker.ValueText format=\"hex\" /> // #ff0000\\n'})}),\"\\n\",i(r.h3,{id:\"fixed-3\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#fixed-3\",children:n(r.span,{className:\"icon icon-link\"})}),\"Fixed\"]}),\"\\n\",i(r.ul,{children:[\"\\n\",i(r.li,{children:[n(r.strong,{children:\"Combobox\"}),\": Fixed an issue where \",n(r.code,{children:\"onOpenChange\"}),\" was called with the same \",n(r.code,{children:\"open\"}),\" value.\"]}),\"\\n\",i(r.li,{children:[n(r.strong,{children:\"DownloadTrigger\"}),\": Added the missing \",n(r.code,{children:\"use client\"}),\" directive.\"]}),\"\\n\",i(r.li,{children:[n(r.strong,{children:\"Splitter\"}),\": Fixed an issue where \",n(r.code,{children:\"onResizeStart\"}),\" and \",n(r.code,{children:\"onResizeEnd\"}),\" callbacks weren't triggered during keyboard\\ninteractions.\"]}),\"\\n\"]}),\"\\n\",i(r.h2,{id:\"520---2025-03-22\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#520---2025-03-22\",children:n(r.span,{className:\"icon icon-link\"})}),\"[5.2.0] - 2025-03-22\"]}),\"\\n\",i(r.h3,{id:\"added-5\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#added-5\",children:n(r.span,{className:\"icon icon-link\"})}),\"Added\"]}),\"\\n\",i(r.ul,{children:[\"\\n\",i(r.li,{children:[n(r.strong,{children:\"[NEW] DownloadTrigger\"}),\": Added Component for downloading a blob or file, whether retrieved synchronously or\\nasynchronously.\"]}),\"\\n\"]}),\"\\n\",n(r.pre,{children:n(r.code,{className:\"language-tsx\",children:\"import { DownloadTrigger } from '@ark-ui/react/download-trigger'\\n\\nexport const DownloadImage = () => {\\n  async function fetchImage() {\\n    const response = await fetch('https://picsum.photos/200/300')\\n    return response.blob()\\n  }\\n\\n  return (\\n    <DownloadTrigger data={fetchImage} fileName=\\\"avatar.jpeg\\\" mimeType=\\\"image/jpeg\\\">\\n      Download Image\\n    </DownloadTrigger>\\n  )\\n}\\n\"})}),\"\\n\",i(r.h3,{id:\"changed-1\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#changed-1\",children:n(r.span,{className:\"icon icon-link\"})}),\"Changed\"]}),\"\\n\",i(r.ul,{children:[\"\\n\",i(r.li,{children:[n(r.strong,{children:\"NumberInput\"}),\": Set the default step to \",n(r.code,{children:\"0.01\"}),\" when \",n(r.code,{children:\"formatOptions.style\"}),\" was set to \",n(r.code,{children:\"percent\"}),\".\"]}),\"\\n\",i(r.li,{children:[n(r.strong,{children:\"[Breaking] Splitter\"}),\": Redesigned splitter machine to support more use cases and improve DX. Check out the\\n\",n(r.a,{href:\"https://ark-ui.com/docs/components/splitter\",children:\"Splitter\"}),\" documentation for more details.\"]}),\"\\n\"]}),\"\\n\",i(r.h3,{id:\"fixed-4\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#fixed-4\",children:n(r.span,{className:\"icon icon-link\"})}),\"Fixed\"]}),\"\\n\",i(r.ul,{children:[\"\\n\",i(r.li,{children:[n(r.strong,{children:\"Toast\"}),\": Fixed issue where setting \",n(r.code,{children:\"offsets\"}),\" to \",n(r.code,{children:\"undefined\"}),\" caused the machine to throw.\"]}),\"\\n\",i(r.li,{children:[n(r.strong,{children:\"Select\"}),\": Fixed issue where select \",n(r.code,{children:\"valueAsString\"}),\" lost reactivity.\"]}),\"\\n\"]}),\"\\n\",i(r.h2,{id:\"510---2025-03-17\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#510---2025-03-17\",children:n(r.span,{className:\"icon icon-link\"})}),\"[5.1.0] - 2025-03-17\"]}),\"\\n\",i(r.h3,{id:\"added-6\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#added-6\",children:n(r.span,{className:\"icon icon-link\"})}),\"Added\"]}),\"\\n\",i(r.ul,{children:[\"\\n\",i(r.li,{children:[\"Added support for a cleanup function in \",n(r.code,{children:\"ref\"}),\".\"]}),\"\\n\"]}),\"\\n\",i(r.h3,{id:\"fixed-5\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#fixed-5\",children:n(r.span,{className:\"icon icon-link\"})}),\"Fixed\"]}),\"\\n\",i(r.ul,{children:[\"\\n\",i(r.li,{children:[n(r.strong,{children:\"Field\"}),\": Exported the missing \",n(r.code,{children:\"useField\"}),\" hook.\"]}),\"\\n\",i(r.li,{children:[n(r.strong,{children:\"NumberInput\"}),\": \",n(r.code,{children:\"onValueChange\"}),\" correctly received \",n(r.code,{children:\"valueAsNumber\"}),\".\"]}),\"\\n\",i(r.li,{children:[n(r.strong,{children:\"Slider\"}),\": Thumbs initialized correctly when \",n(r.code,{children:\"min\"}),\" was set to a non-zero value.\"]}),\"\\n\"]}),\"\\n\",i(r.h2,{id:\"501---2025-03-11\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#501---2025-03-11\",children:n(r.span,{className:\"icon icon-link\"})}),\"[5.0.1] - 2025-03-11\"]}),\"\\n\",i(r.h3,{id:\"fixed-6\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#fixed-6\",children:n(r.span,{className:\"icon icon-link\"})}),\"Fixed\"]}),\"\\n\",i(r.ul,{children:[\"\\n\",n(r.li,{children:\"Effects now flush synchronously instead of using a microtask.\"}),\"\\n\",i(r.li,{children:[n(r.strong,{children:\"Checkbox\"}),\": \",n(r.code,{children:\"data-invalid\"}),\" is no longer set when \",n(r.code,{children:\"invalid\"}),\" is \",n(r.code,{children:\"false\"}),\".\"]}),\"\\n\",i(r.li,{children:[n(r.strong,{children:\"Combobox\"}),\": Fixed unexpected cursor movement when editing input.\"]}),\"\\n\",i(r.li,{children:[n(r.strong,{children:\"PinInput\"}),\": OTP SMS autofill now works as expected.\"]}),\"\\n\",i(r.li,{children:[n(r.strong,{children:\"RatingGroup\"}),\": Fixed incorrect focus placement on the label.\"]}),\"\\n\",i(r.li,{children:[n(r.strong,{children:\"TagsInput\"}),\": Improved caret detection to prevent unintended tag removal.\"]}),\"\\n\",i(r.li,{children:[n(r.strong,{children:\"Timer\"}),\"\\n\",i(r.ul,{children:[\"\\n\",n(r.li,{children:\"Fixed slowdown when switching tabs/windows.\"}),\"\\n\",i(r.li,{children:[\"Changed default \",n(r.code,{children:\"interval\"}),\" from \",n(r.code,{children:\"250\"}),\" to \",n(r.code,{children:\"1000\"}),\".\"]}),\"\\n\"]}),\"\\n\"]}),\"\\n\"]}),\"\\n\",i(r.h2,{id:\"500---2025-03-06\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#500---2025-03-06\",children:n(r.span,{className:\"icon icon-link\"})}),\"[5.0.0] - 2025-03-06\"]}),\"\\n\",n(r.p,{children:\"Ark UI just got a major performance boost! 🚀\"}),\"\\n\",i(r.h3,{id:\"whats-new-in-v5\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#whats-new-in-v5\",children:n(r.span,{className:\"icon icon-link\"})}),\"What’s new in v5?\"]}),\"\\n\",i(r.ul,{children:[\"\\n\",i(r.li,{children:[n(r.strong,{children:\"Blazing-fast performance\"}),\" – Every component runs smoother and renders faster.\"]}),\"\\n\",i(r.li,{children:[n(r.strong,{children:\"Smaller bundle size\"}),\" – Leaner components and adapters for a more efficient build.\"]}),\"\\n\"]}),\"\\n\",n(r.p,{children:\"We made this happen by using React’s native reactive primitives instead of external stores.\"}),\"\\n\",i(r.p,{children:[\"In our stress tests with \",n(r.strong,{children:\"10,000 components\"}),\", Ark v5 delivered \",n(r.strong,{children:\"1.5x–4x\"}),\" better performance across the board.\"]}),\"\\n\",n(r.p,{children:n(r.img,{src:\"/static/v5-14071630.svg\",alt:\"Performance comparison showing Ark v5 is 1.5x-4x faster than other libraries\"})}),\"\\n\",i(r.h3,{id:\"a-quick-note-on-tests\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#a-quick-note-on-tests\",children:n(r.span,{className:\"icon icon-link\"})}),\"A quick note on tests\"]}),\"\\n\",n(r.p,{children:\"Most component updates are non-breaking, but due to this change, some tests may need adjustments. For example:\"}),\"\\n\",n(r.pre,{children:n(r.code,{className:\"language-jsx\",children:\"// Before\\nit('should open by default', () => {\\n  render(<ComponentUnderTest defaultOpen />)\\n  expect(screen.getByRole('dialog')).toBeInTheDocument()\\n})\\n\\n// After\\nit('should open by default', async () => {\\n  render(<ComponentUnderTest defaultOpen />)\\n  expect(await screen.findByRole('dialog')).toBeInTheDocument()\\n})\\n\"})}),\"\\n\",i(r.h4,{id:\"added-7\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#added-7\",children:n(r.span,{className:\"icon icon-link\"})}),\"Added\"]}),\"\\n\",i(r.ul,{children:[\"\\n\",i(r.li,{children:[n(r.strong,{children:\"Carousel\"}),\": ⚠️ Breaking change: Added required prop \",n(r.code,{children:\"slideCount\"}),\" to \",n(r.code,{children:\"Carousel.Root\"}),\" component.\"]}),\"\\n\",i(r.li,{children:[n(r.strong,{children:\"Clipboard\"}),\": Added \",n(r.code,{children:\"onValueChange\"}),\" and \",n(r.code,{children:\"defaultValue\"}),\" props.\"]}),\"\\n\",i(r.li,{children:[n(r.strong,{children:\"ColorPicker\"}),\": Added \",n(r.code,{children:\"defaultFormat\"}),\" prop.\"]}),\"\\n\",i(r.li,{children:[n(r.strong,{children:\"Combobox\"}),\": Added \",n(r.code,{children:\"defaultHighlightedValue\"}),\" and \",n(r.code,{children:\"defaultInputValue\"}),\" props.\"]}),\"\\n\",i(r.li,{children:[n(r.strong,{children:\"DatePicker\"}),\": Added \",n(r.code,{children:\"defaultFocusedValue\"}),\" prop, \",n(r.code,{children:\"getViewProps\"}),\", and \",n(r.code,{children:\"visibleRangeText\"}),\".\"]}),\"\\n\",i(r.li,{children:[n(r.strong,{children:\"HoverCard\"}),\": Expanded interaction handlers.\"]}),\"\\n\",i(r.li,{children:[n(r.strong,{children:\"Menu\"}),\": Added \",n(r.code,{children:\"defaultHighlightedValue\"}),\" prop.\"]}),\"\\n\",i(r.li,{children:[n(r.strong,{children:\"Pagination\"}),\": Added \",n(r.code,{children:\"defaultPageSize\"}),\" prop.\"]}),\"\\n\",i(r.li,{children:[n(r.strong,{children:\"PinInput\"}),\": Added \",n(r.code,{children:\"count\"}),\" prop for better SSR aria-label.\"]}),\"\\n\",i(r.li,{children:[n(r.strong,{children:\"Progress\"}),\": Added \",n(r.code,{children:\"locale\"}),\" and \",n(r.code,{children:\"formatOptions\"}),\" props.\"]}),\"\\n\",i(r.li,{children:[n(r.strong,{children:\"QrCode\"}),\": Added \",n(r.code,{children:\"pixelSize\"}),\" prop.\"]}),\"\\n\",i(r.li,{children:[n(r.strong,{children:\"Select\"}),\": Added \",n(r.code,{children:\"defaultHighlightedValue\"}),\" prop.\"]}),\"\\n\",i(r.li,{children:[n(r.strong,{children:\"TagsInput\"}),\": Added \",n(r.code,{children:\"defaultInputValue\"}),\" prop.\"]}),\"\\n\",i(r.li,{children:[n(r.strong,{children:\"Toggle\"}),\": Reintroduced toggle machine.\"]}),\"\\n\"]}),\"\\n\",i(r.h4,{id:\"fixed-7\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#fixed-7\",children:n(r.span,{className:\"icon icon-link\"})}),\"Fixed\"]}),\"\\n\",i(r.ul,{children:[\"\\n\",i(r.li,{children:[n(r.strong,{children:\"Accordion\"}),\": Fixed issue in Safari where clicking triggers didn't show content.\"]}),\"\\n\",i(r.li,{children:[n(r.strong,{children:\"Avatar\"}),\": Fixed \",n(r.code,{children:\"api.setSrc\"}),\" not working.\"]}),\"\\n\",i(r.li,{children:[n(r.strong,{children:\"Carousel\"}),\": Fixed pagination sync and initial page issues.\"]}),\"\\n\",i(r.li,{children:[n(r.strong,{children:\"File Upload\"}),\": Fixed drag-and-drop when \",n(r.code,{children:\"directory: true\"}),\".\"]}),\"\\n\",i(r.li,{children:[n(r.strong,{children:\"Menu\"}),\": Fixed context menu positioning not updating on right-click.\"]}),\"\\n\",i(r.li,{children:[n(r.strong,{children:\"Number Input\"}),\": Fixed \",n(r.code,{children:\"value\"}),\" prop not being consumed.\"]}),\"\\n\",i(r.li,{children:[n(r.strong,{children:\"Pin Input\"}),\": Fixed focus warnings and editing issues.\"]}),\"\\n\",i(r.li,{children:[n(r.strong,{children:\"Progress\"}),\": Allowed more precise (decimal) values.\"]}),\"\\n\",i(r.li,{children:[n(r.strong,{children:\"Radio Group, Switch\"}),\": Improved focus behavior in Safari.\"]}),\"\\n\",i(r.li,{children:[n(r.strong,{children:\"Select\"}),\": Fixed regression where \",n(r.code,{children:\"multiple: true\"}),\" didn't work.\"]}),\"\\n\",i(r.li,{children:[n(r.strong,{children:\"Steps\"}),\": Ensured ARIA attributes use valid values and wrapped \",n(r.code,{children:\"<li>\"}),\" elements correctly within \",n(r.code,{children:\"<ul>\"}),\" or \",n(r.code,{children:\"<ol>\"}),\".\"]}),\"\\n\",i(r.li,{children:[n(r.strong,{children:\"Textarea\"}),\": Fixed \",n(r.code,{children:\"ResizeObserver\"}),\" warning.\"]}),\"\\n\",i(r.li,{children:[n(r.strong,{children:\"Timer\"}),\": Fixed stopping issue when switching tabs; resolved issue where \",n(r.code,{children:\"action\"}),\" prop was passed to \",n(r.code,{children:\"ActionTrigger\"}),\".\"]}),\"\\n\",i(r.li,{children:[n(r.strong,{children:\"Toast\"}),\": Fixed keyboard navigation skipping close button.\"]}),\"\\n\",i(r.li,{children:[n(r.strong,{children:\"Toggle Group\"}),\": Fixed \",n(r.code,{children:\"data-focus\"}),\" not being removed on blur.\"]}),\"\\n\"]})]})}return{default:function(e={}){const{wrapper:i}=e.components||{};return i?n(i,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};",
        "llm": "### Unreleased\n\n### Added\n\n- **[NEW] Listbox**: Introduced the `Listbox` component for selecting a single or multiple items from a list. See the\n  [documentation](https://ark-ui.com/docs/components/listbox) for details.\n- Improved support for grouping collection items. Check the `Listbox`, `Select` or `Combobox` documentation for more\n  details.\n\n### Changed\n\n- Added `package.json` to `exports` for improved compatibility with tools like Vite.\n\n## [5.6.0] - 2025-04-15\n\n### Added\n\n- **[NEW] AngleSlider**: Introduced the `AngleSlider` component for selecting an angle. See the\n  [documentation](https://ark-ui.com/docs/components/angle-slider) for details.\n- **[NEW] FloatingPanel**: Introduced the `FloatingPanel` component for creating floating windows. See the\n  [documentation](https://ark-ui.com/docs/components/floating-panel) for details.\n- **Toast**: Added toast queuing when the max limit is reached:\n  - New toasts were queued instead of dropped\n  - Queued toasts were shown when space became available\n  - Queue cleared when all toasts were removed\n- **Combobox**:\n  - Fallbacked to the trigger element as the positioning anchor\n  - Added `data-empty` attribute to indicate an empty listbox or content\n\n## [5.5.0] - 2025-04-05\n\n### Added\n\n- **Presence**: Added support for skipping the initial animation when the component is mounted. This can be used in all\n  disclosure components (e.g., `Dialog`, `DatePicker`, `Menu` etc).\n\n### Fixed\n\n- **Tabs**: Fixed issue where tabs indicator animation behaves inconsistently.\n\n- **Date Picker**\n\n  - Fixed issue where datepicker throws error when navigating month view.\n  - Fixed issue where range selection doesn't reset correctly when clicking the same start date.\n\n- **Disclosure Components**\n\n  - Fixed issue where pointerdown outside doesn't work consistently on mobile devices.\n  - Improved pointerdown outside click detection in shadow DOM environments.\n\n## [5.4.0] - 2025-03-28\n\n### Added\n\n- **Slider**\n\n  - Add support for `origin: end` to align the thumb to the end of the track.\n  - Expose `thumbSize` as CSS variables in the root element. Can be useful for styling the slider.\n\n- **Menu**\n\n  - Added `onSelect` event to the `Menu.Item` component.\n\n### Fixed\n\n- Ensured each component's state machine starts before processing events.\n- **HoverCard, ColorPicker**: Added missing `tabIndex` for better dialog support.\n- **Menu**: Assigned unique IDs to menu items to improve accessibility and HTML validation.\n\n## [5.3.1] - 2025-03-24\n\n### Fixed\n\n- Fixed an issue where a function was imported from a package that wasn't declared as a dependency.\n\n## [5.3.0] - 2025-03-24\n\n### Added\n\n- **Collapsible**: Added an `Indicator` part to display whether the collapsible was open or closed.\n- **ColorPicker**: Added support for formatting the `ValueText` component.\n\n```tsx\n<ColorPicker.ValueText format=\"hex\" /> // #ff0000\n```\n\n### Fixed\n\n- **Combobox**: Fixed an issue where `onOpenChange` was called with the same `open` value.\n- **DownloadTrigger**: Added the missing `use client` directive.\n- **Splitter**: Fixed an issue where `onResizeStart` and `onResizeEnd` callbacks weren't triggered during keyboard\n  interactions.\n\n## [5.2.0] - 2025-03-22\n\n### Added\n\n- **[NEW] DownloadTrigger**: Added Component for downloading a blob or file, whether retrieved synchronously or\n  asynchronously.\n\n```tsx\nimport { DownloadTrigger } from '@ark-ui/react/download-trigger'\n\nexport const DownloadImage = () => {\n  async function fetchImage() {\n    const response = await fetch('https://picsum.photos/200/300')\n    return response.blob()\n  }\n\n  return (\n    <DownloadTrigger data={fetchImage} fileName=\"avatar.jpeg\" mimeType=\"image/jpeg\">\n      Download Image\n    </DownloadTrigger>\n  )\n}\n```\n\n### Changed\n\n- **NumberInput**: Set the default step to `0.01` when `formatOptions.style` was set to `percent`.\n- **[Breaking] Splitter**: Redesigned splitter machine to support more use cases and improve DX. Check out the\n  [Splitter](https://ark-ui.com/docs/components/splitter) documentation for more details.\n\n### Fixed\n\n- **Toast**: Fixed issue where setting `offsets` to `undefined` caused the machine to throw.\n- **Select**: Fixed issue where select `valueAsString` lost reactivity.\n\n## [5.1.0] - 2025-03-17\n\n### Added\n\n- Added support for a cleanup function in `ref`.\n\n### Fixed\n\n- **Field**: Exported the missing `useField` hook.\n- **NumberInput**: `onValueChange` correctly received `valueAsNumber`.\n- **Slider**: Thumbs initialized correctly when `min` was set to a non-zero value.\n\n## [5.0.1] - 2025-03-11\n\n### Fixed\n\n- Effects now flush synchronously instead of using a microtask.\n- **Checkbox**: `data-invalid` is no longer set when `invalid` is `false`.\n- **Combobox**: Fixed unexpected cursor movement when editing input.\n- **PinInput**: OTP SMS autofill now works as expected.\n- **RatingGroup**: Fixed incorrect focus placement on the label.\n- **TagsInput**: Improved caret detection to prevent unintended tag removal.\n- **Timer**\n  - Fixed slowdown when switching tabs/windows.\n  - Changed default `interval` from `250` to `1000`.\n\n## [5.0.0] - 2025-03-06\n\nArk UI just got a major performance boost! 🚀\n\n### What’s new in v5?\n\n- **Blazing-fast performance** – Every component runs smoother and renders faster.\n- **Smaller bundle size** – Leaner components and adapters for a more efficient build.\n\nWe made this happen by using React’s native reactive primitives instead of external stores.\n\nIn our stress tests with **10,000 components**, Ark v5 delivered **1.5x–4x** better performance across the board.\n\n![Performance comparison showing Ark v5 is 1.5x-4x faster than other libraries](./v5.svg)\n\n### A quick note on tests\n\nMost component updates are non-breaking, but due to this change, some tests may need adjustments. For example:\n\n```jsx\n// Before\nit('should open by default', () => {\n  render(<ComponentUnderTest defaultOpen />)\n  expect(screen.getByRole('dialog')).toBeInTheDocument()\n})\n\n// After\nit('should open by default', async () => {\n  render(<ComponentUnderTest defaultOpen />)\n  expect(await screen.findByRole('dialog')).toBeInTheDocument()\n})\n```\n\n#### Added\n\n- **Carousel**: ⚠️ Breaking change: Added required prop `slideCount` to `Carousel.Root` component.\n- **Clipboard**: Added `onValueChange` and `defaultValue` props.\n- **ColorPicker**: Added `defaultFormat` prop.\n- **Combobox**: Added `defaultHighlightedValue` and `defaultInputValue` props.\n- **DatePicker**: Added `defaultFocusedValue` prop, `getViewProps`, and `visibleRangeText`.\n- **HoverCard**: Expanded interaction handlers.\n- **Menu**: Added `defaultHighlightedValue` prop.\n- **Pagination**: Added `defaultPageSize` prop.\n- **PinInput**: Added `count` prop for better SSR aria-label.\n- **Progress**: Added `locale` and `formatOptions` props.\n- **QrCode**: Added `pixelSize` prop.\n- **Select**: Added `defaultHighlightedValue` prop.\n- **TagsInput**: Added `defaultInputValue` prop.\n- **Toggle**: Reintroduced toggle machine.\n\n#### Fixed\n\n- **Accordion**: Fixed issue in Safari where clicking triggers didn't show content.\n- **Avatar**: Fixed `api.setSrc` not working.\n- **Carousel**: Fixed pagination sync and initial page issues.\n- **File Upload**: Fixed drag-and-drop when `directory: true`.\n- **Menu**: Fixed context menu positioning not updating on right-click.\n- **Number Input**: Fixed `value` prop not being consumed.\n- **Pin Input**: Fixed focus warnings and editing issues.\n- **Progress**: Allowed more precise (decimal) values.\n- **Radio Group, Switch**: Improved focus behavior in Safari.\n- **Select**: Fixed regression where `multiple: true` didn't work.\n- **Steps**: Ensured ARIA attributes use valid values and wrapped `<li>` elements correctly within `<ul>` or `<ol>`.\n- **Textarea**: Fixed `ResizeObserver` warning.\n- **Timer**: Fixed stopping issue when switching tabs; resolved issue where `action` prop was passed to `ActionTrigger`.\n- **Toast**: Fixed keyboard navigation skipping close button.\n- **Toggle Group**: Fixed `data-focus` not being removed on blur.",
        "slug": "overview/changelog",
        "category": "overview"
    },
    {
        "id": "license",
        "title": "License Agreement",
        "description": "By purchasing Chakra UI Pro, you agree to be bound by this license agreement.",
        "metadata": {
            "readingTime": 3,
            "wordCount": 814
        },
        "content": "<h2>Standard License</h2>\n<p>The creators of Ark Plus grant an ongoing, non-exclusive license to use the Examples to <strong>one individual</strong> (the\nLicensee).</p>\n<h3>Permitted Uses</h3>\n<ul>\n<li><strong>Unlimited End Products:</strong> Create as many End Products as you wish for personal or commercial purposes.</li>\n<li><strong>Commercial Use:</strong> Sell End Products that incorporate the Examples to End Users.</li>\n<li><strong>Derivative Works:</strong> Modify the Examples to create derivative products. The derivative works will still be subject to\nthe terms of this license.</li>\n<li><strong>Open Source Projects:</strong> Use the Examples in End Products that are open source and freely accessible to End Users.</li>\n</ul>\n<h3>Restricted Uses</h3>\n<ul>\n<li><strong>End User Tools:</strong> You may not create products that enable End Users to build their own End Products using the\nExamples or derivative works.</li>\n<li><strong>Redistribution:</strong> Do not redistribute the Examples or derivative works separately from an End Product, whether as\ncode or design assets.</li>\n<li><strong>Sharing Access:</strong> Sharing access to the Examples with other individuals is prohibited.</li>\n</ul>\n<h3>Example Allowed Uses</h3>\n<ul>\n<li>Developing a personal website or web application.</li>\n<li>Creating a website or application for a client, where the ownership is transferred to the client.</li>\n<li>Building a commercial SaaS application, such as an invoicing app, where end-users pay a subscription or usage fee.</li>\n<li>Developing a commercial self-hosted web application sold for a one-time fee.</li>\n<li>Creating a public web application where the Examples are part of the project, but not its primary purpose.</li>\n</ul>\n<h3>Example Prohibited Uses</h3>\n<ul>\n<li>Publishing a repository of Ark Plus Examples or derivative works publicly.</li>\n<li>Replicating Ark Plus and offering it for sale or free.</li>\n<li>Building a project that allows users to create their websites using the Examples.</li>\n<li>Developing themes, templates, or starter kits incorporating the Examples for sale or distribution.</li>\n</ul>\n<h3>Standard License Definitions</h3>\n<ul>\n<li><strong>Licensee:</strong> The individual who has purchased a Standard License.</li>\n<li><strong>Examples:</strong> The React, Solid and Vue source code snippets provided to the Licensee upon purchasing Ark Plus.</li>\n<li><strong>End Product:</strong> Any product that includes the Examples or derivatives.</li>\n<li><strong>End User:</strong> The user of an End Product.</li>\n<li><strong>Client:</strong> An individual or entity receiving custom services from the Licensee. Clients do not include SaaS\ncustomers.</li>\n</ul>\n<hr>\n<h2>Team License</h2>\n<p>The creators of Ark Plus grant an ongoing, non-exclusive license to use the Examples to all <strong>Employees and\nContractors</strong> of the Licensee.</p>\n<h3>Permitted Uses</h3>\n<ul>\n<li><strong>Unlimited End Products:</strong> Create as many End Products as needed for personal or commercial purposes.</li>\n<li><strong>Commercial Use:</strong> Sell End Products incorporating the Examples to End Users.</li>\n<li><strong>Derivative Works:</strong> Modify the Examples to create derivative products. Derivative works remain subject to this\nlicense.</li>\n<li><strong>Open Source Projects:</strong> Use the Examples in End Products that are open source and freely accessible to End Users.</li>\n</ul>\n<h3>Restricted Uses</h3>\n<ul>\n<li><strong>End User Tools:</strong> Do not create products that allow End Users to build their own End Products using the Examples.</li>\n<li><strong>Redistribution:</strong> You may not redistribute the Examples or derivative works separately from an End Product.</li>\n<li><strong>Sharing Access:</strong> Do not share access to the Examples with anyone outside of your organization.</li>\n</ul>\n<h3>Example Allowed Uses</h3>\n<ul>\n<li>Developing a company website or web application.</li>\n<li>Creating a website or application for a client, where the ownership is transferred to the client.</li>\n<li>Building a commercial SaaS application, such as an invoicing tool, where end-users pay for access.</li>\n<li>Developing a self-hosted web application sold for a one-time fee.</li>\n<li>Creating a public web application that uses the Examples but does not redistribute them.</li>\n</ul>\n<h3>Example Prohibited Uses</h3>\n<ul>\n<li>Publishing a repository containing Ark Plus Examples or derivative works publicly.</li>\n<li>Replicating Ark Plus and distributing it for sale or free.</li>\n<li>Building projects where users can create their websites using the Examples.</li>\n<li>Developing themes, templates, or starter kits incorporating the Examples for distribution.</li>\n<li>Creating any End Product that isn't solely owned by your company or a client of your company.</li>\n</ul>\n<h3>Team License Definitions</h3>\n<ul>\n<li><strong>Licensee:</strong> The business entity that has purchased a Team License.</li>\n<li><strong>Examples:</strong> The React, Solid and Vue source code snippets provided to the Licensee upon purchasing Ark Plus.</li>\n<li><strong>End Product:</strong> Any product that includes the Examples or derivative works.</li>\n<li><strong>End User:</strong> The user of an End Product.</li>\n<li><strong>Client:</strong> An individual or entity receiving custom services from the Licensee. SaaS customers are not considered\nclients.</li>\n<li><strong>Contractor:</strong> An individual or entity contracted to perform services for the Licensee.</li>\n</ul>\n<hr>\n<h2>Enforcement</h2>\n<p>Violation of this license may result in the termination of your Ark Plus account, with refunds issued at the creators'\ndiscretion. In cases of blatant or malicious violations, such as redistributing the Examples through unauthorized\nchannels, no refund will be provided.</p>\n<p>The creators of Ark Plus retain all rights to the Examples, except for the permissions explicitly granted in this\nlicense. Unauthorized use may result in legal action.</p>\n<hr>\n<h2>Refund Policy</h2>\n<p>We do not offer refunds. As our products are digital goods, they cannot be returned once they have been accessed. This\npolicy is in place to prevent abuse and is in line with industry standards for digital sales.</p>\n<p>Please try the <a href=\"/react/examples\">free Examples</a> before purchasing Ark Plus to familiarize yourself with the product.</p>",
        "framework": "*",
        "toc": [
            {
                "title": "Standard License",
                "url": "#standard-license",
                "items": [
                    {
                        "title": "Permitted Uses",
                        "url": "#permitted-uses",
                        "items": []
                    },
                    {
                        "title": "Restricted Uses",
                        "url": "#restricted-uses",
                        "items": []
                    },
                    {
                        "title": "Example Allowed Uses",
                        "url": "#example-allowed-uses",
                        "items": []
                    },
                    {
                        "title": "Example Prohibited Uses",
                        "url": "#example-prohibited-uses",
                        "items": []
                    },
                    {
                        "title": "Standard License Definitions",
                        "url": "#standard-license-definitions",
                        "items": []
                    }
                ]
            },
            {
                "title": "Team License",
                "url": "#team-license",
                "items": [
                    {
                        "title": "Permitted Uses",
                        "url": "#permitted-uses-1",
                        "items": []
                    },
                    {
                        "title": "Restricted Uses",
                        "url": "#restricted-uses-1",
                        "items": []
                    },
                    {
                        "title": "Example Allowed Uses",
                        "url": "#example-allowed-uses-1",
                        "items": []
                    },
                    {
                        "title": "Example Prohibited Uses",
                        "url": "#example-prohibited-uses-1",
                        "items": []
                    },
                    {
                        "title": "Team License Definitions",
                        "url": "#team-license-definitions",
                        "items": []
                    }
                ]
            },
            {
                "title": "Enforcement",
                "url": "#enforcement",
                "items": []
            },
            {
                "title": "Refund Policy",
                "url": "#refund-policy",
                "items": []
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:i}=arguments[0];function _createMdxContent(r){const s={a:\"a\",h2:\"h2\",h3:\"h3\",hr:\"hr\",li:\"li\",p:\"p\",span:\"span\",strong:\"strong\",ul:\"ul\",...r.components};return i(e,{children:[i(s.h2,{id:\"standard-license\",children:[n(s.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#standard-license\",children:n(s.span,{className:\"icon icon-link\"})}),\"Standard License\"]}),\"\\n\",i(s.p,{children:[\"The creators of Ark Plus grant an ongoing, non-exclusive license to use the Examples to \",n(s.strong,{children:\"one individual\"}),\" (the\\nLicensee).\"]}),\"\\n\",i(s.h3,{id:\"permitted-uses\",children:[n(s.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#permitted-uses\",children:n(s.span,{className:\"icon icon-link\"})}),\"Permitted Uses\"]}),\"\\n\",i(s.ul,{children:[\"\\n\",i(s.li,{children:[n(s.strong,{children:\"Unlimited End Products:\"}),\" Create as many End Products as you wish for personal or commercial purposes.\"]}),\"\\n\",i(s.li,{children:[n(s.strong,{children:\"Commercial Use:\"}),\" Sell End Products that incorporate the Examples to End Users.\"]}),\"\\n\",i(s.li,{children:[n(s.strong,{children:\"Derivative Works:\"}),\" Modify the Examples to create derivative products. The derivative works will still be subject to\\nthe terms of this license.\"]}),\"\\n\",i(s.li,{children:[n(s.strong,{children:\"Open Source Projects:\"}),\" Use the Examples in End Products that are open source and freely accessible to End Users.\"]}),\"\\n\"]}),\"\\n\",i(s.h3,{id:\"restricted-uses\",children:[n(s.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#restricted-uses\",children:n(s.span,{className:\"icon icon-link\"})}),\"Restricted Uses\"]}),\"\\n\",i(s.ul,{children:[\"\\n\",i(s.li,{children:[n(s.strong,{children:\"End User Tools:\"}),\" You may not create products that enable End Users to build their own End Products using the\\nExamples or derivative works.\"]}),\"\\n\",i(s.li,{children:[n(s.strong,{children:\"Redistribution:\"}),\" Do not redistribute the Examples or derivative works separately from an End Product, whether as\\ncode or design assets.\"]}),\"\\n\",i(s.li,{children:[n(s.strong,{children:\"Sharing Access:\"}),\" Sharing access to the Examples with other individuals is prohibited.\"]}),\"\\n\"]}),\"\\n\",i(s.h3,{id:\"example-allowed-uses\",children:[n(s.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#example-allowed-uses\",children:n(s.span,{className:\"icon icon-link\"})}),\"Example Allowed Uses\"]}),\"\\n\",i(s.ul,{children:[\"\\n\",n(s.li,{children:\"Developing a personal website or web application.\"}),\"\\n\",n(s.li,{children:\"Creating a website or application for a client, where the ownership is transferred to the client.\"}),\"\\n\",n(s.li,{children:\"Building a commercial SaaS application, such as an invoicing app, where end-users pay a subscription or usage fee.\"}),\"\\n\",n(s.li,{children:\"Developing a commercial self-hosted web application sold for a one-time fee.\"}),\"\\n\",n(s.li,{children:\"Creating a public web application where the Examples are part of the project, but not its primary purpose.\"}),\"\\n\"]}),\"\\n\",i(s.h3,{id:\"example-prohibited-uses\",children:[n(s.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#example-prohibited-uses\",children:n(s.span,{className:\"icon icon-link\"})}),\"Example Prohibited Uses\"]}),\"\\n\",i(s.ul,{children:[\"\\n\",n(s.li,{children:\"Publishing a repository of Ark Plus Examples or derivative works publicly.\"}),\"\\n\",n(s.li,{children:\"Replicating Ark Plus and offering it for sale or free.\"}),\"\\n\",n(s.li,{children:\"Building a project that allows users to create their websites using the Examples.\"}),\"\\n\",n(s.li,{children:\"Developing themes, templates, or starter kits incorporating the Examples for sale or distribution.\"}),\"\\n\"]}),\"\\n\",i(s.h3,{id:\"standard-license-definitions\",children:[n(s.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#standard-license-definitions\",children:n(s.span,{className:\"icon icon-link\"})}),\"Standard License Definitions\"]}),\"\\n\",i(s.ul,{children:[\"\\n\",i(s.li,{children:[n(s.strong,{children:\"Licensee:\"}),\" The individual who has purchased a Standard License.\"]}),\"\\n\",i(s.li,{children:[n(s.strong,{children:\"Examples:\"}),\" The React, Solid and Vue source code snippets provided to the Licensee upon purchasing Ark Plus.\"]}),\"\\n\",i(s.li,{children:[n(s.strong,{children:\"End Product:\"}),\" Any product that includes the Examples or derivatives.\"]}),\"\\n\",i(s.li,{children:[n(s.strong,{children:\"End User:\"}),\" The user of an End Product.\"]}),\"\\n\",i(s.li,{children:[n(s.strong,{children:\"Client:\"}),\" An individual or entity receiving custom services from the Licensee. Clients do not include SaaS\\ncustomers.\"]}),\"\\n\"]}),\"\\n\",n(s.hr,{}),\"\\n\",i(s.h2,{id:\"team-license\",children:[n(s.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#team-license\",children:n(s.span,{className:\"icon icon-link\"})}),\"Team License\"]}),\"\\n\",i(s.p,{children:[\"The creators of Ark Plus grant an ongoing, non-exclusive license to use the Examples to all \",n(s.strong,{children:\"Employees and\\nContractors\"}),\" of the Licensee.\"]}),\"\\n\",i(s.h3,{id:\"permitted-uses-1\",children:[n(s.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#permitted-uses-1\",children:n(s.span,{className:\"icon icon-link\"})}),\"Permitted Uses\"]}),\"\\n\",i(s.ul,{children:[\"\\n\",i(s.li,{children:[n(s.strong,{children:\"Unlimited End Products:\"}),\" Create as many End Products as needed for personal or commercial purposes.\"]}),\"\\n\",i(s.li,{children:[n(s.strong,{children:\"Commercial Use:\"}),\" Sell End Products incorporating the Examples to End Users.\"]}),\"\\n\",i(s.li,{children:[n(s.strong,{children:\"Derivative Works:\"}),\" Modify the Examples to create derivative products. Derivative works remain subject to this\\nlicense.\"]}),\"\\n\",i(s.li,{children:[n(s.strong,{children:\"Open Source Projects:\"}),\" Use the Examples in End Products that are open source and freely accessible to End Users.\"]}),\"\\n\"]}),\"\\n\",i(s.h3,{id:\"restricted-uses-1\",children:[n(s.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#restricted-uses-1\",children:n(s.span,{className:\"icon icon-link\"})}),\"Restricted Uses\"]}),\"\\n\",i(s.ul,{children:[\"\\n\",i(s.li,{children:[n(s.strong,{children:\"End User Tools:\"}),\" Do not create products that allow End Users to build their own End Products using the Examples.\"]}),\"\\n\",i(s.li,{children:[n(s.strong,{children:\"Redistribution:\"}),\" You may not redistribute the Examples or derivative works separately from an End Product.\"]}),\"\\n\",i(s.li,{children:[n(s.strong,{children:\"Sharing Access:\"}),\" Do not share access to the Examples with anyone outside of your organization.\"]}),\"\\n\"]}),\"\\n\",i(s.h3,{id:\"example-allowed-uses-1\",children:[n(s.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#example-allowed-uses-1\",children:n(s.span,{className:\"icon icon-link\"})}),\"Example Allowed Uses\"]}),\"\\n\",i(s.ul,{children:[\"\\n\",n(s.li,{children:\"Developing a company website or web application.\"}),\"\\n\",n(s.li,{children:\"Creating a website or application for a client, where the ownership is transferred to the client.\"}),\"\\n\",n(s.li,{children:\"Building a commercial SaaS application, such as an invoicing tool, where end-users pay for access.\"}),\"\\n\",n(s.li,{children:\"Developing a self-hosted web application sold for a one-time fee.\"}),\"\\n\",n(s.li,{children:\"Creating a public web application that uses the Examples but does not redistribute them.\"}),\"\\n\"]}),\"\\n\",i(s.h3,{id:\"example-prohibited-uses-1\",children:[n(s.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#example-prohibited-uses-1\",children:n(s.span,{className:\"icon icon-link\"})}),\"Example Prohibited Uses\"]}),\"\\n\",i(s.ul,{children:[\"\\n\",n(s.li,{children:\"Publishing a repository containing Ark Plus Examples or derivative works publicly.\"}),\"\\n\",n(s.li,{children:\"Replicating Ark Plus and distributing it for sale or free.\"}),\"\\n\",n(s.li,{children:\"Building projects where users can create their websites using the Examples.\"}),\"\\n\",n(s.li,{children:\"Developing themes, templates, or starter kits incorporating the Examples for distribution.\"}),\"\\n\",n(s.li,{children:\"Creating any End Product that isn't solely owned by your company or a client of your company.\"}),\"\\n\"]}),\"\\n\",i(s.h3,{id:\"team-license-definitions\",children:[n(s.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#team-license-definitions\",children:n(s.span,{className:\"icon icon-link\"})}),\"Team License Definitions\"]}),\"\\n\",i(s.ul,{children:[\"\\n\",i(s.li,{children:[n(s.strong,{children:\"Licensee:\"}),\" The business entity that has purchased a Team License.\"]}),\"\\n\",i(s.li,{children:[n(s.strong,{children:\"Examples:\"}),\" The React, Solid and Vue source code snippets provided to the Licensee upon purchasing Ark Plus.\"]}),\"\\n\",i(s.li,{children:[n(s.strong,{children:\"End Product:\"}),\" Any product that includes the Examples or derivative works.\"]}),\"\\n\",i(s.li,{children:[n(s.strong,{children:\"End User:\"}),\" The user of an End Product.\"]}),\"\\n\",i(s.li,{children:[n(s.strong,{children:\"Client:\"}),\" An individual or entity receiving custom services from the Licensee. SaaS customers are not considered\\nclients.\"]}),\"\\n\",i(s.li,{children:[n(s.strong,{children:\"Contractor:\"}),\" An individual or entity contracted to perform services for the Licensee.\"]}),\"\\n\"]}),\"\\n\",n(s.hr,{}),\"\\n\",i(s.h2,{id:\"enforcement\",children:[n(s.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#enforcement\",children:n(s.span,{className:\"icon icon-link\"})}),\"Enforcement\"]}),\"\\n\",n(s.p,{children:\"Violation of this license may result in the termination of your Ark Plus account, with refunds issued at the creators'\\ndiscretion. In cases of blatant or malicious violations, such as redistributing the Examples through unauthorized\\nchannels, no refund will be provided.\"}),\"\\n\",n(s.p,{children:\"The creators of Ark Plus retain all rights to the Examples, except for the permissions explicitly granted in this\\nlicense. Unauthorized use may result in legal action.\"}),\"\\n\",n(s.hr,{}),\"\\n\",i(s.h2,{id:\"refund-policy\",children:[n(s.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#refund-policy\",children:n(s.span,{className:\"icon icon-link\"})}),\"Refund Policy\"]}),\"\\n\",n(s.p,{children:\"We do not offer refunds. As our products are digital goods, they cannot be returned once they have been accessed. This\\npolicy is in place to prevent abuse and is in line with industry standards for digital sales.\"}),\"\\n\",i(s.p,{children:[\"Please try the \",n(s.a,{href:\"/react/examples\",children:\"free Examples\"}),\" before purchasing Ark Plus to familiarize yourself with the product.\"]})]})}return{default:function(e={}){const{wrapper:i}=e.components||{};return i?n(i,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};",
        "llm": "## Standard License\n\nThe creators of Ark Plus grant an ongoing, non-exclusive license to use the Examples to **one individual** (the\nLicensee).\n\n### Permitted Uses\n\n- **Unlimited End Products:** Create as many End Products as you wish for personal or commercial purposes.\n- **Commercial Use:** Sell End Products that incorporate the Examples to End Users.\n- **Derivative Works:** Modify the Examples to create derivative products. The derivative works will still be subject to\n  the terms of this license.\n- **Open Source Projects:** Use the Examples in End Products that are open source and freely accessible to End Users.\n\n### Restricted Uses\n\n- **End User Tools:** You may not create products that enable End Users to build their own End Products using the\n  Examples or derivative works.\n- **Redistribution:** Do not redistribute the Examples or derivative works separately from an End Product, whether as\n  code or design assets.\n- **Sharing Access:** Sharing access to the Examples with other individuals is prohibited.\n\n### Example Allowed Uses\n\n- Developing a personal website or web application.\n- Creating a website or application for a client, where the ownership is transferred to the client.\n- Building a commercial SaaS application, such as an invoicing app, where end-users pay a subscription or usage fee.\n- Developing a commercial self-hosted web application sold for a one-time fee.\n- Creating a public web application where the Examples are part of the project, but not its primary purpose.\n\n### Example Prohibited Uses\n\n- Publishing a repository of Ark Plus Examples or derivative works publicly.\n- Replicating Ark Plus and offering it for sale or free.\n- Building a project that allows users to create their websites using the Examples.\n- Developing themes, templates, or starter kits incorporating the Examples for sale or distribution.\n\n### Standard License Definitions\n\n- **Licensee:** The individual who has purchased a Standard License.\n- **Examples:** The React, Solid and Vue source code snippets provided to the Licensee upon purchasing Ark Plus.\n- **End Product:** Any product that includes the Examples or derivatives.\n- **End User:** The user of an End Product.\n- **Client:** An individual or entity receiving custom services from the Licensee. Clients do not include SaaS\n  customers.\n\n---\n\n## Team License\n\nThe creators of Ark Plus grant an ongoing, non-exclusive license to use the Examples to all **Employees and\nContractors** of the Licensee.\n\n### Permitted Uses\n\n- **Unlimited End Products:** Create as many End Products as needed for personal or commercial purposes.\n- **Commercial Use:** Sell End Products incorporating the Examples to End Users.\n- **Derivative Works:** Modify the Examples to create derivative products. Derivative works remain subject to this\n  license.\n- **Open Source Projects:** Use the Examples in End Products that are open source and freely accessible to End Users.\n\n### Restricted Uses\n\n- **End User Tools:** Do not create products that allow End Users to build their own End Products using the Examples.\n- **Redistribution:** You may not redistribute the Examples or derivative works separately from an End Product.\n- **Sharing Access:** Do not share access to the Examples with anyone outside of your organization.\n\n### Example Allowed Uses\n\n- Developing a company website or web application.\n- Creating a website or application for a client, where the ownership is transferred to the client.\n- Building a commercial SaaS application, such as an invoicing tool, where end-users pay for access.\n- Developing a self-hosted web application sold for a one-time fee.\n- Creating a public web application that uses the Examples but does not redistribute them.\n\n### Example Prohibited Uses\n\n- Publishing a repository containing Ark Plus Examples or derivative works publicly.\n- Replicating Ark Plus and distributing it for sale or free.\n- Building projects where users can create their websites using the Examples.\n- Developing themes, templates, or starter kits incorporating the Examples for distribution.\n- Creating any End Product that isn't solely owned by your company or a client of your company.\n\n### Team License Definitions\n\n- **Licensee:** The business entity that has purchased a Team License.\n- **Examples:** The React, Solid and Vue source code snippets provided to the Licensee upon purchasing Ark Plus.\n- **End Product:** Any product that includes the Examples or derivative works.\n- **End User:** The user of an End Product.\n- **Client:** An individual or entity receiving custom services from the Licensee. SaaS customers are not considered\n  clients.\n- **Contractor:** An individual or entity contracted to perform services for the Licensee.\n\n---\n\n## Enforcement\n\nViolation of this license may result in the termination of your Ark Plus account, with refunds issued at the creators'\ndiscretion. In cases of blatant or malicious violations, such as redistributing the Examples through unauthorized\nchannels, no refund will be provided.\n\nThe creators of Ark Plus retain all rights to the Examples, except for the permissions explicitly granted in this\nlicense. Unauthorized use may result in legal action.\n\n---\n\n## Refund Policy\n\nWe do not offer refunds. As our products are digital goods, they cannot be returned once they have been accessed. This\npolicy is in place to prevent abuse and is in line with industry standards for digital sales.\n\nPlease try the [free Examples](/react/examples) before purchasing Ark Plus to familiarize yourself with the product.",
        "slug": "license",
        "category": "license.mdx"
    },
    {
        "id": "accordion",
        "title": "Accordion",
        "description": "A collapsible component for displaying content in a vertical stack.",
        "metadata": {
            "readingTime": 1,
            "wordCount": 324
        },
        "content": "<componentpreview id=\"Accordion\">\n<h2>Features</h2>\n<ul>\n<li>Full keyboard navigation</li>\n<li>Supports horizontal and vertical orientation</li>\n<li>Right-to-Left (RTL) support</li>\n<li>Single or multiple item expansion</li>\n<li>Controlled and uncontrolled modes</li>\n<li>Collapse each accordion item</li>\n</ul>\n<h2>Anatomy</h2>\n<p>To set up the accordion correctly, it's essential to understand its anatomy and the naming of its parts.</p>\n<blockquote>\n<p>Each part includes a <code>data-part</code> attribute to help identify them in the DOM.</p>\n</blockquote>\n<anatomy id=\"accordion\">\n<h2>Examples</h2>\n<h3>Default Expanded State</h3>\n<p>Set the <code>defaultValue</code> prop to specify which item should be expanded by default.</p>\n<example id=\"basic\">\n<h3>Collapsible</h3>\n<p>Use the <code>collapsible</code> prop to allow the user to collapse all panels.</p>\n<example id=\"collapsible\">\n<h3>Multiple Panels</h3>\n<p>Use the <code>multiple</code> prop to allow multiple panels to be expanded simultaneously.</p>\n<example id=\"multiple\">\n<h3>Horizontal Orientation</h3>\n<p>By default, the Accordion is oriented vertically. Use the <code>orientation</code> prop to switch to a horizontal layout.</p>\n<example id=\"horizontal\">\n<h3>Animate Content Size</h3>\n<p>Use the <code>--height</code> and/or <code>--width</code> CSS variables to animate the size of the content when it expands or closes:</p>\n<pre><code class=\"language-css\">@keyframes slideDown {\n  from {\n    opacity: 0.01;\n    height: 0;\n  }\n  to {\n    opacity: 1;\n    height: var(--height);\n  }\n}\n\n@keyframes slideUp {\n  from {\n    opacity: 1;\n    height: var(--height);\n  }\n  to {\n    opacity: 0.01;\n    height: 0;\n  }\n}\n\n[data-scope='accordion'][data-part='item-content'][data-state='open'] {\n  animation: slideDown 250ms ease-in-out;\n}\n\n[data-scope='accordion'][data-part='item-content'][data-state='closed'] {\n  animation: slideUp 200ms ease-in-out;\n}\n</code></pre>\n<h3>Using the Root Provider</h3>\n<p>The <code>RootProvider</code> component provides a context for the accordion. It accepts the value of the <code>useAccordion</code> hook. You\ncan leverage it to access the component state and methods from outside the accordion.</p>\n<example id=\"root-provider\">\n<blockquote>\n<p>If you're using the <code>RootProvider</code> component, you don't need to use the <code>Root</code> component.</p>\n</blockquote>\n<h3>Accessing the focused item</h3>\n<p>Use the <code>focusedValue</code> property to get the value of the focused accordion item.</p>\n<example id=\"context/focusedValue\">\n<h3>Accessing the selected items</h3>\n<p>Use the <code>value</code> property to get the selected accordion items.</p>\n<example id=\"context/value\">\n<h3>Setting the selected items</h3>\n<p>Use the <code>setValue</code> method to set the selected accordion items.</p>\n<example id=\"context/setValue\">\n<h3>Accessing an item's state</h3>\n<p>Use the <code>getItemState</code> method to get the state of an accordion item.</p>\n<example id=\"context/getItemState\">\n<h2>API Reference</h2>\n<componenttypes id=\"accordion\">\n<h2>Accessibility</h2>\n<p>This component complies with the\n<a href=\"https://www.w3.org/WAI/ARIA/apg/patterns/accordion/\">Accordion WAI-ARIA design pattern</a>.</p>\n<h3>Keyboard Support</h3>\n<keybindingstable id=\"accordion\"></keybindingstable></componenttypes></example></example></example></example></example></example></example></example></example></anatomy></componentpreview>",
        "framework": "*",
        "toc": [
            {
                "title": "Features",
                "url": "#features",
                "items": []
            },
            {
                "title": "Anatomy",
                "url": "#anatomy",
                "items": []
            },
            {
                "title": "Examples",
                "url": "#examples",
                "items": [
                    {
                        "title": "Default Expanded State",
                        "url": "#default-expanded-state",
                        "items": []
                    },
                    {
                        "title": "Collapsible",
                        "url": "#collapsible",
                        "items": []
                    },
                    {
                        "title": "Multiple Panels",
                        "url": "#multiple-panels",
                        "items": []
                    },
                    {
                        "title": "Horizontal Orientation",
                        "url": "#horizontal-orientation",
                        "items": []
                    },
                    {
                        "title": "Animate Content Size",
                        "url": "#animate-content-size",
                        "items": []
                    },
                    {
                        "title": "Using the Root Provider",
                        "url": "#using-the-root-provider",
                        "items": []
                    },
                    {
                        "title": "Accessing the focused item",
                        "url": "#accessing-the-focused-item",
                        "items": []
                    },
                    {
                        "title": "Accessing the selected items",
                        "url": "#accessing-the-selected-items",
                        "items": []
                    },
                    {
                        "title": "Setting the selected items",
                        "url": "#setting-the-selected-items",
                        "items": []
                    },
                    {
                        "title": "Accessing an item's state",
                        "url": "#accessing-an-items-state",
                        "items": []
                    }
                ]
            },
            {
                "title": "API Reference",
                "url": "#api-reference",
                "items": []
            },
            {
                "title": "Accessibility",
                "url": "#accessibility",
                "items": [
                    {
                        "title": "Keyboard Support",
                        "url": "#keyboard-support",
                        "items": []
                    }
                ]
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:i}=arguments[0];function _createMdxContent(a){const t={a:\"a\",blockquote:\"blockquote\",code:\"code\",h2:\"h2\",h3:\"h3\",li:\"li\",p:\"p\",pre:\"pre\",span:\"span\",ul:\"ul\",...a.components},{Anatomy:o,ComponentPreview:c,ComponentTypes:s,Example:l,KeyBindingsTable:r}=t;return o||_missingMdxReference(\"Anatomy\",!0),c||_missingMdxReference(\"ComponentPreview\",!0),s||_missingMdxReference(\"ComponentTypes\",!0),l||_missingMdxReference(\"Example\",!0),r||_missingMdxReference(\"KeyBindingsTable\",!0),i(e,{children:[n(c,{id:\"Accordion\"}),\"\\n\",i(t.h2,{id:\"features\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#features\",children:n(t.span,{className:\"icon icon-link\"})}),\"Features\"]}),\"\\n\",i(t.ul,{children:[\"\\n\",n(t.li,{children:\"Full keyboard navigation\"}),\"\\n\",n(t.li,{children:\"Supports horizontal and vertical orientation\"}),\"\\n\",n(t.li,{children:\"Right-to-Left (RTL) support\"}),\"\\n\",n(t.li,{children:\"Single or multiple item expansion\"}),\"\\n\",n(t.li,{children:\"Controlled and uncontrolled modes\"}),\"\\n\",n(t.li,{children:\"Collapse each accordion item\"}),\"\\n\"]}),\"\\n\",i(t.h2,{id:\"anatomy\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#anatomy\",children:n(t.span,{className:\"icon icon-link\"})}),\"Anatomy\"]}),\"\\n\",n(t.p,{children:\"To set up the accordion correctly, it's essential to understand its anatomy and the naming of its parts.\"}),\"\\n\",i(t.blockquote,{children:[\"\\n\",i(t.p,{children:[\"Each part includes a \",n(t.code,{children:\"data-part\"}),\" attribute to help identify them in the DOM.\"]}),\"\\n\"]}),\"\\n\",n(o,{id:\"accordion\"}),\"\\n\",i(t.h2,{id:\"examples\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#examples\",children:n(t.span,{className:\"icon icon-link\"})}),\"Examples\"]}),\"\\n\",i(t.h3,{id:\"default-expanded-state\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#default-expanded-state\",children:n(t.span,{className:\"icon icon-link\"})}),\"Default Expanded State\"]}),\"\\n\",i(t.p,{children:[\"Set the \",n(t.code,{children:\"defaultValue\"}),\" prop to specify which item should be expanded by default.\"]}),\"\\n\",n(l,{id:\"basic\"}),\"\\n\",i(t.h3,{id:\"collapsible\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#collapsible\",children:n(t.span,{className:\"icon icon-link\"})}),\"Collapsible\"]}),\"\\n\",i(t.p,{children:[\"Use the \",n(t.code,{children:\"collapsible\"}),\" prop to allow the user to collapse all panels.\"]}),\"\\n\",n(l,{id:\"collapsible\"}),\"\\n\",i(t.h3,{id:\"multiple-panels\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#multiple-panels\",children:n(t.span,{className:\"icon icon-link\"})}),\"Multiple Panels\"]}),\"\\n\",i(t.p,{children:[\"Use the \",n(t.code,{children:\"multiple\"}),\" prop to allow multiple panels to be expanded simultaneously.\"]}),\"\\n\",n(l,{id:\"multiple\"}),\"\\n\",i(t.h3,{id:\"horizontal-orientation\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#horizontal-orientation\",children:n(t.span,{className:\"icon icon-link\"})}),\"Horizontal Orientation\"]}),\"\\n\",i(t.p,{children:[\"By default, the Accordion is oriented vertically. Use the \",n(t.code,{children:\"orientation\"}),\" prop to switch to a horizontal layout.\"]}),\"\\n\",n(l,{id:\"horizontal\"}),\"\\n\",i(t.h3,{id:\"animate-content-size\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#animate-content-size\",children:n(t.span,{className:\"icon icon-link\"})}),\"Animate Content Size\"]}),\"\\n\",i(t.p,{children:[\"Use the \",n(t.code,{children:\"--height\"}),\" and/or \",n(t.code,{children:\"--width\"}),\" CSS variables to animate the size of the content when it expands or closes:\"]}),\"\\n\",n(t.pre,{children:n(t.code,{className:\"language-css\",children:\"@keyframes slideDown {\\n  from {\\n    opacity: 0.01;\\n    height: 0;\\n  }\\n  to {\\n    opacity: 1;\\n    height: var(--height);\\n  }\\n}\\n\\n@keyframes slideUp {\\n  from {\\n    opacity: 1;\\n    height: var(--height);\\n  }\\n  to {\\n    opacity: 0.01;\\n    height: 0;\\n  }\\n}\\n\\n[data-scope='accordion'][data-part='item-content'][data-state='open'] {\\n  animation: slideDown 250ms ease-in-out;\\n}\\n\\n[data-scope='accordion'][data-part='item-content'][data-state='closed'] {\\n  animation: slideUp 200ms ease-in-out;\\n}\\n\"})}),\"\\n\",i(t.h3,{id:\"using-the-root-provider\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-the-root-provider\",children:n(t.span,{className:\"icon icon-link\"})}),\"Using the Root Provider\"]}),\"\\n\",i(t.p,{children:[\"The \",n(t.code,{children:\"RootProvider\"}),\" component provides a context for the accordion. It accepts the value of the \",n(t.code,{children:\"useAccordion\"}),\" hook. You\\ncan leverage it to access the component state and methods from outside the accordion.\"]}),\"\\n\",n(l,{id:\"root-provider\"}),\"\\n\",i(t.blockquote,{children:[\"\\n\",i(t.p,{children:[\"If you're using the \",n(t.code,{children:\"RootProvider\"}),\" component, you don't need to use the \",n(t.code,{children:\"Root\"}),\" component.\"]}),\"\\n\"]}),\"\\n\",i(t.h3,{id:\"accessing-the-focused-item\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#accessing-the-focused-item\",children:n(t.span,{className:\"icon icon-link\"})}),\"Accessing the focused item\"]}),\"\\n\",i(t.p,{children:[\"Use the \",n(t.code,{children:\"focusedValue\"}),\" property to get the value of the focused accordion item.\"]}),\"\\n\",n(l,{id:\"context/focusedValue\"}),\"\\n\",i(t.h3,{id:\"accessing-the-selected-items\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#accessing-the-selected-items\",children:n(t.span,{className:\"icon icon-link\"})}),\"Accessing the selected items\"]}),\"\\n\",i(t.p,{children:[\"Use the \",n(t.code,{children:\"value\"}),\" property to get the selected accordion items.\"]}),\"\\n\",n(l,{id:\"context/value\"}),\"\\n\",i(t.h3,{id:\"setting-the-selected-items\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#setting-the-selected-items\",children:n(t.span,{className:\"icon icon-link\"})}),\"Setting the selected items\"]}),\"\\n\",i(t.p,{children:[\"Use the \",n(t.code,{children:\"setValue\"}),\" method to set the selected accordion items.\"]}),\"\\n\",n(l,{id:\"context/setValue\"}),\"\\n\",i(t.h3,{id:\"accessing-an-items-state\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#accessing-an-items-state\",children:n(t.span,{className:\"icon icon-link\"})}),\"Accessing an item's state\"]}),\"\\n\",i(t.p,{children:[\"Use the \",n(t.code,{children:\"getItemState\"}),\" method to get the state of an accordion item.\"]}),\"\\n\",n(l,{id:\"context/getItemState\"}),\"\\n\",i(t.h2,{id:\"api-reference\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#api-reference\",children:n(t.span,{className:\"icon icon-link\"})}),\"API Reference\"]}),\"\\n\",n(s,{id:\"accordion\"}),\"\\n\",i(t.h2,{id:\"accessibility\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#accessibility\",children:n(t.span,{className:\"icon icon-link\"})}),\"Accessibility\"]}),\"\\n\",i(t.p,{children:[\"This component complies with the\\n\",n(t.a,{href:\"https://www.w3.org/WAI/ARIA/apg/patterns/accordion/\",children:\"Accordion WAI-ARIA design pattern\"}),\".\"]}),\"\\n\",i(t.h3,{id:\"keyboard-support\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#keyboard-support\",children:n(t.span,{className:\"icon icon-link\"})}),\"Keyboard Support\"]}),\"\\n\",n(r,{id:\"accordion\"})]})}return{default:function(e={}){const{wrapper:i}=e.components||{};return i?n(i,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};function _missingMdxReference(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "<ComponentPreview id=\"Accordion\" />\n\n## Features\n\n- Full keyboard navigation\n- Supports horizontal and vertical orientation\n- Right-to-Left (RTL) support\n- Single or multiple item expansion\n- Controlled and uncontrolled modes\n- Collapse each accordion item\n\n## Anatomy\n\nTo set up the accordion correctly, it's essential to understand its anatomy and the naming of its parts.\n\n> Each part includes a `data-part` attribute to help identify them in the DOM.\n\n<Anatomy id=\"accordion\" />\n\n## Examples\n\n### Default Expanded State\n\nSet the `defaultValue` prop to specify which item should be expanded by default.\n\n<Example id=\"basic\" />\n\n### Collapsible\n\nUse the `collapsible` prop to allow the user to collapse all panels.\n\n<Example id=\"collapsible\" />\n\n### Multiple Panels\n\nUse the `multiple` prop to allow multiple panels to be expanded simultaneously.\n\n<Example id=\"multiple\" />\n\n### Horizontal Orientation\n\nBy default, the Accordion is oriented vertically. Use the `orientation` prop to switch to a horizontal layout.\n\n<Example id=\"horizontal\" />\n\n### Animate Content Size\n\nUse the `--height` and/or `--width` CSS variables to animate the size of the content when it expands or closes:\n\n```css\n@keyframes slideDown {\n  from {\n    opacity: 0.01;\n    height: 0;\n  }\n  to {\n    opacity: 1;\n    height: var(--height);\n  }\n}\n\n@keyframes slideUp {\n  from {\n    opacity: 1;\n    height: var(--height);\n  }\n  to {\n    opacity: 0.01;\n    height: 0;\n  }\n}\n\n[data-scope='accordion'][data-part='item-content'][data-state='open'] {\n  animation: slideDown 250ms ease-in-out;\n}\n\n[data-scope='accordion'][data-part='item-content'][data-state='closed'] {\n  animation: slideUp 200ms ease-in-out;\n}\n```\n\n### Using the Root Provider\n\nThe `RootProvider` component provides a context for the accordion. It accepts the value of the `useAccordion` hook. You\ncan leverage it to access the component state and methods from outside the accordion.\n\n<Example id=\"root-provider\" />\n\n> If you're using the `RootProvider` component, you don't need to use the `Root` component.\n\n### Accessing the focused item\n\nUse the `focusedValue` property to get the value of the focused accordion item.\n\n<Example id=\"context/focusedValue\" />\n\n### Accessing the selected items\n\nUse the `value` property to get the selected accordion items.\n\n<Example id=\"context/value\" />\n\n### Setting the selected items\n\nUse the `setValue` method to set the selected accordion items.\n\n<Example id=\"context/setValue\" />\n\n### Accessing an item's state\n\nUse the `getItemState` method to get the state of an accordion item.\n\n<Example id=\"context/getItemState\" />\n\n## API Reference\n\n<ComponentTypes id=\"accordion\" />\n\n## Accessibility\n\nThis component complies with the\n[Accordion WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/).\n\n### Keyboard Support\n\n<KeyBindingsTable id=\"accordion\" />",
        "slug": "components/accordion",
        "category": "components"
    },
    {
        "id": "angle-slider",
        "title": "Angle Slider",
        "description": "A component for selecting a value within a circular range.",
        "metadata": {
            "readingTime": 1,
            "wordCount": 42
        },
        "content": "<componentpreview id=\"AngleSlider\">\n<h2>Examples</h2>\n<h3>Basic</h3>\n<p>Here's a basic example of the Angle Slider component.</p>\n<example id=\"basic\">\n<h3>Controlled</h3>\n<p>Use the <code>value</code> and <code>onValueChange</code> props to control the value of the Angle Slider.</p>\n<example id=\"controlled\">\n<h3>Steps</h3>\n<p>Use the <code>step</code> prop to set the discrete steps of the Angle Slider.</p>\n<example id=\"step\">\n<h2>API Reference</h2>\n<componenttypes id=\"angle-slider\"></componenttypes></example></example></example></componentpreview>",
        "framework": "*",
        "status": "new",
        "toc": [
            {
                "title": "Examples",
                "url": "#examples",
                "items": [
                    {
                        "title": "Basic",
                        "url": "#basic",
                        "items": []
                    },
                    {
                        "title": "Controlled",
                        "url": "#controlled",
                        "items": []
                    },
                    {
                        "title": "Steps",
                        "url": "#steps",
                        "items": []
                    }
                ]
            },
            {
                "title": "API Reference",
                "url": "#api-reference",
                "items": []
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:i}=arguments[0];function _createMdxContent(a){const c={a:\"a\",code:\"code\",h2:\"h2\",h3:\"h3\",p:\"p\",span:\"span\",...a.components},{ComponentPreview:o,ComponentTypes:s,Example:r}=c;return o||_missingMdxReference(\"ComponentPreview\",!0),s||_missingMdxReference(\"ComponentTypes\",!0),r||_missingMdxReference(\"Example\",!0),i(e,{children:[n(o,{id:\"AngleSlider\"}),\"\\n\",i(c.h2,{id:\"examples\",children:[n(c.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#examples\",children:n(c.span,{className:\"icon icon-link\"})}),\"Examples\"]}),\"\\n\",i(c.h3,{id:\"basic\",children:[n(c.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#basic\",children:n(c.span,{className:\"icon icon-link\"})}),\"Basic\"]}),\"\\n\",n(c.p,{children:\"Here's a basic example of the Angle Slider component.\"}),\"\\n\",n(r,{id:\"basic\"}),\"\\n\",i(c.h3,{id:\"controlled\",children:[n(c.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#controlled\",children:n(c.span,{className:\"icon icon-link\"})}),\"Controlled\"]}),\"\\n\",i(c.p,{children:[\"Use the \",n(c.code,{children:\"value\"}),\" and \",n(c.code,{children:\"onValueChange\"}),\" props to control the value of the Angle Slider.\"]}),\"\\n\",n(r,{id:\"controlled\"}),\"\\n\",i(c.h3,{id:\"steps\",children:[n(c.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#steps\",children:n(c.span,{className:\"icon icon-link\"})}),\"Steps\"]}),\"\\n\",i(c.p,{children:[\"Use the \",n(c.code,{children:\"step\"}),\" prop to set the discrete steps of the Angle Slider.\"]}),\"\\n\",n(r,{id:\"step\"}),\"\\n\",i(c.h2,{id:\"api-reference\",children:[n(c.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#api-reference\",children:n(c.span,{className:\"icon icon-link\"})}),\"API Reference\"]}),\"\\n\",n(s,{id:\"angle-slider\"})]})}return{default:function(e={}){const{wrapper:i}=e.components||{};return i?n(i,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};function _missingMdxReference(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "<ComponentPreview id=\"AngleSlider\" />\n\n## Examples\n\n### Basic\n\nHere's a basic example of the Angle Slider component.\n\n<Example id=\"basic\" />\n\n### Controlled\n\nUse the `value` and `onValueChange` props to control the value of the Angle Slider.\n\n<Example id=\"controlled\" />\n\n### Steps\n\nUse the `step` prop to set the discrete steps of the Angle Slider.\n\n<Example id=\"step\" />\n\n## API Reference\n\n<ComponentTypes id=\"angle-slider\" />",
        "slug": "components/angle-slider",
        "category": "components"
    },
    {
        "id": "avatar",
        "title": "Avatar",
        "description": "A graphical representation of the user, often used in profile sections.",
        "metadata": {
            "readingTime": 1,
            "wordCount": 203
        },
        "content": "<componentpreview id=\"Avatar\">\n<h2>Anatomy</h2>\n<p>To set up the avatar correctly, you'll need to understand its anatomy and how we name its parts.</p>\n<blockquote>\n<p>Each part includes a <code>data-part</code> attribute to help identify them in the DOM.</p>\n</blockquote>\n<anatomy id=\"avatar\">\n<h2>Examples</h2>\n<p>Learn how to use the <code>Avatar</code> component in your project. Let's take a look at the most basic example:</p>\n<example id=\"basic\">\n<h3>Handling Events</h3>\n<p><code>Avatar</code> allows you to listen for loading state changes.</p>\n<example id=\"events\">\n<h3>Using the Root Provider</h3>\n<p>The <code>RootProvider</code> component provides a context for the avatar. It accepts the value of the <code>useAvatar</code> hook. You can\nleverage it to access the component state and methods from outside the avatar.</p>\n<example id=\"root-provider\">\n<blockquote>\n<p>If you're using the <code>RootProvider</code> component, you don't need to use the <code>Root</code> component.</p>\n</blockquote>\n<h3>Next.js Image</h3>\n<p>Here's an example of how to use the <code>Image</code> component from <code>next/image</code>.</p>\n<pre><code class=\"language-tsx\">import { Avatar, useAvatarContext } from '@ark-ui/react/avatar'\nimport { getImageProps, type ImageProps } from 'next/image'\n\nconst AvatarNextImage = (props: ImageProps) => {\n  const avatar = useAvatarContext()\n\n  const { hidden, ...arkImageProps } = avatar.getImageProps()\n  const nextImage = getImageProps(props)\n\n  return (\n    &#x3C;img\n      {...arkImageProps}\n      {...nextImage.props}\n      style={{\n        ...props.style,\n        // use visibility instead\n        visibility: hidden ? 'hidden' : 'visible',\n      }}\n    />\n  )\n}\n\nconst Demo = () => {\n  return (\n    &#x3C;Avatar.Root>\n      &#x3C;Avatar.Fallback>JD&#x3C;/Avatar.Fallback>\n      &#x3C;AvatarNextImage src=\"...\" alt=\"\" width={80} height={80} />\n    &#x3C;/Avatar.Root>\n  )\n}\n</code></pre>\n<blockquote>\n<p>Refer to this <a href=\"https://github.com/chakra-ui/ark/discussions/3147\">Github Discussion</a> for more information.</p>\n</blockquote>\n<h2>API Reference</h2>\n<componenttypes id=\"avatar\"></componenttypes></example></example></example></anatomy></componentpreview>",
        "framework": "*",
        "toc": [
            {
                "title": "Anatomy",
                "url": "#anatomy",
                "items": []
            },
            {
                "title": "Examples",
                "url": "#examples",
                "items": [
                    {
                        "title": "Handling Events",
                        "url": "#handling-events",
                        "items": []
                    },
                    {
                        "title": "Using the Root Provider",
                        "url": "#using-the-root-provider",
                        "items": []
                    },
                    {
                        "title": "Next.js Image",
                        "url": "#nextjs-image",
                        "items": []
                    }
                ]
            },
            {
                "title": "API Reference",
                "url": "#api-reference",
                "items": []
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:a}=arguments[0];function _createMdxContent(o){const t={a:\"a\",blockquote:\"blockquote\",code:\"code\",h2:\"h2\",h3:\"h3\",p:\"p\",pre:\"pre\",span:\"span\",...o.components},{Anatomy:r,ComponentPreview:i,ComponentTypes:c,Example:s}=t;return r||_missingMdxReference(\"Anatomy\",!0),i||_missingMdxReference(\"ComponentPreview\",!0),c||_missingMdxReference(\"ComponentTypes\",!0),s||_missingMdxReference(\"Example\",!0),a(e,{children:[n(i,{id:\"Avatar\"}),\"\\n\",a(t.h2,{id:\"anatomy\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#anatomy\",children:n(t.span,{className:\"icon icon-link\"})}),\"Anatomy\"]}),\"\\n\",n(t.p,{children:\"To set up the avatar correctly, you'll need to understand its anatomy and how we name its parts.\"}),\"\\n\",a(t.blockquote,{children:[\"\\n\",a(t.p,{children:[\"Each part includes a \",n(t.code,{children:\"data-part\"}),\" attribute to help identify them in the DOM.\"]}),\"\\n\"]}),\"\\n\",n(r,{id:\"avatar\"}),\"\\n\",a(t.h2,{id:\"examples\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#examples\",children:n(t.span,{className:\"icon icon-link\"})}),\"Examples\"]}),\"\\n\",a(t.p,{children:[\"Learn how to use the \",n(t.code,{children:\"Avatar\"}),\" component in your project. Let's take a look at the most basic example:\"]}),\"\\n\",n(s,{id:\"basic\"}),\"\\n\",a(t.h3,{id:\"handling-events\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#handling-events\",children:n(t.span,{className:\"icon icon-link\"})}),\"Handling Events\"]}),\"\\n\",a(t.p,{children:[n(t.code,{children:\"Avatar\"}),\" allows you to listen for loading state changes.\"]}),\"\\n\",n(s,{id:\"events\"}),\"\\n\",a(t.h3,{id:\"using-the-root-provider\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-the-root-provider\",children:n(t.span,{className:\"icon icon-link\"})}),\"Using the Root Provider\"]}),\"\\n\",a(t.p,{children:[\"The \",n(t.code,{children:\"RootProvider\"}),\" component provides a context for the avatar. It accepts the value of the \",n(t.code,{children:\"useAvatar\"}),\" hook. You can\\nleverage it to access the component state and methods from outside the avatar.\"]}),\"\\n\",n(s,{id:\"root-provider\"}),\"\\n\",a(t.blockquote,{children:[\"\\n\",a(t.p,{children:[\"If you're using the \",n(t.code,{children:\"RootProvider\"}),\" component, you don't need to use the \",n(t.code,{children:\"Root\"}),\" component.\"]}),\"\\n\"]}),\"\\n\",a(t.h3,{id:\"nextjs-image\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#nextjs-image\",children:n(t.span,{className:\"icon icon-link\"})}),\"Next.js Image\"]}),\"\\n\",a(t.p,{children:[\"Here's an example of how to use the \",n(t.code,{children:\"Image\"}),\" component from \",n(t.code,{children:\"next/image\"}),\".\"]}),\"\\n\",n(t.pre,{children:n(t.code,{className:\"language-tsx\",children:\"import { Avatar, useAvatarContext } from '@ark-ui/react/avatar'\\nimport { getImageProps, type ImageProps } from 'next/image'\\n\\nconst AvatarNextImage = (props: ImageProps) => {\\n  const avatar = useAvatarContext()\\n\\n  const { hidden, ...arkImageProps } = avatar.getImageProps()\\n  const nextImage = getImageProps(props)\\n\\n  return (\\n    <img\\n      {...arkImageProps}\\n      {...nextImage.props}\\n      style={{\\n        ...props.style,\\n        // use visibility instead\\n        visibility: hidden ? 'hidden' : 'visible',\\n      }}\\n    />\\n  )\\n}\\n\\nconst Demo = () => {\\n  return (\\n    <Avatar.Root>\\n      <Avatar.Fallback>JD</Avatar.Fallback>\\n      <AvatarNextImage src=\\\"...\\\" alt=\\\"\\\" width={80} height={80} />\\n    </Avatar.Root>\\n  )\\n}\\n\"})}),\"\\n\",a(t.blockquote,{children:[\"\\n\",a(t.p,{children:[\"Refer to this \",n(t.a,{href:\"https://github.com/chakra-ui/ark/discussions/3147\",children:\"Github Discussion\"}),\" for more information.\"]}),\"\\n\"]}),\"\\n\",a(t.h2,{id:\"api-reference\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#api-reference\",children:n(t.span,{className:\"icon icon-link\"})}),\"API Reference\"]}),\"\\n\",n(c,{id:\"avatar\"})]})}return{default:function(e={}){const{wrapper:a}=e.components||{};return a?n(a,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};function _missingMdxReference(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "<ComponentPreview id=\"Avatar\" />\n\n## Anatomy\n\nTo set up the avatar correctly, you'll need to understand its anatomy and how we name its parts.\n\n> Each part includes a `data-part` attribute to help identify them in the DOM.\n\n<Anatomy id=\"avatar\" />\n\n## Examples\n\nLearn how to use the `Avatar` component in your project. Let's take a look at the most basic example:\n\n<Example id=\"basic\" />\n\n### Handling Events\n\n`Avatar` allows you to listen for loading state changes.\n\n<Example id=\"events\" />\n\n### Using the Root Provider\n\nThe `RootProvider` component provides a context for the avatar. It accepts the value of the `useAvatar` hook. You can\nleverage it to access the component state and methods from outside the avatar.\n\n<Example id=\"root-provider\" />\n\n> If you're using the `RootProvider` component, you don't need to use the `Root` component.\n\n### Next.js Image\n\nHere's an example of how to use the `Image` component from `next/image`.\n\n```tsx\nimport { Avatar, useAvatarContext } from '@ark-ui/react/avatar'\nimport { getImageProps, type ImageProps } from 'next/image'\n\nconst AvatarNextImage = (props: ImageProps) => {\n  const avatar = useAvatarContext()\n\n  const { hidden, ...arkImageProps } = avatar.getImageProps()\n  const nextImage = getImageProps(props)\n\n  return (\n    <img\n      {...arkImageProps}\n      {...nextImage.props}\n      style={{\n        ...props.style,\n        // use visibility instead\n        visibility: hidden ? 'hidden' : 'visible',\n      }}\n    />\n  )\n}\n\nconst Demo = () => {\n  return (\n    <Avatar.Root>\n      <Avatar.Fallback>JD</Avatar.Fallback>\n      <AvatarNextImage src=\"...\" alt=\"\" width={80} height={80} />\n    </Avatar.Root>\n  )\n}\n```\n\n> Refer to this [Github Discussion](https://github.com/chakra-ui/ark/discussions/3147) for more information.\n\n## API Reference\n\n<ComponentTypes id=\"avatar\" />",
        "slug": "components/avatar",
        "category": "components"
    },
    {
        "id": "carousel",
        "title": "Carousel",
        "description": "An interactive slideshow component for cycling through elements.",
        "metadata": {
            "readingTime": 1,
            "wordCount": 200
        },
        "content": "<componentpreview id=\"Carousel\">\n<h2>Features</h2>\n<ul>\n<li>Native CSS Scroll Snap integration for smooth, performant animations</li>\n<li>Flexible orientation support (horizontal and vertical layouts)</li>\n<li>Customizable slide alignment (start, center, or end positions)</li>\n<li>Multi-slide display capabilities for complex layouts</li>\n<li>Automatic playback with configurable looping behavior</li>\n<li>Adjustable slide spacing and gap controls</li>\n</ul>\n<h2>Anatomy</h2>\n<p>To set up the carousel correctly, you'll need to understand its anatomy and how we name its parts.</p>\n<blockquote>\n<p>Each part includes a <code>data-part</code> attribute to help identify them in the DOM.</p>\n</blockquote>\n<anatomy id=\"carousel\">\n<h2>Examples</h2>\n<p>Learn how to use the <code>Carousel</code> component in your project. Let's take a look at the most basic example:</p>\n<example id=\"basic\">\n<h3>Controlled Carousel</h3>\n<p>To create a controlled Carousel component, you can manage the state of the carousel using the <code>index</code> prop and update it\nwhen the <code>onIndexChange</code> event handler is called:</p>\n<example id=\"controlled\">\n<h3>Autoplay</h3>\n<p>The Carousel can play automatically. Just add the <code>autoplay</code> prop. You'll probably want to add <code>loop</code> too, so it keeps\ngoing after the last slide.</p>\n<example id=\"autoplay\">\n<h3>Using the Root Provider</h3>\n<p>The <code>RootProvider</code> sets up carousel context using the <code>useCarousel</code> hook, enabling external access to its state and\nmethods.</p>\n<example id=\"root-provider\">\n<blockquote>\n<p>If you're using the <code>RootProvider</code> component, you don't need to use the <code>Root</code> component.</p>\n</blockquote>\n<h2>API Reference</h2>\n<componenttypes id=\"carousel\">\n<h2>Accessibility</h2>\n<p>Complies with the <a href=\"https://www.w3.org/WAI/ARIA/apg/patterns/carousel/\">Carousel WAI-ARIA design pattern</a>.</p></componenttypes></example></example></example></example></anatomy></componentpreview>",
        "framework": "*",
        "toc": [
            {
                "title": "Features",
                "url": "#features",
                "items": []
            },
            {
                "title": "Anatomy",
                "url": "#anatomy",
                "items": []
            },
            {
                "title": "Examples",
                "url": "#examples",
                "items": [
                    {
                        "title": "Controlled Carousel",
                        "url": "#controlled-carousel",
                        "items": []
                    },
                    {
                        "title": "Autoplay",
                        "url": "#autoplay",
                        "items": []
                    },
                    {
                        "title": "Using the Root Provider",
                        "url": "#using-the-root-provider",
                        "items": []
                    }
                ]
            },
            {
                "title": "API Reference",
                "url": "#api-reference",
                "items": []
            },
            {
                "title": "Accessibility",
                "url": "#accessibility",
                "items": []
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:o}=arguments[0];function _createMdxContent(a){const i={a:\"a\",blockquote:\"blockquote\",code:\"code\",h2:\"h2\",h3:\"h3\",li:\"li\",p:\"p\",span:\"span\",ul:\"ul\",...a.components},{Anatomy:t,ComponentPreview:l,ComponentTypes:c,Example:r}=i;return t||_missingMdxReference(\"Anatomy\",!0),l||_missingMdxReference(\"ComponentPreview\",!0),c||_missingMdxReference(\"ComponentTypes\",!0),r||_missingMdxReference(\"Example\",!0),o(e,{children:[n(l,{id:\"Carousel\"}),\"\\n\",o(i.h2,{id:\"features\",children:[n(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#features\",children:n(i.span,{className:\"icon icon-link\"})}),\"Features\"]}),\"\\n\",o(i.ul,{children:[\"\\n\",n(i.li,{children:\"Native CSS Scroll Snap integration for smooth, performant animations\"}),\"\\n\",n(i.li,{children:\"Flexible orientation support (horizontal and vertical layouts)\"}),\"\\n\",n(i.li,{children:\"Customizable slide alignment (start, center, or end positions)\"}),\"\\n\",n(i.li,{children:\"Multi-slide display capabilities for complex layouts\"}),\"\\n\",n(i.li,{children:\"Automatic playback with configurable looping behavior\"}),\"\\n\",n(i.li,{children:\"Adjustable slide spacing and gap controls\"}),\"\\n\"]}),\"\\n\",o(i.h2,{id:\"anatomy\",children:[n(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#anatomy\",children:n(i.span,{className:\"icon icon-link\"})}),\"Anatomy\"]}),\"\\n\",n(i.p,{children:\"To set up the carousel correctly, you'll need to understand its anatomy and how we name its parts.\"}),\"\\n\",o(i.blockquote,{children:[\"\\n\",o(i.p,{children:[\"Each part includes a \",n(i.code,{children:\"data-part\"}),\" attribute to help identify them in the DOM.\"]}),\"\\n\"]}),\"\\n\",n(t,{id:\"carousel\"}),\"\\n\",o(i.h2,{id:\"examples\",children:[n(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#examples\",children:n(i.span,{className:\"icon icon-link\"})}),\"Examples\"]}),\"\\n\",o(i.p,{children:[\"Learn how to use the \",n(i.code,{children:\"Carousel\"}),\" component in your project. Let's take a look at the most basic example:\"]}),\"\\n\",n(r,{id:\"basic\"}),\"\\n\",o(i.h3,{id:\"controlled-carousel\",children:[n(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#controlled-carousel\",children:n(i.span,{className:\"icon icon-link\"})}),\"Controlled Carousel\"]}),\"\\n\",o(i.p,{children:[\"To create a controlled Carousel component, you can manage the state of the carousel using the \",n(i.code,{children:\"index\"}),\" prop and update it\\nwhen the \",n(i.code,{children:\"onIndexChange\"}),\" event handler is called:\"]}),\"\\n\",n(r,{id:\"controlled\"}),\"\\n\",o(i.h3,{id:\"autoplay\",children:[n(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#autoplay\",children:n(i.span,{className:\"icon icon-link\"})}),\"Autoplay\"]}),\"\\n\",o(i.p,{children:[\"The Carousel can play automatically. Just add the \",n(i.code,{children:\"autoplay\"}),\" prop. You'll probably want to add \",n(i.code,{children:\"loop\"}),\" too, so it keeps\\ngoing after the last slide.\"]}),\"\\n\",n(r,{id:\"autoplay\"}),\"\\n\",o(i.h3,{id:\"using-the-root-provider\",children:[n(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-the-root-provider\",children:n(i.span,{className:\"icon icon-link\"})}),\"Using the Root Provider\"]}),\"\\n\",o(i.p,{children:[\"The \",n(i.code,{children:\"RootProvider\"}),\" sets up carousel context using the \",n(i.code,{children:\"useCarousel\"}),\" hook, enabling external access to its state and\\nmethods.\"]}),\"\\n\",n(r,{id:\"root-provider\"}),\"\\n\",o(i.blockquote,{children:[\"\\n\",o(i.p,{children:[\"If you're using the \",n(i.code,{children:\"RootProvider\"}),\" component, you don't need to use the \",n(i.code,{children:\"Root\"}),\" component.\"]}),\"\\n\"]}),\"\\n\",o(i.h2,{id:\"api-reference\",children:[n(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#api-reference\",children:n(i.span,{className:\"icon icon-link\"})}),\"API Reference\"]}),\"\\n\",n(c,{id:\"carousel\"}),\"\\n\",o(i.h2,{id:\"accessibility\",children:[n(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#accessibility\",children:n(i.span,{className:\"icon icon-link\"})}),\"Accessibility\"]}),\"\\n\",o(i.p,{children:[\"Complies with the \",n(i.a,{href:\"https://www.w3.org/WAI/ARIA/apg/patterns/carousel/\",children:\"Carousel WAI-ARIA design pattern\"}),\".\"]})]})}return{default:function(e={}){const{wrapper:o}=e.components||{};return o?n(o,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};function _missingMdxReference(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "<ComponentPreview id=\"Carousel\" />\n\n## Features\n\n- Native CSS Scroll Snap integration for smooth, performant animations\n- Flexible orientation support (horizontal and vertical layouts)\n- Customizable slide alignment (start, center, or end positions)\n- Multi-slide display capabilities for complex layouts\n- Automatic playback with configurable looping behavior\n- Adjustable slide spacing and gap controls\n\n## Anatomy\n\nTo set up the carousel correctly, you'll need to understand its anatomy and how we name its parts.\n\n> Each part includes a `data-part` attribute to help identify them in the DOM.\n\n<Anatomy id=\"carousel\" />\n\n## Examples\n\nLearn how to use the `Carousel` component in your project. Let's take a look at the most basic example:\n\n<Example id=\"basic\" />\n\n### Controlled Carousel\n\nTo create a controlled Carousel component, you can manage the state of the carousel using the `index` prop and update it\nwhen the `onIndexChange` event handler is called:\n\n<Example id=\"controlled\" />\n\n### Autoplay\n\nThe Carousel can play automatically. Just add the `autoplay` prop. You'll probably want to add `loop` too, so it keeps\ngoing after the last slide.\n\n<Example id=\"autoplay\" />\n\n### Using the Root Provider\n\nThe `RootProvider` sets up carousel context using the `useCarousel` hook, enabling external access to its state and\nmethods.\n\n<Example id=\"root-provider\" />\n\n> If you're using the `RootProvider` component, you don't need to use the `Root` component.\n\n## API Reference\n\n<ComponentTypes id=\"carousel\" />\n\n## Accessibility\n\nComplies with the [Carousel WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/).",
        "slug": "components/carousel",
        "category": "components"
    },
    {
        "id": "checkbox",
        "title": "Checkbox",
        "description": "A control element that allows for multiple selections within a set.",
        "metadata": {
            "readingTime": 1,
            "wordCount": 360
        },
        "content": "<componentpreview id=\"Checkbox\">\n<h2>Anatomy</h2>\n<p>To set up the checkbox correctly, you'll need to understand its anatomy and how we name its parts.</p>\n<blockquote>\n<p>Each part includes a <code>data-part</code> attribute to help identify them in the DOM.</p>\n</blockquote>\n<anatomy id=\"checkbox\">\n<h3>Design impact on the asChild property</h3>\n<p>The <code>Checkbox.Root</code> element of the checkbox is a <code>label</code> element. This is because the checkbox is a form control and\nshould be associated with a label to provide context and meaning to the user. Otherwise, the HTML and accessibility\nstructure will be invalid.</p>\n<blockquote>\n<p>If you need to use the <code>asChild</code> property, make sure that the <code>label</code> element is the direct child of the\n<code>Checkbox.Root</code> component.</p>\n</blockquote>\n<h2>Examples</h2>\n<p>Learn how to use the <code>Checkbox</code> component in your project. Let's take a look at the most basic example:</p>\n<example id=\"basic\">\n<h3>Controlled Checkbox</h3>\n<p>To create a controlled Checkbox component, manage the state of the checked status using the <code>checked</code> prop and update it\nwhen the <code>onCheckedChange</code> event handler is called:</p>\n<example id=\"controlled\">\n<h3>Indeterminate Checkbox</h3>\n<p>In some cases, you may need a checkbox to represent a state that is neither checked nor unchecked, known as the\nindeterminate state. This can be achieved by setting the <code>checked</code> prop to <code>indeterminate</code>:</p>\n<example id=\"indeterminate\">\n<h3>Checkbox Group</h3>\n<p>Ark provides a <code>Checkbox.Group</code> component to manage a group of checkboxes. The <code>Checkbox.Group</code> component manages the\nstate of the checkboxes and provides a way to access the checked values:</p>\n<example id=\"group\">\n<h3>Render Prop Usage</h3>\n<p>For cases where you need more flexibility in rendering, the Checkbox component offers the use of a render prop. The\nrender prop function gives you access to the checkbox's API, allowing you to customize the checkbox control's rendering:</p>\n<example id=\"render-prop\">\n<h3>Using the Field Component</h3>\n<p>The <code>Field</code> component helps manage form-related state and accessibility attributes of a checkbox. It includes handling\nARIA labels, helper text, and error text to ensure proper accessibility.</p>\n<example id=\"with-field\">\n<h3>Using the Root Provider</h3>\n<p>The <code>RootProvider</code> component provides a context for the checkbox. It accepts the value of the <code>useCheckbox</code> hook. You\ncan leverage it to access the component state and methods from outside the checkbox.</p>\n<example id=\"root-provider\">\n<blockquote>\n<p>If you're using the <code>RootProvider</code> component, you don't need to use the <code>Root</code> component.</p>\n</blockquote>\n<h2>API Reference</h2>\n<componenttypes id=\"checkbox\">\n<h2>Accessibility</h2>\n<p>Complies with the <a href=\"https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/\">Checkbox WAI-ARIA design pattern</a>.</p>\n<h3>Keyboard Support</h3>\n<keybindingstable id=\"checkbox\"></keybindingstable></componenttypes></example></example></example></example></example></example></example></anatomy></componentpreview>",
        "framework": "*",
        "toc": [
            {
                "title": "Anatomy",
                "url": "#anatomy",
                "items": [
                    {
                        "title": "Design impact on the asChild property",
                        "url": "#design-impact-on-the-aschild-property",
                        "items": []
                    }
                ]
            },
            {
                "title": "Examples",
                "url": "#examples",
                "items": [
                    {
                        "title": "Controlled Checkbox",
                        "url": "#controlled-checkbox",
                        "items": []
                    },
                    {
                        "title": "Indeterminate Checkbox",
                        "url": "#indeterminate-checkbox",
                        "items": []
                    },
                    {
                        "title": "Checkbox Group",
                        "url": "#checkbox-group",
                        "items": []
                    },
                    {
                        "title": "Render Prop Usage",
                        "url": "#render-prop-usage",
                        "items": []
                    },
                    {
                        "title": "Using the Field Component",
                        "url": "#using-the-field-component",
                        "items": []
                    },
                    {
                        "title": "Using the Root Provider",
                        "url": "#using-the-root-provider",
                        "items": []
                    }
                ]
            },
            {
                "title": "API Reference",
                "url": "#api-reference",
                "items": []
            },
            {
                "title": "Accessibility",
                "url": "#accessibility",
                "items": [
                    {
                        "title": "Keyboard Support",
                        "url": "#keyboard-support",
                        "items": []
                    }
                ]
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:o}=arguments[0];function _createMdxContent(c){const i={a:\"a\",blockquote:\"blockquote\",code:\"code\",h2:\"h2\",h3:\"h3\",p:\"p\",span:\"span\",...c.components},{Anatomy:a,ComponentPreview:t,ComponentTypes:r,Example:h,KeyBindingsTable:s}=i;return a||_missingMdxReference(\"Anatomy\",!0),t||_missingMdxReference(\"ComponentPreview\",!0),r||_missingMdxReference(\"ComponentTypes\",!0),h||_missingMdxReference(\"Example\",!0),s||_missingMdxReference(\"KeyBindingsTable\",!0),o(e,{children:[n(t,{id:\"Checkbox\"}),\"\\n\",o(i.h2,{id:\"anatomy\",children:[n(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#anatomy\",children:n(i.span,{className:\"icon icon-link\"})}),\"Anatomy\"]}),\"\\n\",n(i.p,{children:\"To set up the checkbox correctly, you'll need to understand its anatomy and how we name its parts.\"}),\"\\n\",o(i.blockquote,{children:[\"\\n\",o(i.p,{children:[\"Each part includes a \",n(i.code,{children:\"data-part\"}),\" attribute to help identify them in the DOM.\"]}),\"\\n\"]}),\"\\n\",n(a,{id:\"checkbox\"}),\"\\n\",o(i.h3,{id:\"design-impact-on-the-aschild-property\",children:[n(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#design-impact-on-the-aschild-property\",children:n(i.span,{className:\"icon icon-link\"})}),\"Design impact on the asChild property\"]}),\"\\n\",o(i.p,{children:[\"The \",n(i.code,{children:\"Checkbox.Root\"}),\" element of the checkbox is a \",n(i.code,{children:\"label\"}),\" element. This is because the checkbox is a form control and\\nshould be associated with a label to provide context and meaning to the user. Otherwise, the HTML and accessibility\\nstructure will be invalid.\"]}),\"\\n\",o(i.blockquote,{children:[\"\\n\",o(i.p,{children:[\"If you need to use the \",n(i.code,{children:\"asChild\"}),\" property, make sure that the \",n(i.code,{children:\"label\"}),\" element is the direct child of the\\n\",n(i.code,{children:\"Checkbox.Root\"}),\" component.\"]}),\"\\n\"]}),\"\\n\",o(i.h2,{id:\"examples\",children:[n(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#examples\",children:n(i.span,{className:\"icon icon-link\"})}),\"Examples\"]}),\"\\n\",o(i.p,{children:[\"Learn how to use the \",n(i.code,{children:\"Checkbox\"}),\" component in your project. Let's take a look at the most basic example:\"]}),\"\\n\",n(h,{id:\"basic\"}),\"\\n\",o(i.h3,{id:\"controlled-checkbox\",children:[n(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#controlled-checkbox\",children:n(i.span,{className:\"icon icon-link\"})}),\"Controlled Checkbox\"]}),\"\\n\",o(i.p,{children:[\"To create a controlled Checkbox component, manage the state of the checked status using the \",n(i.code,{children:\"checked\"}),\" prop and update it\\nwhen the \",n(i.code,{children:\"onCheckedChange\"}),\" event handler is called:\"]}),\"\\n\",n(h,{id:\"controlled\"}),\"\\n\",o(i.h3,{id:\"indeterminate-checkbox\",children:[n(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#indeterminate-checkbox\",children:n(i.span,{className:\"icon icon-link\"})}),\"Indeterminate Checkbox\"]}),\"\\n\",o(i.p,{children:[\"In some cases, you may need a checkbox to represent a state that is neither checked nor unchecked, known as the\\nindeterminate state. This can be achieved by setting the \",n(i.code,{children:\"checked\"}),\" prop to \",n(i.code,{children:\"indeterminate\"}),\":\"]}),\"\\n\",n(h,{id:\"indeterminate\"}),\"\\n\",o(i.h3,{id:\"checkbox-group\",children:[n(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#checkbox-group\",children:n(i.span,{className:\"icon icon-link\"})}),\"Checkbox Group\"]}),\"\\n\",o(i.p,{children:[\"Ark provides a \",n(i.code,{children:\"Checkbox.Group\"}),\" component to manage a group of checkboxes. The \",n(i.code,{children:\"Checkbox.Group\"}),\" component manages the\\nstate of the checkboxes and provides a way to access the checked values:\"]}),\"\\n\",n(h,{id:\"group\"}),\"\\n\",o(i.h3,{id:\"render-prop-usage\",children:[n(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#render-prop-usage\",children:n(i.span,{className:\"icon icon-link\"})}),\"Render Prop Usage\"]}),\"\\n\",n(i.p,{children:\"For cases where you need more flexibility in rendering, the Checkbox component offers the use of a render prop. The\\nrender prop function gives you access to the checkbox's API, allowing you to customize the checkbox control's rendering:\"}),\"\\n\",n(h,{id:\"render-prop\"}),\"\\n\",o(i.h3,{id:\"using-the-field-component\",children:[n(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-the-field-component\",children:n(i.span,{className:\"icon icon-link\"})}),\"Using the Field Component\"]}),\"\\n\",o(i.p,{children:[\"The \",n(i.code,{children:\"Field\"}),\" component helps manage form-related state and accessibility attributes of a checkbox. It includes handling\\nARIA labels, helper text, and error text to ensure proper accessibility.\"]}),\"\\n\",n(h,{id:\"with-field\"}),\"\\n\",o(i.h3,{id:\"using-the-root-provider\",children:[n(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-the-root-provider\",children:n(i.span,{className:\"icon icon-link\"})}),\"Using the Root Provider\"]}),\"\\n\",o(i.p,{children:[\"The \",n(i.code,{children:\"RootProvider\"}),\" component provides a context for the checkbox. It accepts the value of the \",n(i.code,{children:\"useCheckbox\"}),\" hook. You\\ncan leverage it to access the component state and methods from outside the checkbox.\"]}),\"\\n\",n(h,{id:\"root-provider\"}),\"\\n\",o(i.blockquote,{children:[\"\\n\",o(i.p,{children:[\"If you're using the \",n(i.code,{children:\"RootProvider\"}),\" component, you don't need to use the \",n(i.code,{children:\"Root\"}),\" component.\"]}),\"\\n\"]}),\"\\n\",o(i.h2,{id:\"api-reference\",children:[n(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#api-reference\",children:n(i.span,{className:\"icon icon-link\"})}),\"API Reference\"]}),\"\\n\",n(r,{id:\"checkbox\"}),\"\\n\",o(i.h2,{id:\"accessibility\",children:[n(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#accessibility\",children:n(i.span,{className:\"icon icon-link\"})}),\"Accessibility\"]}),\"\\n\",o(i.p,{children:[\"Complies with the \",n(i.a,{href:\"https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/\",children:\"Checkbox WAI-ARIA design pattern\"}),\".\"]}),\"\\n\",o(i.h3,{id:\"keyboard-support\",children:[n(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#keyboard-support\",children:n(i.span,{className:\"icon icon-link\"})}),\"Keyboard Support\"]}),\"\\n\",n(s,{id:\"checkbox\"})]})}return{default:function(e={}){const{wrapper:o}=e.components||{};return o?n(o,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};function _missingMdxReference(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "<ComponentPreview id=\"Checkbox\" />\n\n## Anatomy\n\nTo set up the checkbox correctly, you'll need to understand its anatomy and how we name its parts.\n\n> Each part includes a `data-part` attribute to help identify them in the DOM.\n\n<Anatomy id=\"checkbox\" />\n\n### Design impact on the asChild property\n\nThe `Checkbox.Root` element of the checkbox is a `label` element. This is because the checkbox is a form control and\nshould be associated with a label to provide context and meaning to the user. Otherwise, the HTML and accessibility\nstructure will be invalid.\n\n> If you need to use the `asChild` property, make sure that the `label` element is the direct child of the\n> `Checkbox.Root` component.\n\n## Examples\n\nLearn how to use the `Checkbox` component in your project. Let's take a look at the most basic example:\n\n<Example id=\"basic\" />\n\n### Controlled Checkbox\n\nTo create a controlled Checkbox component, manage the state of the checked status using the `checked` prop and update it\nwhen the `onCheckedChange` event handler is called:\n\n<Example id=\"controlled\" />\n\n### Indeterminate Checkbox\n\nIn some cases, you may need a checkbox to represent a state that is neither checked nor unchecked, known as the\nindeterminate state. This can be achieved by setting the `checked` prop to `indeterminate`:\n\n<Example id=\"indeterminate\" />\n\n### Checkbox Group\n\nArk provides a `Checkbox.Group` component to manage a group of checkboxes. The `Checkbox.Group` component manages the\nstate of the checkboxes and provides a way to access the checked values:\n\n<Example id=\"group\" />\n\n### Render Prop Usage\n\nFor cases where you need more flexibility in rendering, the Checkbox component offers the use of a render prop. The\nrender prop function gives you access to the checkbox's API, allowing you to customize the checkbox control's rendering:\n\n<Example id=\"render-prop\" />\n\n### Using the Field Component\n\nThe `Field` component helps manage form-related state and accessibility attributes of a checkbox. It includes handling\nARIA labels, helper text, and error text to ensure proper accessibility.\n\n<Example id=\"with-field\" />\n\n### Using the Root Provider\n\nThe `RootProvider` component provides a context for the checkbox. It accepts the value of the `useCheckbox` hook. You\ncan leverage it to access the component state and methods from outside the checkbox.\n\n<Example id=\"root-provider\" />\n\n> If you're using the `RootProvider` component, you don't need to use the `Root` component.\n\n## API Reference\n\n<ComponentTypes id=\"checkbox\" />\n\n## Accessibility\n\nComplies with the [Checkbox WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/).\n\n### Keyboard Support\n\n<KeyBindingsTable id=\"checkbox\" />",
        "slug": "components/checkbox",
        "category": "components"
    },
    {
        "id": "clipboard",
        "title": "Clipboard",
        "description": "A component to copy text to the clipboard",
        "metadata": {
            "readingTime": 1,
            "wordCount": 105
        },
        "content": "<componentpreview id=\"Clipboard\">\n<h2>Anatomy</h2>\n<p>To set up the Clipboard correctly, you'll need to understand its anatomy and how we name its parts.</p>\n<blockquote>\n<p>Each part includes a <code>data-part</code> attribute to help identify them in the DOM.</p>\n</blockquote>\n<anatomy id=\"clipboard\">\n<h2>Examples</h2>\n<p>Learn how to use the <code>Clipboard</code> component in your project. Let's take a look at the most basic example:</p>\n<example id=\"basic\">\n<h3>Using the Root Provider</h3>\n<p>The <code>RootProvider</code> component provides a context for the clipboard. It accepts the value of the <code>useClipboard</code> hook. You\ncan leverage it to access the component state and methods from outside the clipboard.</p>\n<example id=\"root-provider\">\n<blockquote>\n<p>If you're using the <code>RootProvider</code> component, you don't need to use the <code>Root</code> component.</p>\n</blockquote>\n<h2>API Reference</h2>\n<componenttypes id=\"clipboard\"></componenttypes></example></example></anatomy></componentpreview>",
        "framework": "*",
        "toc": [
            {
                "title": "Anatomy",
                "url": "#anatomy",
                "items": []
            },
            {
                "title": "Examples",
                "url": "#examples",
                "items": [
                    {
                        "title": "Using the Root Provider",
                        "url": "#using-the-root-provider",
                        "items": []
                    }
                ]
            },
            {
                "title": "API Reference",
                "url": "#api-reference",
                "items": []
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:o}=arguments[0];function _createMdxContent(t){const i={a:\"a\",blockquote:\"blockquote\",code:\"code\",h2:\"h2\",h3:\"h3\",p:\"p\",span:\"span\",...t.components},{Anatomy:a,ComponentPreview:r,ComponentTypes:c,Example:d}=i;return a||_missingMdxReference(\"Anatomy\",!0),r||_missingMdxReference(\"ComponentPreview\",!0),c||_missingMdxReference(\"ComponentTypes\",!0),d||_missingMdxReference(\"Example\",!0),o(e,{children:[n(r,{id:\"Clipboard\"}),\"\\n\",o(i.h2,{id:\"anatomy\",children:[n(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#anatomy\",children:n(i.span,{className:\"icon icon-link\"})}),\"Anatomy\"]}),\"\\n\",n(i.p,{children:\"To set up the Clipboard correctly, you'll need to understand its anatomy and how we name its parts.\"}),\"\\n\",o(i.blockquote,{children:[\"\\n\",o(i.p,{children:[\"Each part includes a \",n(i.code,{children:\"data-part\"}),\" attribute to help identify them in the DOM.\"]}),\"\\n\"]}),\"\\n\",n(a,{id:\"clipboard\"}),\"\\n\",o(i.h2,{id:\"examples\",children:[n(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#examples\",children:n(i.span,{className:\"icon icon-link\"})}),\"Examples\"]}),\"\\n\",o(i.p,{children:[\"Learn how to use the \",n(i.code,{children:\"Clipboard\"}),\" component in your project. Let's take a look at the most basic example:\"]}),\"\\n\",n(d,{id:\"basic\"}),\"\\n\",o(i.h3,{id:\"using-the-root-provider\",children:[n(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-the-root-provider\",children:n(i.span,{className:\"icon icon-link\"})}),\"Using the Root Provider\"]}),\"\\n\",o(i.p,{children:[\"The \",n(i.code,{children:\"RootProvider\"}),\" component provides a context for the clipboard. It accepts the value of the \",n(i.code,{children:\"useClipboard\"}),\" hook. You\\ncan leverage it to access the component state and methods from outside the clipboard.\"]}),\"\\n\",n(d,{id:\"root-provider\"}),\"\\n\",o(i.blockquote,{children:[\"\\n\",o(i.p,{children:[\"If you're using the \",n(i.code,{children:\"RootProvider\"}),\" component, you don't need to use the \",n(i.code,{children:\"Root\"}),\" component.\"]}),\"\\n\"]}),\"\\n\",o(i.h2,{id:\"api-reference\",children:[n(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#api-reference\",children:n(i.span,{className:\"icon icon-link\"})}),\"API Reference\"]}),\"\\n\",n(c,{id:\"clipboard\"})]})}return{default:function(e={}){const{wrapper:o}=e.components||{};return o?n(o,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};function _missingMdxReference(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "<ComponentPreview id=\"Clipboard\" />\n\n## Anatomy\n\nTo set up the Clipboard correctly, you'll need to understand its anatomy and how we name its parts.\n\n> Each part includes a `data-part` attribute to help identify them in the DOM.\n\n<Anatomy id=\"clipboard\" />\n\n## Examples\n\nLearn how to use the `Clipboard` component in your project. Let's take a look at the most basic example:\n\n<Example id=\"basic\" />\n\n### Using the Root Provider\n\nThe `RootProvider` component provides a context for the clipboard. It accepts the value of the `useClipboard` hook. You\ncan leverage it to access the component state and methods from outside the clipboard.\n\n<Example id=\"root-provider\" />\n\n> If you're using the `RootProvider` component, you don't need to use the `Root` component.\n\n## API Reference\n\n<ComponentTypes id=\"clipboard\" />",
        "slug": "components/clipboard",
        "category": "components"
    },
    {
        "id": "collapsible",
        "title": "Collapsible",
        "description": "An interactive component that can be expanded or collapsed.",
        "metadata": {
            "readingTime": 1,
            "wordCount": 233
        },
        "content": "<componentpreview id=\"Collapsible\">\n<h2>Animation</h2>\n<p>You can use CSS animations to create smooth transitions for opening and closing the Collapsible content. Utilize the\n<code>data-state</code> attribute in combination with the <code>--height</code> CSS variable to animate the open and closed states.</p>\n<pre><code class=\"language-css\">@keyframes slideDown {\n  from {\n    height: 0;\n  }\n  to {\n    height: var(--height);\n  }\n}\n\n@keyframes slideUp {\n  from {\n    height: var(--height);\n  }\n  to {\n    height: 0;\n  }\n}\n\n[data-scope='collapsible'][data-part='content'][data-state='open'] {\n  animation: slideDown 250ms;\n}\n\n[data-scope='collapsible'][data-part='content'][data-state='closed'] {\n  animation: slideUp 200ms;\n}\n</code></pre>\n<h2>Examples</h2>\n<p>Learn how to use the <code>Collapsible</code> component in your project. Let's examine the most basic example:</p>\n<example id=\"basic\">\n<h3>Events</h3>\n<p>You can listen for the <code>onExitComplete</code> event to know when the <code>Collapsible.Content</code> is no longer visible:</p>\n<example id=\"on-exit-complete\">\n<h3>Lazy Mount</h3>\n<p>To delay the mounting of the <code>Collapsible.Content</code>, use the <code>lazyMount</code> prop:</p>\n<example id=\"lazy-mount\">\n<h3>Unmount on Exit</h3>\n<p>To remove the <code>Collapsible.Content</code> from the DOM when it is not visible, use the <code>unmountOnExit</code> prop:</p>\n<example id=\"unmount-on-exit\">\n<h3>Combining Lazy Mount and Unmount on Exit</h3>\n<p>Both <code>lazyMount</code> and <code>unmountOnExit</code> can be combined to ensure that the component is mounted only when the <code>Collapsible</code>\nis expanded and unmounted when it is collapsed:</p>\n<example id=\"lazy-mount-and-unmount-on-exit\">\n<h3>Using the Root Provider</h3>\n<p>The <code>RootProvider</code> component provides a context for the collapsible. It accepts the value of the <code>useCollapsible</code> hook.\nYou can leverage it to access the component state and methods from outside the collapsible.</p>\n<example id=\"root-provider\">\n<blockquote>\n<p>If you're using the <code>RootProvider</code> component, you don't need to use the <code>Root</code> component.</p>\n</blockquote>\n<h2>API Reference</h2>\n<componenttypes id=\"collapsible\">\n<h2>Accessibility</h2>\n<h3>Keyboard Support</h3>\n<keybindingstable id=\"collapsible\"></keybindingstable></componenttypes></example></example></example></example></example></example></componentpreview>",
        "framework": "*",
        "toc": [
            {
                "title": "Animation",
                "url": "#animation",
                "items": []
            },
            {
                "title": "Examples",
                "url": "#examples",
                "items": [
                    {
                        "title": "Events",
                        "url": "#events",
                        "items": []
                    },
                    {
                        "title": "Lazy Mount",
                        "url": "#lazy-mount",
                        "items": []
                    },
                    {
                        "title": "Unmount on Exit",
                        "url": "#unmount-on-exit",
                        "items": []
                    },
                    {
                        "title": "Combining Lazy Mount and Unmount on Exit",
                        "url": "#combining-lazy-mount-and-unmount-on-exit",
                        "items": []
                    },
                    {
                        "title": "Using the Root Provider",
                        "url": "#using-the-root-provider",
                        "items": []
                    }
                ]
            },
            {
                "title": "API Reference",
                "url": "#api-reference",
                "items": []
            },
            {
                "title": "Accessibility",
                "url": "#accessibility",
                "items": [
                    {
                        "title": "Keyboard Support",
                        "url": "#keyboard-support",
                        "items": []
                    }
                ]
            }
        ],
        "code": "const{Fragment:n,jsx:e,jsxs:o}=arguments[0];function _createMdxContent(i){const a={a:\"a\",blockquote:\"blockquote\",code:\"code\",h2:\"h2\",h3:\"h3\",p:\"p\",pre:\"pre\",span:\"span\",...i.components},{ComponentPreview:t,ComponentTypes:c,Example:l,KeyBindingsTable:s}=a;return t||_missingMdxReference(\"ComponentPreview\",!0),c||_missingMdxReference(\"ComponentTypes\",!0),l||_missingMdxReference(\"Example\",!0),s||_missingMdxReference(\"KeyBindingsTable\",!0),o(n,{children:[e(t,{id:\"Collapsible\"}),\"\\n\",o(a.h2,{id:\"animation\",children:[e(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#animation\",children:e(a.span,{className:\"icon icon-link\"})}),\"Animation\"]}),\"\\n\",o(a.p,{children:[\"You can use CSS animations to create smooth transitions for opening and closing the Collapsible content. Utilize the\\n\",e(a.code,{children:\"data-state\"}),\" attribute in combination with the \",e(a.code,{children:\"--height\"}),\" CSS variable to animate the open and closed states.\"]}),\"\\n\",e(a.pre,{children:e(a.code,{className:\"language-css\",children:\"@keyframes slideDown {\\n  from {\\n    height: 0;\\n  }\\n  to {\\n    height: var(--height);\\n  }\\n}\\n\\n@keyframes slideUp {\\n  from {\\n    height: var(--height);\\n  }\\n  to {\\n    height: 0;\\n  }\\n}\\n\\n[data-scope='collapsible'][data-part='content'][data-state='open'] {\\n  animation: slideDown 250ms;\\n}\\n\\n[data-scope='collapsible'][data-part='content'][data-state='closed'] {\\n  animation: slideUp 200ms;\\n}\\n\"})}),\"\\n\",o(a.h2,{id:\"examples\",children:[e(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#examples\",children:e(a.span,{className:\"icon icon-link\"})}),\"Examples\"]}),\"\\n\",o(a.p,{children:[\"Learn how to use the \",e(a.code,{children:\"Collapsible\"}),\" component in your project. Let's examine the most basic example:\"]}),\"\\n\",e(l,{id:\"basic\"}),\"\\n\",o(a.h3,{id:\"events\",children:[e(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#events\",children:e(a.span,{className:\"icon icon-link\"})}),\"Events\"]}),\"\\n\",o(a.p,{children:[\"You can listen for the \",e(a.code,{children:\"onExitComplete\"}),\" event to know when the \",e(a.code,{children:\"Collapsible.Content\"}),\" is no longer visible:\"]}),\"\\n\",e(l,{id:\"on-exit-complete\"}),\"\\n\",o(a.h3,{id:\"lazy-mount\",children:[e(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#lazy-mount\",children:e(a.span,{className:\"icon icon-link\"})}),\"Lazy Mount\"]}),\"\\n\",o(a.p,{children:[\"To delay the mounting of the \",e(a.code,{children:\"Collapsible.Content\"}),\", use the \",e(a.code,{children:\"lazyMount\"}),\" prop:\"]}),\"\\n\",e(l,{id:\"lazy-mount\"}),\"\\n\",o(a.h3,{id:\"unmount-on-exit\",children:[e(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#unmount-on-exit\",children:e(a.span,{className:\"icon icon-link\"})}),\"Unmount on Exit\"]}),\"\\n\",o(a.p,{children:[\"To remove the \",e(a.code,{children:\"Collapsible.Content\"}),\" from the DOM when it is not visible, use the \",e(a.code,{children:\"unmountOnExit\"}),\" prop:\"]}),\"\\n\",e(l,{id:\"unmount-on-exit\"}),\"\\n\",o(a.h3,{id:\"combining-lazy-mount-and-unmount-on-exit\",children:[e(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#combining-lazy-mount-and-unmount-on-exit\",children:e(a.span,{className:\"icon icon-link\"})}),\"Combining Lazy Mount and Unmount on Exit\"]}),\"\\n\",o(a.p,{children:[\"Both \",e(a.code,{children:\"lazyMount\"}),\" and \",e(a.code,{children:\"unmountOnExit\"}),\" can be combined to ensure that the component is mounted only when the \",e(a.code,{children:\"Collapsible\"}),\"\\nis expanded and unmounted when it is collapsed:\"]}),\"\\n\",e(l,{id:\"lazy-mount-and-unmount-on-exit\"}),\"\\n\",o(a.h3,{id:\"using-the-root-provider\",children:[e(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-the-root-provider\",children:e(a.span,{className:\"icon icon-link\"})}),\"Using the Root Provider\"]}),\"\\n\",o(a.p,{children:[\"The \",e(a.code,{children:\"RootProvider\"}),\" component provides a context for the collapsible. It accepts the value of the \",e(a.code,{children:\"useCollapsible\"}),\" hook.\\nYou can leverage it to access the component state and methods from outside the collapsible.\"]}),\"\\n\",e(l,{id:\"root-provider\"}),\"\\n\",o(a.blockquote,{children:[\"\\n\",o(a.p,{children:[\"If you're using the \",e(a.code,{children:\"RootProvider\"}),\" component, you don't need to use the \",e(a.code,{children:\"Root\"}),\" component.\"]}),\"\\n\"]}),\"\\n\",o(a.h2,{id:\"api-reference\",children:[e(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#api-reference\",children:e(a.span,{className:\"icon icon-link\"})}),\"API Reference\"]}),\"\\n\",e(c,{id:\"collapsible\"}),\"\\n\",o(a.h2,{id:\"accessibility\",children:[e(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#accessibility\",children:e(a.span,{className:\"icon icon-link\"})}),\"Accessibility\"]}),\"\\n\",o(a.h3,{id:\"keyboard-support\",children:[e(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#keyboard-support\",children:e(a.span,{className:\"icon icon-link\"})}),\"Keyboard Support\"]}),\"\\n\",e(s,{id:\"collapsible\"})]})}return{default:function(n={}){const{wrapper:o}=n.components||{};return o?e(o,{...n,children:e(_createMdxContent,{...n})}):_createMdxContent(n)}};function _missingMdxReference(n,e){throw new Error(\"Expected \"+(e?\"component\":\"object\")+\" `\"+n+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "<ComponentPreview id=\"Collapsible\" />\n\n## Animation\n\nYou can use CSS animations to create smooth transitions for opening and closing the Collapsible content. Utilize the\n`data-state` attribute in combination with the `--height` CSS variable to animate the open and closed states.\n\n```css\n@keyframes slideDown {\n  from {\n    height: 0;\n  }\n  to {\n    height: var(--height);\n  }\n}\n\n@keyframes slideUp {\n  from {\n    height: var(--height);\n  }\n  to {\n    height: 0;\n  }\n}\n\n[data-scope='collapsible'][data-part='content'][data-state='open'] {\n  animation: slideDown 250ms;\n}\n\n[data-scope='collapsible'][data-part='content'][data-state='closed'] {\n  animation: slideUp 200ms;\n}\n```\n\n## Examples\n\nLearn how to use the `Collapsible` component in your project. Let's examine the most basic example:\n\n<Example id=\"basic\" />\n\n### Events\n\nYou can listen for the `onExitComplete` event to know when the `Collapsible.Content` is no longer visible:\n\n<Example id=\"on-exit-complete\" />\n\n### Lazy Mount\n\nTo delay the mounting of the `Collapsible.Content`, use the `lazyMount` prop:\n\n<Example id=\"lazy-mount\" />\n\n### Unmount on Exit\n\nTo remove the `Collapsible.Content` from the DOM when it is not visible, use the `unmountOnExit` prop:\n\n<Example id=\"unmount-on-exit\" />\n\n### Combining Lazy Mount and Unmount on Exit\n\nBoth `lazyMount` and `unmountOnExit` can be combined to ensure that the component is mounted only when the `Collapsible`\nis expanded and unmounted when it is collapsed:\n\n<Example id=\"lazy-mount-and-unmount-on-exit\" />\n\n### Using the Root Provider\n\nThe `RootProvider` component provides a context for the collapsible. It accepts the value of the `useCollapsible` hook.\nYou can leverage it to access the component state and methods from outside the collapsible.\n\n<Example id=\"root-provider\" />\n\n> If you're using the `RootProvider` component, you don't need to use the `Root` component.\n\n## API Reference\n\n<ComponentTypes id=\"collapsible\" />\n\n## Accessibility\n\n### Keyboard Support\n\n<KeyBindingsTable id=\"collapsible\" />",
        "slug": "components/collapsible",
        "category": "components"
    },
    {
        "id": "color-picker",
        "title": "Color Picker",
        "description": "A component that allows users to select a color from a color picker.",
        "metadata": {
            "readingTime": 1,
            "wordCount": 178
        },
        "content": "<componentpreview id=\"ColorPicker\">\n<h2>Anatomy</h2>\n<p>To set up the color picker correctly, you'll need to understand its anatomy and how we name its parts.</p>\n<blockquote>\n<p>Each part includes a <code>data-part</code> attribute to help identify them in the DOM.</p>\n</blockquote>\n<anatomy id=\"color-picker\">\n<h2>Examples</h2>\n<p>Learn how to use the <code>ColorPicker</code> component in your project. Let's take a look at the most basic example</p>\n<example id=\"basic\">\n<h3>Controlled Color Picker</h3>\n<p>To create a controlled Color Picker component, manage the state of the current color using the <code>value</code> prop and update\nit when the <code>onValueChange</code> or <code>onValueChangeEnd</code> event handler is called:</p>\n<example id=\"controlled\">\n<h3>Using the Field Component</h3>\n<p>The <code>Field</code> component helps manage form-related state and accessibility attributes of a color picker. It includes\nhandling ARIA labels, helper text, and error text to ensure proper accessibility.</p>\n<example id=\"with-field\">\n<h3>Using the Root Provider</h3>\n<p>The <code>RootProvider</code> component provides a context for the color-picker. It accepts the value of the <code>useColor-picker</code>\nhook. You can leverage it to access the component state and methods from outside the color-picker.</p>\n<example id=\"root-provider\">\n<blockquote>\n<p>If you're using the <code>RootProvider</code> component, you don't need to use the <code>Root</code> component.</p>\n</blockquote>\n<h2>API Reference</h2>\n<componenttypes id=\"color-picker\">\n<h2>Accessibility</h2>\n<h3>Keyboard Support</h3>\n<keybindingstable id=\"color-picker\"></keybindingstable></componenttypes></example></example></example></example></anatomy></componentpreview>",
        "framework": "*",
        "toc": [
            {
                "title": "Anatomy",
                "url": "#anatomy",
                "items": []
            },
            {
                "title": "Examples",
                "url": "#examples",
                "items": [
                    {
                        "title": "Controlled Color Picker",
                        "url": "#controlled-color-picker",
                        "items": []
                    },
                    {
                        "title": "Using the Field Component",
                        "url": "#using-the-field-component",
                        "items": []
                    },
                    {
                        "title": "Using the Root Provider",
                        "url": "#using-the-root-provider",
                        "items": []
                    }
                ]
            },
            {
                "title": "API Reference",
                "url": "#api-reference",
                "items": []
            },
            {
                "title": "Accessibility",
                "url": "#accessibility",
                "items": [
                    {
                        "title": "Keyboard Support",
                        "url": "#keyboard-support",
                        "items": []
                    }
                ]
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:o}=arguments[0];function _createMdxContent(i){const c={a:\"a\",blockquote:\"blockquote\",code:\"code\",h2:\"h2\",h3:\"h3\",p:\"p\",span:\"span\",...i.components},{Anatomy:r,ComponentPreview:a,ComponentTypes:t,Example:l,KeyBindingsTable:s}=c;return r||_missingMdxReference(\"Anatomy\",!0),a||_missingMdxReference(\"ComponentPreview\",!0),t||_missingMdxReference(\"ComponentTypes\",!0),l||_missingMdxReference(\"Example\",!0),s||_missingMdxReference(\"KeyBindingsTable\",!0),o(e,{children:[n(a,{id:\"ColorPicker\"}),\"\\n\",o(c.h2,{id:\"anatomy\",children:[n(c.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#anatomy\",children:n(c.span,{className:\"icon icon-link\"})}),\"Anatomy\"]}),\"\\n\",n(c.p,{children:\"To set up the color picker correctly, you'll need to understand its anatomy and how we name its parts.\"}),\"\\n\",o(c.blockquote,{children:[\"\\n\",o(c.p,{children:[\"Each part includes a \",n(c.code,{children:\"data-part\"}),\" attribute to help identify them in the DOM.\"]}),\"\\n\"]}),\"\\n\",n(r,{id:\"color-picker\"}),\"\\n\",o(c.h2,{id:\"examples\",children:[n(c.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#examples\",children:n(c.span,{className:\"icon icon-link\"})}),\"Examples\"]}),\"\\n\",o(c.p,{children:[\"Learn how to use the \",n(c.code,{children:\"ColorPicker\"}),\" component in your project. Let's take a look at the most basic example\"]}),\"\\n\",n(l,{id:\"basic\"}),\"\\n\",o(c.h3,{id:\"controlled-color-picker\",children:[n(c.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#controlled-color-picker\",children:n(c.span,{className:\"icon icon-link\"})}),\"Controlled Color Picker\"]}),\"\\n\",o(c.p,{children:[\"To create a controlled Color Picker component, manage the state of the current color using the \",n(c.code,{children:\"value\"}),\" prop and update\\nit when the \",n(c.code,{children:\"onValueChange\"}),\" or \",n(c.code,{children:\"onValueChangeEnd\"}),\" event handler is called:\"]}),\"\\n\",n(l,{id:\"controlled\"}),\"\\n\",o(c.h3,{id:\"using-the-field-component\",children:[n(c.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-the-field-component\",children:n(c.span,{className:\"icon icon-link\"})}),\"Using the Field Component\"]}),\"\\n\",o(c.p,{children:[\"The \",n(c.code,{children:\"Field\"}),\" component helps manage form-related state and accessibility attributes of a color picker. It includes\\nhandling ARIA labels, helper text, and error text to ensure proper accessibility.\"]}),\"\\n\",n(l,{id:\"with-field\"}),\"\\n\",o(c.h3,{id:\"using-the-root-provider\",children:[n(c.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-the-root-provider\",children:n(c.span,{className:\"icon icon-link\"})}),\"Using the Root Provider\"]}),\"\\n\",o(c.p,{children:[\"The \",n(c.code,{children:\"RootProvider\"}),\" component provides a context for the color-picker. It accepts the value of the \",n(c.code,{children:\"useColor-picker\"}),\"\\nhook. You can leverage it to access the component state and methods from outside the color-picker.\"]}),\"\\n\",n(l,{id:\"root-provider\"}),\"\\n\",o(c.blockquote,{children:[\"\\n\",o(c.p,{children:[\"If you're using the \",n(c.code,{children:\"RootProvider\"}),\" component, you don't need to use the \",n(c.code,{children:\"Root\"}),\" component.\"]}),\"\\n\"]}),\"\\n\",o(c.h2,{id:\"api-reference\",children:[n(c.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#api-reference\",children:n(c.span,{className:\"icon icon-link\"})}),\"API Reference\"]}),\"\\n\",n(t,{id:\"color-picker\"}),\"\\n\",o(c.h2,{id:\"accessibility\",children:[n(c.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#accessibility\",children:n(c.span,{className:\"icon icon-link\"})}),\"Accessibility\"]}),\"\\n\",o(c.h3,{id:\"keyboard-support\",children:[n(c.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#keyboard-support\",children:n(c.span,{className:\"icon icon-link\"})}),\"Keyboard Support\"]}),\"\\n\",n(s,{id:\"color-picker\"})]})}return{default:function(e={}){const{wrapper:o}=e.components||{};return o?n(o,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};function _missingMdxReference(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "<ComponentPreview id=\"ColorPicker\" />\n\n## Anatomy\n\nTo set up the color picker correctly, you'll need to understand its anatomy and how we name its parts.\n\n> Each part includes a `data-part` attribute to help identify them in the DOM.\n\n<Anatomy id=\"color-picker\" />\n\n## Examples\n\nLearn how to use the `ColorPicker` component in your project. Let's take a look at the most basic example\n\n<Example id=\"basic\" />\n\n### Controlled Color Picker\n\nTo create a controlled Color Picker component, manage the state of the current color using the `value` prop and update\nit when the `onValueChange` or `onValueChangeEnd` event handler is called:\n\n<Example id=\"controlled\" />\n\n### Using the Field Component\n\nThe `Field` component helps manage form-related state and accessibility attributes of a color picker. It includes\nhandling ARIA labels, helper text, and error text to ensure proper accessibility.\n\n<Example id=\"with-field\" />\n\n### Using the Root Provider\n\nThe `RootProvider` component provides a context for the color-picker. It accepts the value of the `useColor-picker`\nhook. You can leverage it to access the component state and methods from outside the color-picker.\n\n<Example id=\"root-provider\" />\n\n> If you're using the `RootProvider` component, you don't need to use the `Root` component.\n\n## API Reference\n\n<ComponentTypes id=\"color-picker\" />\n\n## Accessibility\n\n### Keyboard Support\n\n<KeyBindingsTable id=\"color-picker\" />",
        "slug": "components/color-picker",
        "category": "components"
    },
    {
        "id": "combobox",
        "title": "Combobox",
        "description": "A single input field that combines the functionality of a select and input.",
        "metadata": {
            "readingTime": 1,
            "wordCount": 165
        },
        "content": "<componentpreview id=\"Combobox\">\n<h2>Anatomy</h2>\n<p>To set up the combobox correctly, you'll need to understand its anatomy and how we name its parts.</p>\n<blockquote>\n<p>Each part includes a <code>data-part</code> attribute to help identify them in the DOM.</p>\n</blockquote>\n<anatomy id=\"combobox\">\n<h2>Examples</h2>\n<p>Learn how to use the <code>Combobox</code> component in your project. Let's take a look at the most basic example</p>\n<example id=\"basic\">\n<h3>Advanced Customization</h3>\n<p>Extended example that shows usage with complex item objects, including disabled state for certain options.</p>\n<example id=\"advanced\">\n<h3>Using the Field Component</h3>\n<p>The <code>Field</code> component helps manage form-related state and accessibility attributes of a combobox. It includes handling\nARIA labels, helper text, and error text to ensure proper accessibility.</p>\n<example id=\"with-field\">\n<h3>Using the Root Provider</h3>\n<p>The <code>RootProvider</code> component provides a context for the combobox. It accepts the value of the <code>useCombobox</code> hook. You\ncan leverage it to access the component state and methods from outside the combobox.</p>\n<example id=\"root-provider\">\n<blockquote>\n<p>If you're using the <code>RootProvider</code> component, you don't need to use the <code>Root</code> component.</p>\n</blockquote>\n<h2>API Reference</h2>\n<componenttypes id=\"combobox\">\n<h2>Accessibility</h2>\n<p>Complies with the <a href=\"https://www.w3.org/WAI/ARIA/apg/patterns/combobox/\">Combobox WAI-ARIA design pattern</a>.</p>\n<h3>Keyboard Support</h3>\n<keybindingstable id=\"combobox\"></keybindingstable></componenttypes></example></example></example></example></anatomy></componentpreview>",
        "framework": "*",
        "toc": [
            {
                "title": "Anatomy",
                "url": "#anatomy",
                "items": []
            },
            {
                "title": "Examples",
                "url": "#examples",
                "items": [
                    {
                        "title": "Advanced Customization",
                        "url": "#advanced-customization",
                        "items": []
                    },
                    {
                        "title": "Using the Field Component",
                        "url": "#using-the-field-component",
                        "items": []
                    },
                    {
                        "title": "Using the Root Provider",
                        "url": "#using-the-root-provider",
                        "items": []
                    }
                ]
            },
            {
                "title": "API Reference",
                "url": "#api-reference",
                "items": []
            },
            {
                "title": "Accessibility",
                "url": "#accessibility",
                "items": [
                    {
                        "title": "Keyboard Support",
                        "url": "#keyboard-support",
                        "items": []
                    }
                ]
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:o}=arguments[0];function _createMdxContent(i){const a={a:\"a\",blockquote:\"blockquote\",code:\"code\",h2:\"h2\",h3:\"h3\",p:\"p\",span:\"span\",...i.components},{Anatomy:t,ComponentPreview:c,ComponentTypes:s,Example:r,KeyBindingsTable:d}=a;return t||_missingMdxReference(\"Anatomy\",!0),c||_missingMdxReference(\"ComponentPreview\",!0),s||_missingMdxReference(\"ComponentTypes\",!0),r||_missingMdxReference(\"Example\",!0),d||_missingMdxReference(\"KeyBindingsTable\",!0),o(e,{children:[n(c,{id:\"Combobox\"}),\"\\n\",o(a.h2,{id:\"anatomy\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#anatomy\",children:n(a.span,{className:\"icon icon-link\"})}),\"Anatomy\"]}),\"\\n\",n(a.p,{children:\"To set up the combobox correctly, you'll need to understand its anatomy and how we name its parts.\"}),\"\\n\",o(a.blockquote,{children:[\"\\n\",o(a.p,{children:[\"Each part includes a \",n(a.code,{children:\"data-part\"}),\" attribute to help identify them in the DOM.\"]}),\"\\n\"]}),\"\\n\",n(t,{id:\"combobox\"}),\"\\n\",o(a.h2,{id:\"examples\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#examples\",children:n(a.span,{className:\"icon icon-link\"})}),\"Examples\"]}),\"\\n\",o(a.p,{children:[\"Learn how to use the \",n(a.code,{children:\"Combobox\"}),\" component in your project. Let's take a look at the most basic example\"]}),\"\\n\",n(r,{id:\"basic\"}),\"\\n\",o(a.h3,{id:\"advanced-customization\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#advanced-customization\",children:n(a.span,{className:\"icon icon-link\"})}),\"Advanced Customization\"]}),\"\\n\",n(a.p,{children:\"Extended example that shows usage with complex item objects, including disabled state for certain options.\"}),\"\\n\",n(r,{id:\"advanced\"}),\"\\n\",o(a.h3,{id:\"using-the-field-component\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-the-field-component\",children:n(a.span,{className:\"icon icon-link\"})}),\"Using the Field Component\"]}),\"\\n\",o(a.p,{children:[\"The \",n(a.code,{children:\"Field\"}),\" component helps manage form-related state and accessibility attributes of a combobox. It includes handling\\nARIA labels, helper text, and error text to ensure proper accessibility.\"]}),\"\\n\",n(r,{id:\"with-field\"}),\"\\n\",o(a.h3,{id:\"using-the-root-provider\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-the-root-provider\",children:n(a.span,{className:\"icon icon-link\"})}),\"Using the Root Provider\"]}),\"\\n\",o(a.p,{children:[\"The \",n(a.code,{children:\"RootProvider\"}),\" component provides a context for the combobox. It accepts the value of the \",n(a.code,{children:\"useCombobox\"}),\" hook. You\\ncan leverage it to access the component state and methods from outside the combobox.\"]}),\"\\n\",n(r,{id:\"root-provider\"}),\"\\n\",o(a.blockquote,{children:[\"\\n\",o(a.p,{children:[\"If you're using the \",n(a.code,{children:\"RootProvider\"}),\" component, you don't need to use the \",n(a.code,{children:\"Root\"}),\" component.\"]}),\"\\n\"]}),\"\\n\",o(a.h2,{id:\"api-reference\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#api-reference\",children:n(a.span,{className:\"icon icon-link\"})}),\"API Reference\"]}),\"\\n\",n(s,{id:\"combobox\"}),\"\\n\",o(a.h2,{id:\"accessibility\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#accessibility\",children:n(a.span,{className:\"icon icon-link\"})}),\"Accessibility\"]}),\"\\n\",o(a.p,{children:[\"Complies with the \",n(a.a,{href:\"https://www.w3.org/WAI/ARIA/apg/patterns/combobox/\",children:\"Combobox WAI-ARIA design pattern\"}),\".\"]}),\"\\n\",o(a.h3,{id:\"keyboard-support\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#keyboard-support\",children:n(a.span,{className:\"icon icon-link\"})}),\"Keyboard Support\"]}),\"\\n\",n(d,{id:\"combobox\"})]})}return{default:function(e={}){const{wrapper:o}=e.components||{};return o?n(o,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};function _missingMdxReference(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "<ComponentPreview id=\"Combobox\" />\n\n## Anatomy\n\nTo set up the combobox correctly, you'll need to understand its anatomy and how we name its parts.\n\n> Each part includes a `data-part` attribute to help identify them in the DOM.\n\n<Anatomy id=\"combobox\" />\n\n## Examples\n\nLearn how to use the `Combobox` component in your project. Let's take a look at the most basic example\n\n<Example id=\"basic\" />\n\n### Advanced Customization\n\nExtended example that shows usage with complex item objects, including disabled state for certain options.\n\n<Example id=\"advanced\" />\n\n### Using the Field Component\n\nThe `Field` component helps manage form-related state and accessibility attributes of a combobox. It includes handling\nARIA labels, helper text, and error text to ensure proper accessibility.\n\n<Example id=\"with-field\" />\n\n### Using the Root Provider\n\nThe `RootProvider` component provides a context for the combobox. It accepts the value of the `useCombobox` hook. You\ncan leverage it to access the component state and methods from outside the combobox.\n\n<Example id=\"root-provider\" />\n\n> If you're using the `RootProvider` component, you don't need to use the `Root` component.\n\n## API Reference\n\n<ComponentTypes id=\"combobox\" />\n\n## Accessibility\n\nComplies with the [Combobox WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/).\n\n### Keyboard Support\n\n<KeyBindingsTable id=\"combobox\" />",
        "slug": "components/combobox",
        "category": "components"
    },
    {
        "id": "date-picker",
        "title": "Date Picker",
        "description": "A component that allows users to select a date from a calendar.",
        "metadata": {
            "readingTime": 1,
            "wordCount": 177
        },
        "content": "<componentpreview id=\"DatePicker\">\n<h2>Anatomy</h2>\n<p>To set up the date picker correctly, you'll need to understand its anatomy and how we name its parts.</p>\n<blockquote>\n<p>Each part includes a <code>data-part</code> attribute to help identify them in the DOM.</p>\n</blockquote>\n<anatomy id=\"date-picker\">\n<h2>Examples</h2>\n<p>Learn how to use the <code>DatePicker</code> component in your project. Let's take a look at the most basic example</p>\n<example id=\"basic\">\n<h3>Range Selection</h3>\n<p>To create a Date Picker that allows a range selection, set the <code>selectionMode</code> prop to <code>range</code>.</p>\n<example id=\"range\">\n<h3>Standalone Date Picker</h3>\n<p>In some cases, you might want to display a non-dismissible date picker. This can be achieved by setting the <code>open</code> prop\nto <code>true</code> and <code>closeOnSelect</code> prop to <code>false</code>.</p>\n<blockquote>\n<p>Important to note that standalone date picker doesn't use the <code>Portal</code>, <code>Positioner</code> and <code>Content</code> components.</p>\n</blockquote>\n<example id=\"standalone\">\n<h3>Using the Root Provider</h3>\n<p>The <code>RootProvider</code> component provides a context for the date-picker. It accepts the value of the <code>useDate-picker</code> hook.\nYou can leverage it to access the component state and methods from outside the date-picker.</p>\n<example id=\"root-provider\">\n<blockquote>\n<p>If you're using the <code>RootProvider</code> component, you don't need to use the <code>Root</code> component.</p>\n</blockquote>\n<h2>API Reference</h2>\n<componenttypes id=\"date-picker\">\n<h2>Accessibility</h2>\n<h3>Keyboard Support</h3>\n<keybindingstable id=\"date-picker\"></keybindingstable></componenttypes></example></example></example></example></anatomy></componentpreview>",
        "framework": "*",
        "toc": [
            {
                "title": "Anatomy",
                "url": "#anatomy",
                "items": []
            },
            {
                "title": "Examples",
                "url": "#examples",
                "items": [
                    {
                        "title": "Range Selection",
                        "url": "#range-selection",
                        "items": []
                    },
                    {
                        "title": "Standalone Date Picker",
                        "url": "#standalone-date-picker",
                        "items": []
                    },
                    {
                        "title": "Using the Root Provider",
                        "url": "#using-the-root-provider",
                        "items": []
                    }
                ]
            },
            {
                "title": "API Reference",
                "url": "#api-reference",
                "items": []
            },
            {
                "title": "Accessibility",
                "url": "#accessibility",
                "items": [
                    {
                        "title": "Keyboard Support",
                        "url": "#keyboard-support",
                        "items": []
                    }
                ]
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:i}=arguments[0];function _createMdxContent(o){const a={a:\"a\",blockquote:\"blockquote\",code:\"code\",h2:\"h2\",h3:\"h3\",p:\"p\",span:\"span\",...o.components},{Anatomy:c,ComponentPreview:t,ComponentTypes:r,Example:d,KeyBindingsTable:s}=a;return c||_missingMdxReference(\"Anatomy\",!0),t||_missingMdxReference(\"ComponentPreview\",!0),r||_missingMdxReference(\"ComponentTypes\",!0),d||_missingMdxReference(\"Example\",!0),s||_missingMdxReference(\"KeyBindingsTable\",!0),i(e,{children:[n(t,{id:\"DatePicker\"}),\"\\n\",i(a.h2,{id:\"anatomy\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#anatomy\",children:n(a.span,{className:\"icon icon-link\"})}),\"Anatomy\"]}),\"\\n\",n(a.p,{children:\"To set up the date picker correctly, you'll need to understand its anatomy and how we name its parts.\"}),\"\\n\",i(a.blockquote,{children:[\"\\n\",i(a.p,{children:[\"Each part includes a \",n(a.code,{children:\"data-part\"}),\" attribute to help identify them in the DOM.\"]}),\"\\n\"]}),\"\\n\",n(c,{id:\"date-picker\"}),\"\\n\",i(a.h2,{id:\"examples\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#examples\",children:n(a.span,{className:\"icon icon-link\"})}),\"Examples\"]}),\"\\n\",i(a.p,{children:[\"Learn how to use the \",n(a.code,{children:\"DatePicker\"}),\" component in your project. Let's take a look at the most basic example\"]}),\"\\n\",n(d,{id:\"basic\"}),\"\\n\",i(a.h3,{id:\"range-selection\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#range-selection\",children:n(a.span,{className:\"icon icon-link\"})}),\"Range Selection\"]}),\"\\n\",i(a.p,{children:[\"To create a Date Picker that allows a range selection, set the \",n(a.code,{children:\"selectionMode\"}),\" prop to \",n(a.code,{children:\"range\"}),\".\"]}),\"\\n\",n(d,{id:\"range\"}),\"\\n\",i(a.h3,{id:\"standalone-date-picker\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#standalone-date-picker\",children:n(a.span,{className:\"icon icon-link\"})}),\"Standalone Date Picker\"]}),\"\\n\",i(a.p,{children:[\"In some cases, you might want to display a non-dismissible date picker. This can be achieved by setting the \",n(a.code,{children:\"open\"}),\" prop\\nto \",n(a.code,{children:\"true\"}),\" and \",n(a.code,{children:\"closeOnSelect\"}),\" prop to \",n(a.code,{children:\"false\"}),\".\"]}),\"\\n\",i(a.blockquote,{children:[\"\\n\",i(a.p,{children:[\"Important to note that standalone date picker doesn't use the \",n(a.code,{children:\"Portal\"}),\", \",n(a.code,{children:\"Positioner\"}),\" and \",n(a.code,{children:\"Content\"}),\" components.\"]}),\"\\n\"]}),\"\\n\",n(d,{id:\"standalone\"}),\"\\n\",i(a.h3,{id:\"using-the-root-provider\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-the-root-provider\",children:n(a.span,{className:\"icon icon-link\"})}),\"Using the Root Provider\"]}),\"\\n\",i(a.p,{children:[\"The \",n(a.code,{children:\"RootProvider\"}),\" component provides a context for the date-picker. It accepts the value of the \",n(a.code,{children:\"useDate-picker\"}),\" hook.\\nYou can leverage it to access the component state and methods from outside the date-picker.\"]}),\"\\n\",n(d,{id:\"root-provider\"}),\"\\n\",i(a.blockquote,{children:[\"\\n\",i(a.p,{children:[\"If you're using the \",n(a.code,{children:\"RootProvider\"}),\" component, you don't need to use the \",n(a.code,{children:\"Root\"}),\" component.\"]}),\"\\n\"]}),\"\\n\",i(a.h2,{id:\"api-reference\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#api-reference\",children:n(a.span,{className:\"icon icon-link\"})}),\"API Reference\"]}),\"\\n\",n(r,{id:\"date-picker\"}),\"\\n\",i(a.h2,{id:\"accessibility\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#accessibility\",children:n(a.span,{className:\"icon icon-link\"})}),\"Accessibility\"]}),\"\\n\",i(a.h3,{id:\"keyboard-support\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#keyboard-support\",children:n(a.span,{className:\"icon icon-link\"})}),\"Keyboard Support\"]}),\"\\n\",n(s,{id:\"date-picker\"})]})}return{default:function(e={}){const{wrapper:i}=e.components||{};return i?n(i,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};function _missingMdxReference(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "<ComponentPreview id=\"DatePicker\" />\n\n## Anatomy\n\nTo set up the date picker correctly, you'll need to understand its anatomy and how we name its parts.\n\n> Each part includes a `data-part` attribute to help identify them in the DOM.\n\n<Anatomy id=\"date-picker\" />\n\n## Examples\n\nLearn how to use the `DatePicker` component in your project. Let's take a look at the most basic example\n\n<Example id=\"basic\" />\n\n### Range Selection\n\nTo create a Date Picker that allows a range selection, set the `selectionMode` prop to `range`.\n\n<Example id=\"range\" />\n\n### Standalone Date Picker\n\nIn some cases, you might want to display a non-dismissible date picker. This can be achieved by setting the `open` prop\nto `true` and `closeOnSelect` prop to `false`.\n\n> Important to note that standalone date picker doesn't use the `Portal`, `Positioner` and `Content` components.\n\n<Example id=\"standalone\" />\n\n### Using the Root Provider\n\nThe `RootProvider` component provides a context for the date-picker. It accepts the value of the `useDate-picker` hook.\nYou can leverage it to access the component state and methods from outside the date-picker.\n\n<Example id=\"root-provider\" />\n\n> If you're using the `RootProvider` component, you don't need to use the `Root` component.\n\n## API Reference\n\n<ComponentTypes id=\"date-picker\" />\n\n## Accessibility\n\n### Keyboard Support\n\n<KeyBindingsTable id=\"date-picker\" />",
        "slug": "components/date-picker",
        "category": "components"
    },
    {
        "id": "dialog",
        "title": "Dialog",
        "description": "A modal window that appears on top of the main content.",
        "metadata": {
            "readingTime": 1,
            "wordCount": 252
        },
        "content": "<componentpreview id=\"Dialog\">\n<h2>Anatomy</h2>\n<p>To use the dialog component correctly, you'll need to understand its anatomy and how we name its parts.</p>\n<blockquote>\n<p>Each part includes a <code>data-part</code> attribute to help identify them in the DOM.</p>\n</blockquote>\n<anatomy id=\"dialog\">\n<h2>Examples</h2>\n<p>Learn how to use the <code>Dialog</code> component in your project. Let's take a look at the most basic example</p>\n<example id=\"basic\">\n<h3>Controlled Dialog</h3>\n<p>To create a controlled Dialog component, manage the state of the dialog using the <code>open</code> and <code>onOpenChange</code> props:</p>\n<example id=\"controlled\">\n<h3>Lazy Mounting</h3>\n<p>Lazy mounting is a feature that allows the content of a dialog to be rendered only when the dialog is first opened. This\nis useful for performance optimization, especially when dialog content is large or complex. To enable lazy mounting, use\nthe <code>lazyMount</code> prop on the <code>Dialog.Root</code> component.</p>\n<p>In addition, the <code>unmountOnExit</code> prop can be used in conjunction with <code>lazyMount</code> to unmount the dialog content when the\nDialog is closed, freeing up resources. The next time the dialog is activated, its content will be re-rendered.</p>\n<example id=\"lazy-mount\">\n<h3>Using Render Function</h3>\n<p>The Dialog component supports the use of a render function as a child for more control. This allows access to dialog\nstates like <code>isOpen</code>:</p>\n<example id=\"render-fn\">\n<h3>Using the Root Provider</h3>\n<p>The <code>RootProvider</code> component provides a context for the dialog. It accepts the value of the <code>useDialog</code> hook. You can\nleverage it to access the component state and methods from outside the dialog.</p>\n<example id=\"root-provider\">\n<blockquote>\n<p>If you're using the <code>RootProvider</code> component, you don't need to use the <code>Root</code> component.</p>\n</blockquote>\n<h2>API Reference</h2>\n<componenttypes id=\"dialog\">\n<h2>Accessibility</h2>\n<p>Complies with the <a href=\"https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/\">Dialog WAI-ARIA design pattern</a>.</p>\n<h3>Keyboard Support</h3>\n<keybindingstable id=\"dialog\"></keybindingstable></componenttypes></example></example></example></example></example></anatomy></componentpreview>",
        "framework": "*",
        "toc": [
            {
                "title": "Anatomy",
                "url": "#anatomy",
                "items": []
            },
            {
                "title": "Examples",
                "url": "#examples",
                "items": [
                    {
                        "title": "Controlled Dialog",
                        "url": "#controlled-dialog",
                        "items": []
                    },
                    {
                        "title": "Lazy Mounting",
                        "url": "#lazy-mounting",
                        "items": []
                    },
                    {
                        "title": "Using Render Function",
                        "url": "#using-render-function",
                        "items": []
                    },
                    {
                        "title": "Using the Root Provider",
                        "url": "#using-the-root-provider",
                        "items": []
                    }
                ]
            },
            {
                "title": "API Reference",
                "url": "#api-reference",
                "items": []
            },
            {
                "title": "Accessibility",
                "url": "#accessibility",
                "items": [
                    {
                        "title": "Keyboard Support",
                        "url": "#keyboard-support",
                        "items": []
                    }
                ]
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:o}=arguments[0];function _createMdxContent(i){const a={a:\"a\",blockquote:\"blockquote\",code:\"code\",h2:\"h2\",h3:\"h3\",p:\"p\",span:\"span\",...i.components},{Anatomy:t,ComponentPreview:c,ComponentTypes:r,Example:l,KeyBindingsTable:d}=a;return t||_missingMdxReference(\"Anatomy\",!0),c||_missingMdxReference(\"ComponentPreview\",!0),r||_missingMdxReference(\"ComponentTypes\",!0),l||_missingMdxReference(\"Example\",!0),d||_missingMdxReference(\"KeyBindingsTable\",!0),o(e,{children:[n(c,{id:\"Dialog\"}),\"\\n\",o(a.h2,{id:\"anatomy\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#anatomy\",children:n(a.span,{className:\"icon icon-link\"})}),\"Anatomy\"]}),\"\\n\",n(a.p,{children:\"To use the dialog component correctly, you'll need to understand its anatomy and how we name its parts.\"}),\"\\n\",o(a.blockquote,{children:[\"\\n\",o(a.p,{children:[\"Each part includes a \",n(a.code,{children:\"data-part\"}),\" attribute to help identify them in the DOM.\"]}),\"\\n\"]}),\"\\n\",n(t,{id:\"dialog\"}),\"\\n\",o(a.h2,{id:\"examples\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#examples\",children:n(a.span,{className:\"icon icon-link\"})}),\"Examples\"]}),\"\\n\",o(a.p,{children:[\"Learn how to use the \",n(a.code,{children:\"Dialog\"}),\" component in your project. Let's take a look at the most basic example\"]}),\"\\n\",n(l,{id:\"basic\"}),\"\\n\",o(a.h3,{id:\"controlled-dialog\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#controlled-dialog\",children:n(a.span,{className:\"icon icon-link\"})}),\"Controlled Dialog\"]}),\"\\n\",o(a.p,{children:[\"To create a controlled Dialog component, manage the state of the dialog using the \",n(a.code,{children:\"open\"}),\" and \",n(a.code,{children:\"onOpenChange\"}),\" props:\"]}),\"\\n\",n(l,{id:\"controlled\"}),\"\\n\",o(a.h3,{id:\"lazy-mounting\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#lazy-mounting\",children:n(a.span,{className:\"icon icon-link\"})}),\"Lazy Mounting\"]}),\"\\n\",o(a.p,{children:[\"Lazy mounting is a feature that allows the content of a dialog to be rendered only when the dialog is first opened. This\\nis useful for performance optimization, especially when dialog content is large or complex. To enable lazy mounting, use\\nthe \",n(a.code,{children:\"lazyMount\"}),\" prop on the \",n(a.code,{children:\"Dialog.Root\"}),\" component.\"]}),\"\\n\",o(a.p,{children:[\"In addition, the \",n(a.code,{children:\"unmountOnExit\"}),\" prop can be used in conjunction with \",n(a.code,{children:\"lazyMount\"}),\" to unmount the dialog content when the\\nDialog is closed, freeing up resources. The next time the dialog is activated, its content will be re-rendered.\"]}),\"\\n\",n(l,{id:\"lazy-mount\"}),\"\\n\",o(a.h3,{id:\"using-render-function\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-render-function\",children:n(a.span,{className:\"icon icon-link\"})}),\"Using Render Function\"]}),\"\\n\",o(a.p,{children:[\"The Dialog component supports the use of a render function as a child for more control. This allows access to dialog\\nstates like \",n(a.code,{children:\"isOpen\"}),\":\"]}),\"\\n\",n(l,{id:\"render-fn\"}),\"\\n\",o(a.h3,{id:\"using-the-root-provider\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-the-root-provider\",children:n(a.span,{className:\"icon icon-link\"})}),\"Using the Root Provider\"]}),\"\\n\",o(a.p,{children:[\"The \",n(a.code,{children:\"RootProvider\"}),\" component provides a context for the dialog. It accepts the value of the \",n(a.code,{children:\"useDialog\"}),\" hook. You can\\nleverage it to access the component state and methods from outside the dialog.\"]}),\"\\n\",n(l,{id:\"root-provider\"}),\"\\n\",o(a.blockquote,{children:[\"\\n\",o(a.p,{children:[\"If you're using the \",n(a.code,{children:\"RootProvider\"}),\" component, you don't need to use the \",n(a.code,{children:\"Root\"}),\" component.\"]}),\"\\n\"]}),\"\\n\",o(a.h2,{id:\"api-reference\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#api-reference\",children:n(a.span,{className:\"icon icon-link\"})}),\"API Reference\"]}),\"\\n\",n(r,{id:\"dialog\"}),\"\\n\",o(a.h2,{id:\"accessibility\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#accessibility\",children:n(a.span,{className:\"icon icon-link\"})}),\"Accessibility\"]}),\"\\n\",o(a.p,{children:[\"Complies with the \",n(a.a,{href:\"https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/\",children:\"Dialog WAI-ARIA design pattern\"}),\".\"]}),\"\\n\",o(a.h3,{id:\"keyboard-support\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#keyboard-support\",children:n(a.span,{className:\"icon icon-link\"})}),\"Keyboard Support\"]}),\"\\n\",n(d,{id:\"dialog\"})]})}return{default:function(e={}){const{wrapper:o}=e.components||{};return o?n(o,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};function _missingMdxReference(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "<ComponentPreview id=\"Dialog\" />\n\n## Anatomy\n\nTo use the dialog component correctly, you'll need to understand its anatomy and how we name its parts.\n\n> Each part includes a `data-part` attribute to help identify them in the DOM.\n\n<Anatomy id=\"dialog\" />\n\n## Examples\n\nLearn how to use the `Dialog` component in your project. Let's take a look at the most basic example\n\n<Example id=\"basic\" />\n\n### Controlled Dialog\n\nTo create a controlled Dialog component, manage the state of the dialog using the `open` and `onOpenChange` props:\n\n<Example id=\"controlled\" />\n\n### Lazy Mounting\n\nLazy mounting is a feature that allows the content of a dialog to be rendered only when the dialog is first opened. This\nis useful for performance optimization, especially when dialog content is large or complex. To enable lazy mounting, use\nthe `lazyMount` prop on the `Dialog.Root` component.\n\nIn addition, the `unmountOnExit` prop can be used in conjunction with `lazyMount` to unmount the dialog content when the\nDialog is closed, freeing up resources. The next time the dialog is activated, its content will be re-rendered.\n\n<Example id=\"lazy-mount\" />\n\n### Using Render Function\n\nThe Dialog component supports the use of a render function as a child for more control. This allows access to dialog\nstates like `isOpen`:\n\n<Example id=\"render-fn\" />\n\n### Using the Root Provider\n\nThe `RootProvider` component provides a context for the dialog. It accepts the value of the `useDialog` hook. You can\nleverage it to access the component state and methods from outside the dialog.\n\n<Example id=\"root-provider\" />\n\n> If you're using the `RootProvider` component, you don't need to use the `Root` component.\n\n## API Reference\n\n<ComponentTypes id=\"dialog\" />\n\n## Accessibility\n\nComplies with the [Dialog WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/).\n\n### Keyboard Support\n\n<KeyBindingsTable id=\"dialog\" />",
        "slug": "components/dialog",
        "category": "components"
    },
    {
        "id": "editable",
        "title": "Editable",
        "description": "A component that allows users to edit text in place.",
        "metadata": {
            "readingTime": 1,
            "wordCount": 292
        },
        "content": "<componentpreview id=\"Editable\">\n<h2>Anatomy</h2>\n<p>To set up the editable correctly, you'll need to understand its anatomy and how we name its parts.</p>\n<blockquote>\n<p>Each part includes a <code>data-part</code> attribute to help identify them in the DOM.</p>\n</blockquote>\n<anatomy id=\"editable\">\n<h2>Examples</h2>\n<p>Learn how to use the <code>Editable</code> component in your project. Let's take a look at the most basic example:</p>\n<example id=\"basic\">\n<h3>Using custom controls</h3>\n<p>In some cases, you might need to use custom controls to toggle the edit and read mode. We use the render prop pattern to\nprovide access to the internal state of the component.</p>\n<example id=\"custom-controls\">\n<h3>Auto-resizing the editable</h3>\n<p>To auto-grow the editable as the content changes, set the <code>autoResize</code> prop to <code>true</code>.</p>\n<pre><code class=\"language-tsx\">&#x3C;Editable.Root placeholder=\"Placeholder\" autoResize>\n  {/*...*/}\n&#x3C;/Editable.Root>\n</code></pre>\n<h3>Setting a maxWidth</h3>\n<p>It is a common pattern to set a maximum of the editable as it auto-grows. To achieve this, set the <code>maxWidth</code> prop to\nthe desired value.</p>\n<pre><code class=\"language-tsx\">&#x3C;Editable.Root placeholder=\"Placeholder\" autoResize maxWidth=\"320px\">\n  {/*...*/}\n&#x3C;/Editable.Root>\n</code></pre>\n<h3>Editing with double click</h3>\n<p>The editable supports two modes of activating the \"edit\" state:</p>\n<ul>\n<li>when the preview part is focused (with pointer or keyboard).</li>\n<li>when the preview part is double-clicked.</li>\n</ul>\n<p>To change the mode to double-click, pass the prop <code>activationMode=\"dblclick\"</code>.</p>\n<pre><code class=\"language-tsx\">&#x3C;Editable.Root placeholder=\"Placeholder\" activationMode=\"dblclick\">\n  {/*...*/}\n&#x3C;/Editable.Root>\n</code></pre>\n<h3>Using the Field Component</h3>\n<p>The <code>Field</code> component helps manage form-related state and accessibility attributes of an editable. It includes handling\nARIA labels, helper text, and error text to ensure proper accessibility.</p>\n<example id=\"with-field\">\n<h3>Using the Root Provider</h3>\n<p>The <code>RootProvider</code> component provides a context for the editable. It accepts the value of the <code>useEditable</code> hook. You\ncan leverage it to access the component state and methods from outside the editable.</p>\n<example id=\"root-provider\">\n<blockquote>\n<p>If you're using the <code>RootProvider</code> component, you don't need to use the <code>Root</code> component.</p>\n</blockquote>\n<h2>API Reference</h2>\n<componenttypes id=\"editable\">\n<h2>Accessibility</h2>\n<h3>Keyboard Support</h3>\n<keybindingstable id=\"editable\"></keybindingstable></componenttypes></example></example></example></example></anatomy></componentpreview>",
        "framework": "*",
        "toc": [
            {
                "title": "Anatomy",
                "url": "#anatomy",
                "items": []
            },
            {
                "title": "Examples",
                "url": "#examples",
                "items": [
                    {
                        "title": "Using custom controls",
                        "url": "#using-custom-controls",
                        "items": []
                    },
                    {
                        "title": "Auto-resizing the editable",
                        "url": "#auto-resizing-the-editable",
                        "items": []
                    },
                    {
                        "title": "Setting a maxWidth",
                        "url": "#setting-a-maxwidth",
                        "items": []
                    },
                    {
                        "title": "Editing with double click",
                        "url": "#editing-with-double-click",
                        "items": []
                    },
                    {
                        "title": "Using the Field Component",
                        "url": "#using-the-field-component",
                        "items": []
                    },
                    {
                        "title": "Using the Root Provider",
                        "url": "#using-the-root-provider",
                        "items": []
                    }
                ]
            },
            {
                "title": "API Reference",
                "url": "#api-reference",
                "items": []
            },
            {
                "title": "Accessibility",
                "url": "#accessibility",
                "items": [
                    {
                        "title": "Keyboard Support",
                        "url": "#keyboard-support",
                        "items": []
                    }
                ]
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:i}=arguments[0];function _createMdxContent(o){const t={a:\"a\",blockquote:\"blockquote\",code:\"code\",h2:\"h2\",h3:\"h3\",li:\"li\",p:\"p\",pre:\"pre\",span:\"span\",ul:\"ul\",...o.components},{Anatomy:a,ComponentPreview:c,ComponentTypes:l,Example:r,KeyBindingsTable:d}=t;return a||_missingMdxReference(\"Anatomy\",!0),c||_missingMdxReference(\"ComponentPreview\",!0),l||_missingMdxReference(\"ComponentTypes\",!0),r||_missingMdxReference(\"Example\",!0),d||_missingMdxReference(\"KeyBindingsTable\",!0),i(e,{children:[n(c,{id:\"Editable\"}),\"\\n\",i(t.h2,{id:\"anatomy\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#anatomy\",children:n(t.span,{className:\"icon icon-link\"})}),\"Anatomy\"]}),\"\\n\",n(t.p,{children:\"To set up the editable correctly, you'll need to understand its anatomy and how we name its parts.\"}),\"\\n\",i(t.blockquote,{children:[\"\\n\",i(t.p,{children:[\"Each part includes a \",n(t.code,{children:\"data-part\"}),\" attribute to help identify them in the DOM.\"]}),\"\\n\"]}),\"\\n\",n(a,{id:\"editable\"}),\"\\n\",i(t.h2,{id:\"examples\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#examples\",children:n(t.span,{className:\"icon icon-link\"})}),\"Examples\"]}),\"\\n\",i(t.p,{children:[\"Learn how to use the \",n(t.code,{children:\"Editable\"}),\" component in your project. Let's take a look at the most basic example:\"]}),\"\\n\",n(r,{id:\"basic\"}),\"\\n\",i(t.h3,{id:\"using-custom-controls\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-custom-controls\",children:n(t.span,{className:\"icon icon-link\"})}),\"Using custom controls\"]}),\"\\n\",n(t.p,{children:\"In some cases, you might need to use custom controls to toggle the edit and read mode. We use the render prop pattern to\\nprovide access to the internal state of the component.\"}),\"\\n\",n(r,{id:\"custom-controls\"}),\"\\n\",i(t.h3,{id:\"auto-resizing-the-editable\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#auto-resizing-the-editable\",children:n(t.span,{className:\"icon icon-link\"})}),\"Auto-resizing the editable\"]}),\"\\n\",i(t.p,{children:[\"To auto-grow the editable as the content changes, set the \",n(t.code,{children:\"autoResize\"}),\" prop to \",n(t.code,{children:\"true\"}),\".\"]}),\"\\n\",n(t.pre,{children:n(t.code,{className:\"language-tsx\",children:'<Editable.Root placeholder=\"Placeholder\" autoResize>\\n  {/*...*/}\\n</Editable.Root>\\n'})}),\"\\n\",i(t.h3,{id:\"setting-a-maxwidth\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#setting-a-maxwidth\",children:n(t.span,{className:\"icon icon-link\"})}),\"Setting a maxWidth\"]}),\"\\n\",i(t.p,{children:[\"It is a common pattern to set a maximum of the editable as it auto-grows. To achieve this, set the \",n(t.code,{children:\"maxWidth\"}),\" prop to\\nthe desired value.\"]}),\"\\n\",n(t.pre,{children:n(t.code,{className:\"language-tsx\",children:'<Editable.Root placeholder=\"Placeholder\" autoResize maxWidth=\"320px\">\\n  {/*...*/}\\n</Editable.Root>\\n'})}),\"\\n\",i(t.h3,{id:\"editing-with-double-click\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#editing-with-double-click\",children:n(t.span,{className:\"icon icon-link\"})}),\"Editing with double click\"]}),\"\\n\",n(t.p,{children:'The editable supports two modes of activating the \"edit\" state:'}),\"\\n\",i(t.ul,{children:[\"\\n\",n(t.li,{children:\"when the preview part is focused (with pointer or keyboard).\"}),\"\\n\",n(t.li,{children:\"when the preview part is double-clicked.\"}),\"\\n\"]}),\"\\n\",i(t.p,{children:[\"To change the mode to double-click, pass the prop \",n(t.code,{children:'activationMode=\"dblclick\"'}),\".\"]}),\"\\n\",n(t.pre,{children:n(t.code,{className:\"language-tsx\",children:'<Editable.Root placeholder=\"Placeholder\" activationMode=\"dblclick\">\\n  {/*...*/}\\n</Editable.Root>\\n'})}),\"\\n\",i(t.h3,{id:\"using-the-field-component\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-the-field-component\",children:n(t.span,{className:\"icon icon-link\"})}),\"Using the Field Component\"]}),\"\\n\",i(t.p,{children:[\"The \",n(t.code,{children:\"Field\"}),\" component helps manage form-related state and accessibility attributes of an editable. It includes handling\\nARIA labels, helper text, and error text to ensure proper accessibility.\"]}),\"\\n\",n(r,{id:\"with-field\"}),\"\\n\",i(t.h3,{id:\"using-the-root-provider\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-the-root-provider\",children:n(t.span,{className:\"icon icon-link\"})}),\"Using the Root Provider\"]}),\"\\n\",i(t.p,{children:[\"The \",n(t.code,{children:\"RootProvider\"}),\" component provides a context for the editable. It accepts the value of the \",n(t.code,{children:\"useEditable\"}),\" hook. You\\ncan leverage it to access the component state and methods from outside the editable.\"]}),\"\\n\",n(r,{id:\"root-provider\"}),\"\\n\",i(t.blockquote,{children:[\"\\n\",i(t.p,{children:[\"If you're using the \",n(t.code,{children:\"RootProvider\"}),\" component, you don't need to use the \",n(t.code,{children:\"Root\"}),\" component.\"]}),\"\\n\"]}),\"\\n\",i(t.h2,{id:\"api-reference\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#api-reference\",children:n(t.span,{className:\"icon icon-link\"})}),\"API Reference\"]}),\"\\n\",n(l,{id:\"editable\"}),\"\\n\",i(t.h2,{id:\"accessibility\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#accessibility\",children:n(t.span,{className:\"icon icon-link\"})}),\"Accessibility\"]}),\"\\n\",i(t.h3,{id:\"keyboard-support\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#keyboard-support\",children:n(t.span,{className:\"icon icon-link\"})}),\"Keyboard Support\"]}),\"\\n\",n(d,{id:\"editable\"})]})}return{default:function(e={}){const{wrapper:i}=e.components||{};return i?n(i,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};function _missingMdxReference(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "<ComponentPreview id=\"Editable\" />\n\n## Anatomy\n\nTo set up the editable correctly, you'll need to understand its anatomy and how we name its parts.\n\n> Each part includes a `data-part` attribute to help identify them in the DOM.\n\n<Anatomy id=\"editable\" />\n\n## Examples\n\nLearn how to use the `Editable` component in your project. Let's take a look at the most basic example:\n\n<Example id=\"basic\" />\n\n### Using custom controls\n\nIn some cases, you might need to use custom controls to toggle the edit and read mode. We use the render prop pattern to\nprovide access to the internal state of the component.\n\n<Example id=\"custom-controls\" />\n\n### Auto-resizing the editable\n\nTo auto-grow the editable as the content changes, set the `autoResize` prop to `true`.\n\n```tsx\n<Editable.Root placeholder=\"Placeholder\" autoResize>\n  {/*...*/}\n</Editable.Root>\n```\n\n### Setting a maxWidth\n\nIt is a common pattern to set a maximum of the editable as it auto-grows. To achieve this, set the `maxWidth` prop to\nthe desired value.\n\n```tsx\n<Editable.Root placeholder=\"Placeholder\" autoResize maxWidth=\"320px\">\n  {/*...*/}\n</Editable.Root>\n```\n\n### Editing with double click\n\nThe editable supports two modes of activating the \"edit\" state:\n\n- when the preview part is focused (with pointer or keyboard).\n- when the preview part is double-clicked.\n\nTo change the mode to double-click, pass the prop `activationMode=\"dblclick\"`.\n\n```tsx\n<Editable.Root placeholder=\"Placeholder\" activationMode=\"dblclick\">\n  {/*...*/}\n</Editable.Root>\n```\n\n### Using the Field Component\n\nThe `Field` component helps manage form-related state and accessibility attributes of an editable. It includes handling\nARIA labels, helper text, and error text to ensure proper accessibility.\n\n<Example id=\"with-field\" />\n\n### Using the Root Provider\n\nThe `RootProvider` component provides a context for the editable. It accepts the value of the `useEditable` hook. You\ncan leverage it to access the component state and methods from outside the editable.\n\n<Example id=\"root-provider\" />\n\n> If you're using the `RootProvider` component, you don't need to use the `Root` component.\n\n## API Reference\n\n<ComponentTypes id=\"editable\" />\n\n## Accessibility\n\n### Keyboard Support\n\n<KeyBindingsTable id=\"editable\" />",
        "slug": "components/editable",
        "category": "components"
    },
    {
        "id": "field",
        "title": "Field",
        "description": "Provides a flexible container for form inputs, labels, and helper text.",
        "metadata": {
            "readingTime": 1,
            "wordCount": 182
        },
        "content": "<componentpreview id=\"Field\">\n<h2>Examples</h2>\n<p>The <code>Field</code> component provides contexts such as <code>invalid</code>, <code>disabled</code>, <code>required</code>, and <code>readOnly</code> for form elements.\nWhile most Ark UI components natively support these contexts, you can also use the <code>Field</code> component with standard HTML\nform elements.</p>\n<h3>Input</h3>\n<p>This example shows how to use the <code>Field</code> component with a standard input field.</p>\n<example id=\"input\">\n<h3>Textarea</h3>\n<p>This example illustrates how to use the <code>Field</code> component with a textarea element.</p>\n<example id=\"textarea\">\n<h3>Textarea Autoresize</h3>\n<p>Pass the <code>autoresize</code> prop to the <code>Textarea</code> component to enable automatic resizing as the user types.</p>\n<example id=\"textarea-autoresize\">\n<h3>Select</h3>\n<p>This example demonstrates how to integrate the <code>Field</code> component with a select dropdown.</p>\n<example id=\"select\">\n<h3>Using Ark Components</h3>\n<p>This example demonstrates how to integrate the <code>Field</code> and <code>Checkbox</code> components. For more examples of using the <code>Field</code>\ncomponent with various Ark UI elements, refer to their respective documentation.</p>\n<example component=\"checkbox\" id=\"with-field\">\n<h3>Using the Root Provider</h3>\n<p>The <code>RootProvider</code> component provides a context for the field. It accepts the value of the <code>useField</code> hook. You can\nleverage it to access the component state and methods from outside the field.</p>\n<example id=\"root-provider\">\n<blockquote>\n<p>If you're using the <code>RootProvider</code> component, you don't need to use the <code>Root</code> component.</p>\n</blockquote>\n<h2>API Reference</h2>\n<componenttypes id=\"field\"></componenttypes></example></example></example></example></example></example></componentpreview>",
        "framework": "*",
        "toc": [
            {
                "title": "Examples",
                "url": "#examples",
                "items": [
                    {
                        "title": "Input",
                        "url": "#input",
                        "items": []
                    },
                    {
                        "title": "Textarea",
                        "url": "#textarea",
                        "items": []
                    },
                    {
                        "title": "Textarea Autoresize",
                        "url": "#textarea-autoresize",
                        "items": []
                    },
                    {
                        "title": "Select",
                        "url": "#select",
                        "items": []
                    },
                    {
                        "title": "Using Ark Components",
                        "url": "#using-ark-components",
                        "items": []
                    },
                    {
                        "title": "Using the Root Provider",
                        "url": "#using-the-root-provider",
                        "items": []
                    }
                ]
            },
            {
                "title": "API Reference",
                "url": "#api-reference",
                "items": []
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:o}=arguments[0];function _createMdxContent(i){const t={a:\"a\",blockquote:\"blockquote\",code:\"code\",h2:\"h2\",h3:\"h3\",p:\"p\",span:\"span\",...i.components},{ComponentPreview:a,ComponentTypes:c,Example:r}=t;return a||_missingMdxReference(\"ComponentPreview\",!0),c||_missingMdxReference(\"ComponentTypes\",!0),r||_missingMdxReference(\"Example\",!0),o(e,{children:[n(a,{id:\"Field\"}),\"\\n\",o(t.h2,{id:\"examples\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#examples\",children:n(t.span,{className:\"icon icon-link\"})}),\"Examples\"]}),\"\\n\",o(t.p,{children:[\"The \",n(t.code,{children:\"Field\"}),\" component provides contexts such as \",n(t.code,{children:\"invalid\"}),\", \",n(t.code,{children:\"disabled\"}),\", \",n(t.code,{children:\"required\"}),\", and \",n(t.code,{children:\"readOnly\"}),\" for form elements.\\nWhile most Ark UI components natively support these contexts, you can also use the \",n(t.code,{children:\"Field\"}),\" component with standard HTML\\nform elements.\"]}),\"\\n\",o(t.h3,{id:\"input\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#input\",children:n(t.span,{className:\"icon icon-link\"})}),\"Input\"]}),\"\\n\",o(t.p,{children:[\"This example shows how to use the \",n(t.code,{children:\"Field\"}),\" component with a standard input field.\"]}),\"\\n\",n(r,{id:\"input\"}),\"\\n\",o(t.h3,{id:\"textarea\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#textarea\",children:n(t.span,{className:\"icon icon-link\"})}),\"Textarea\"]}),\"\\n\",o(t.p,{children:[\"This example illustrates how to use the \",n(t.code,{children:\"Field\"}),\" component with a textarea element.\"]}),\"\\n\",n(r,{id:\"textarea\"}),\"\\n\",o(t.h3,{id:\"textarea-autoresize\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#textarea-autoresize\",children:n(t.span,{className:\"icon icon-link\"})}),\"Textarea Autoresize\"]}),\"\\n\",o(t.p,{children:[\"Pass the \",n(t.code,{children:\"autoresize\"}),\" prop to the \",n(t.code,{children:\"Textarea\"}),\" component to enable automatic resizing as the user types.\"]}),\"\\n\",n(r,{id:\"textarea-autoresize\"}),\"\\n\",o(t.h3,{id:\"select\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#select\",children:n(t.span,{className:\"icon icon-link\"})}),\"Select\"]}),\"\\n\",o(t.p,{children:[\"This example demonstrates how to integrate the \",n(t.code,{children:\"Field\"}),\" component with a select dropdown.\"]}),\"\\n\",n(r,{id:\"select\"}),\"\\n\",o(t.h3,{id:\"using-ark-components\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-ark-components\",children:n(t.span,{className:\"icon icon-link\"})}),\"Using Ark Components\"]}),\"\\n\",o(t.p,{children:[\"This example demonstrates how to integrate the \",n(t.code,{children:\"Field\"}),\" and \",n(t.code,{children:\"Checkbox\"}),\" components. For more examples of using the \",n(t.code,{children:\"Field\"}),\"\\ncomponent with various Ark UI elements, refer to their respective documentation.\"]}),\"\\n\",n(r,{component:\"checkbox\",id:\"with-field\"}),\"\\n\",o(t.h3,{id:\"using-the-root-provider\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-the-root-provider\",children:n(t.span,{className:\"icon icon-link\"})}),\"Using the Root Provider\"]}),\"\\n\",o(t.p,{children:[\"The \",n(t.code,{children:\"RootProvider\"}),\" component provides a context for the field. It accepts the value of the \",n(t.code,{children:\"useField\"}),\" hook. You can\\nleverage it to access the component state and methods from outside the field.\"]}),\"\\n\",n(r,{id:\"root-provider\"}),\"\\n\",o(t.blockquote,{children:[\"\\n\",o(t.p,{children:[\"If you're using the \",n(t.code,{children:\"RootProvider\"}),\" component, you don't need to use the \",n(t.code,{children:\"Root\"}),\" component.\"]}),\"\\n\"]}),\"\\n\",o(t.h2,{id:\"api-reference\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#api-reference\",children:n(t.span,{className:\"icon icon-link\"})}),\"API Reference\"]}),\"\\n\",n(c,{id:\"field\"})]})}return{default:function(e={}){const{wrapper:o}=e.components||{};return o?n(o,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};function _missingMdxReference(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "<ComponentPreview id=\"Field\" />\n\n## Examples\n\nThe `Field` component provides contexts such as `invalid`, `disabled`, `required`, and `readOnly` for form elements.\nWhile most Ark UI components natively support these contexts, you can also use the `Field` component with standard HTML\nform elements.\n\n### Input\n\nThis example shows how to use the `Field` component with a standard input field.\n\n<Example id=\"input\" />\n\n### Textarea\n\nThis example illustrates how to use the `Field` component with a textarea element.\n\n<Example id=\"textarea\" />\n\n### Textarea Autoresize\n\nPass the `autoresize` prop to the `Textarea` component to enable automatic resizing as the user types.\n\n<Example id=\"textarea-autoresize\" />\n\n### Select\n\nThis example demonstrates how to integrate the `Field` component with a select dropdown.\n\n<Example id=\"select\" />\n\n### Using Ark Components\n\nThis example demonstrates how to integrate the `Field` and `Checkbox` components. For more examples of using the `Field`\ncomponent with various Ark UI elements, refer to their respective documentation.\n\n<Example component=\"checkbox\" id=\"with-field\" />\n\n### Using the Root Provider\n\nThe `RootProvider` component provides a context for the field. It accepts the value of the `useField` hook. You can\nleverage it to access the component state and methods from outside the field.\n\n<Example id=\"root-provider\" />\n\n> If you're using the `RootProvider` component, you don't need to use the `Root` component.\n\n## API Reference\n\n<ComponentTypes id=\"field\" />",
        "slug": "components/field",
        "category": "components"
    },
    {
        "id": "fieldset",
        "title": "Fieldset",
        "description": "A set of form controls optionally grouped under a common name.",
        "metadata": {
            "readingTime": 1,
            "wordCount": 150
        },
        "content": "<h2>Examples</h2>\n<p>The <code>Fieldset</code> component provides contexts such as <code>invalid</code> and <code>disabled</code> for form elements. While most Ark UI\ncomponents natively support these contexts, you can also use the <code>Field</code> component with standard HTML form elements.</p>\n<h3>Basic Usage</h3>\n<p>Learn how to use the <code>Fieldset</code> component in your project. Let's take a look at the most basic example:</p>\n<example id=\"basic\">\n<h3>Fieldset with Fields</h3>\n<p>This example demonstrates how to use the <code>Field</code> component with a standard input field within a <code>Fieldset</code>.</p>\n<example id=\"with-field\">\n<h3>Fieldset with other Form Elements</h3>\n<p>This example shows how to use the <code>Fieldset</code> component with other Ark UI form elements like <code>Checkbox</code>.</p>\n<example id=\"with-checkbox\">\n<h3>Using the Root Provider</h3>\n<p>The <code>RootProvider</code> component provides a context for the fieldset. It accepts the value of the <code>useFieldset</code> hook. You\ncan leverage it to access the component state and methods from outside the fieldset.</p>\n<example id=\"root-provider\">\n<blockquote>\n<p>If you're using the <code>RootProvider</code> component, you don't need to use the <code>Root</code> component.</p>\n</blockquote>\n<h2>API Reference</h2>\n<componenttypes id=\"fieldset\"></componenttypes></example></example></example></example>",
        "framework": "*",
        "toc": [
            {
                "title": "Examples",
                "url": "#examples",
                "items": [
                    {
                        "title": "Basic Usage",
                        "url": "#basic-usage",
                        "items": []
                    },
                    {
                        "title": "Fieldset with Fields",
                        "url": "#fieldset-with-fields",
                        "items": []
                    },
                    {
                        "title": "Fieldset with other Form Elements",
                        "url": "#fieldset-with-other-form-elements",
                        "items": []
                    },
                    {
                        "title": "Using the Root Provider",
                        "url": "#using-the-root-provider",
                        "items": []
                    }
                ]
            },
            {
                "title": "API Reference",
                "url": "#api-reference",
                "items": []
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:o}=arguments[0];function _createMdxContent(i){const t={a:\"a\",blockquote:\"blockquote\",code:\"code\",h2:\"h2\",h3:\"h3\",p:\"p\",span:\"span\",...i.components},{ComponentTypes:c,Example:s}=t;return c||_missingMdxReference(\"ComponentTypes\",!0),s||_missingMdxReference(\"Example\",!0),o(e,{children:[o(t.h2,{id:\"examples\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#examples\",children:n(t.span,{className:\"icon icon-link\"})}),\"Examples\"]}),\"\\n\",o(t.p,{children:[\"The \",n(t.code,{children:\"Fieldset\"}),\" component provides contexts such as \",n(t.code,{children:\"invalid\"}),\" and \",n(t.code,{children:\"disabled\"}),\" for form elements. While most Ark UI\\ncomponents natively support these contexts, you can also use the \",n(t.code,{children:\"Field\"}),\" component with standard HTML form elements.\"]}),\"\\n\",o(t.h3,{id:\"basic-usage\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#basic-usage\",children:n(t.span,{className:\"icon icon-link\"})}),\"Basic Usage\"]}),\"\\n\",o(t.p,{children:[\"Learn how to use the \",n(t.code,{children:\"Fieldset\"}),\" component in your project. Let's take a look at the most basic example:\"]}),\"\\n\",n(s,{id:\"basic\"}),\"\\n\",o(t.h3,{id:\"fieldset-with-fields\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#fieldset-with-fields\",children:n(t.span,{className:\"icon icon-link\"})}),\"Fieldset with Fields\"]}),\"\\n\",o(t.p,{children:[\"This example demonstrates how to use the \",n(t.code,{children:\"Field\"}),\" component with a standard input field within a \",n(t.code,{children:\"Fieldset\"}),\".\"]}),\"\\n\",n(s,{id:\"with-field\"}),\"\\n\",o(t.h3,{id:\"fieldset-with-other-form-elements\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#fieldset-with-other-form-elements\",children:n(t.span,{className:\"icon icon-link\"})}),\"Fieldset with other Form Elements\"]}),\"\\n\",o(t.p,{children:[\"This example shows how to use the \",n(t.code,{children:\"Fieldset\"}),\" component with other Ark UI form elements like \",n(t.code,{children:\"Checkbox\"}),\".\"]}),\"\\n\",n(s,{id:\"with-checkbox\"}),\"\\n\",o(t.h3,{id:\"using-the-root-provider\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-the-root-provider\",children:n(t.span,{className:\"icon icon-link\"})}),\"Using the Root Provider\"]}),\"\\n\",o(t.p,{children:[\"The \",n(t.code,{children:\"RootProvider\"}),\" component provides a context for the fieldset. It accepts the value of the \",n(t.code,{children:\"useFieldset\"}),\" hook. You\\ncan leverage it to access the component state and methods from outside the fieldset.\"]}),\"\\n\",n(s,{id:\"root-provider\"}),\"\\n\",o(t.blockquote,{children:[\"\\n\",o(t.p,{children:[\"If you're using the \",n(t.code,{children:\"RootProvider\"}),\" component, you don't need to use the \",n(t.code,{children:\"Root\"}),\" component.\"]}),\"\\n\"]}),\"\\n\",o(t.h2,{id:\"api-reference\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#api-reference\",children:n(t.span,{className:\"icon icon-link\"})}),\"API Reference\"]}),\"\\n\",n(c,{id:\"fieldset\"})]})}return{default:function(e={}){const{wrapper:o}=e.components||{};return o?n(o,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};function _missingMdxReference(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "## Examples\n\nThe `Fieldset` component provides contexts such as `invalid` and `disabled` for form elements. While most Ark UI\ncomponents natively support these contexts, you can also use the `Field` component with standard HTML form elements.\n\n### Basic Usage\n\nLearn how to use the `Fieldset` component in your project. Let's take a look at the most basic example:\n\n<Example id=\"basic\" />\n\n### Fieldset with Fields\n\nThis example demonstrates how to use the `Field` component with a standard input field within a `Fieldset`.\n\n<Example id=\"with-field\" />\n\n### Fieldset with other Form Elements\n\nThis example shows how to use the `Fieldset` component with other Ark UI form elements like `Checkbox`.\n\n<Example id=\"with-checkbox\" />\n\n### Using the Root Provider\n\nThe `RootProvider` component provides a context for the fieldset. It accepts the value of the `useFieldset` hook. You\ncan leverage it to access the component state and methods from outside the fieldset.\n\n<Example id=\"root-provider\" />\n\n> If you're using the `RootProvider` component, you don't need to use the `Root` component.\n\n## API Reference\n\n<ComponentTypes id=\"fieldset\" />",
        "slug": "components/fieldset",
        "category": "components"
    },
    {
        "id": "file-upload",
        "title": "File Upload",
        "description": "A component that is used to upload multiple files.",
        "metadata": {
            "readingTime": 1,
            "wordCount": 143
        },
        "content": "<componentpreview id=\"FileUpload\">\n<h2>Anatomy</h2>\n<p>To set up the file upload component correctly, you'll need to understand its anatomy and how we name its parts.</p>\n<blockquote>\n<p>Each part includes a <code>data-part</code> attribute to help identify them in the DOM.</p>\n</blockquote>\n<anatomy id=\"file-upload\">\n<h2>Examples</h2>\n<p>Learn how to use the <code>FileUpload</code> component in your project. Let's take a look at the most basic example:</p>\n<example id=\"basic\">\n<h3>Using the Field Component</h3>\n<p>The <code>Field</code> component helps manage form-related state and accessibility attributes of an file upload. It includes\nhandling ARIA labels, helper text, and error text to ensure proper accessibility.</p>\n<example id=\"with-field\">\n<h3>Using the Root Provider</h3>\n<p>The <code>RootProvider</code> component provides a context for the file-upload. It accepts the value of the <code>useFile-upload</code> hook.\nYou can leverage it to access the component state and methods from outside the file-upload.</p>\n<example id=\"root-provider\">\n<blockquote>\n<p>If you're using the <code>RootProvider</code> component, you don't need to use the <code>Root</code> component.</p>\n</blockquote>\n<h2>API Reference</h2>\n<componenttypes id=\"file-upload\"></componenttypes></example></example></example></anatomy></componentpreview>",
        "framework": "*",
        "toc": [
            {
                "title": "Anatomy",
                "url": "#anatomy",
                "items": []
            },
            {
                "title": "Examples",
                "url": "#examples",
                "items": [
                    {
                        "title": "Using the Field Component",
                        "url": "#using-the-field-component",
                        "items": []
                    },
                    {
                        "title": "Using the Root Provider",
                        "url": "#using-the-root-provider",
                        "items": []
                    }
                ]
            },
            {
                "title": "API Reference",
                "url": "#api-reference",
                "items": []
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:o}=arguments[0];function _createMdxContent(i){const t={a:\"a\",blockquote:\"blockquote\",code:\"code\",h2:\"h2\",h3:\"h3\",p:\"p\",span:\"span\",...i.components},{Anatomy:a,ComponentPreview:c,ComponentTypes:r,Example:l}=t;return a||_missingMdxReference(\"Anatomy\",!0),c||_missingMdxReference(\"ComponentPreview\",!0),r||_missingMdxReference(\"ComponentTypes\",!0),l||_missingMdxReference(\"Example\",!0),o(e,{children:[n(c,{id:\"FileUpload\"}),\"\\n\",o(t.h2,{id:\"anatomy\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#anatomy\",children:n(t.span,{className:\"icon icon-link\"})}),\"Anatomy\"]}),\"\\n\",n(t.p,{children:\"To set up the file upload component correctly, you'll need to understand its anatomy and how we name its parts.\"}),\"\\n\",o(t.blockquote,{children:[\"\\n\",o(t.p,{children:[\"Each part includes a \",n(t.code,{children:\"data-part\"}),\" attribute to help identify them in the DOM.\"]}),\"\\n\"]}),\"\\n\",n(a,{id:\"file-upload\"}),\"\\n\",o(t.h2,{id:\"examples\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#examples\",children:n(t.span,{className:\"icon icon-link\"})}),\"Examples\"]}),\"\\n\",o(t.p,{children:[\"Learn how to use the \",n(t.code,{children:\"FileUpload\"}),\" component in your project. Let's take a look at the most basic example:\"]}),\"\\n\",n(l,{id:\"basic\"}),\"\\n\",o(t.h3,{id:\"using-the-field-component\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-the-field-component\",children:n(t.span,{className:\"icon icon-link\"})}),\"Using the Field Component\"]}),\"\\n\",o(t.p,{children:[\"The \",n(t.code,{children:\"Field\"}),\" component helps manage form-related state and accessibility attributes of an file upload. It includes\\nhandling ARIA labels, helper text, and error text to ensure proper accessibility.\"]}),\"\\n\",n(l,{id:\"with-field\"}),\"\\n\",o(t.h3,{id:\"using-the-root-provider\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-the-root-provider\",children:n(t.span,{className:\"icon icon-link\"})}),\"Using the Root Provider\"]}),\"\\n\",o(t.p,{children:[\"The \",n(t.code,{children:\"RootProvider\"}),\" component provides a context for the file-upload. It accepts the value of the \",n(t.code,{children:\"useFile-upload\"}),\" hook.\\nYou can leverage it to access the component state and methods from outside the file-upload.\"]}),\"\\n\",n(l,{id:\"root-provider\"}),\"\\n\",o(t.blockquote,{children:[\"\\n\",o(t.p,{children:[\"If you're using the \",n(t.code,{children:\"RootProvider\"}),\" component, you don't need to use the \",n(t.code,{children:\"Root\"}),\" component.\"]}),\"\\n\"]}),\"\\n\",o(t.h2,{id:\"api-reference\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#api-reference\",children:n(t.span,{className:\"icon icon-link\"})}),\"API Reference\"]}),\"\\n\",n(r,{id:\"file-upload\"})]})}return{default:function(e={}){const{wrapper:o}=e.components||{};return o?n(o,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};function _missingMdxReference(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "<ComponentPreview id=\"FileUpload\" />\n\n## Anatomy\n\nTo set up the file upload component correctly, you'll need to understand its anatomy and how we name its parts.\n\n> Each part includes a `data-part` attribute to help identify them in the DOM.\n\n<Anatomy id=\"file-upload\" />\n\n## Examples\n\nLearn how to use the `FileUpload` component in your project. Let's take a look at the most basic example:\n\n<Example id=\"basic\" />\n\n### Using the Field Component\n\nThe `Field` component helps manage form-related state and accessibility attributes of an file upload. It includes\nhandling ARIA labels, helper text, and error text to ensure proper accessibility.\n\n<Example id=\"with-field\" />\n\n### Using the Root Provider\n\nThe `RootProvider` component provides a context for the file-upload. It accepts the value of the `useFile-upload` hook.\nYou can leverage it to access the component state and methods from outside the file-upload.\n\n<Example id=\"root-provider\" />\n\n> If you're using the `RootProvider` component, you don't need to use the `Root` component.\n\n## API Reference\n\n<ComponentTypes id=\"file-upload\" />",
        "slug": "components/file-upload",
        "category": "components"
    },
    {
        "id": "floating-panel",
        "title": "Floating Panel",
        "description": "Used to display content in a non-modal floating window.",
        "metadata": {
            "readingTime": 1,
            "wordCount": 192
        },
        "content": "<componentpreview id=\"FloatingPanel\">\n<h2>Anatomy</h2>\n<p>To set up the editable correctly, you'll need to understand its anatomy and how we name its parts.</p>\n<blockquote>\n<p>Each part includes a <code>data-part</code> attribute to help identify them in the DOM.</p>\n</blockquote>\n<anatomy id=\"floating-panel\">\n<h2>Examples</h2>\n<p>Learn how to use the <code>FloatingPanel</code> component in your project. Let's take a look at the most basic example:</p>\n<example id=\"basic\">\n<h3>Controlling the size</h3>\n<p>To control the size of the floating panel programmatically, you can pass the <code>size</code> <code>onResize</code> prop to the machine.</p>\n<example id=\"controlled-size\">\n<h3>Controlling the position</h3>\n<p>To control the position of the floating panel programmatically, you can pass the <code>position</code> and <code>onPositionChange</code> prop\nto the machine.</p>\n<example id=\"controlled-position\">\n<h3>Anchor position</h3>\n<p>Use the <code>getAnchorPosition</code> function to compute the initial position of the floating panel. This function is called when\nthe panel is opened and receives the <code>triggerRect</code> and <code>boundaryRect</code>.</p>\n<example id=\"anchor-position\">\n<h3>Controlling the open state</h3>\n<p>To control the open state of the floating panel programmatically, you can pass the <code>open</code> and <code>onOpenChange</code> prop to the\nmachine.</p>\n<example id=\"controlled-open\">\n<h3>Lazy mounting</h3>\n<p>To lazy mount the floating panel, you can pass the <code>lazyMount</code> prop to the machine.</p>\n<example id=\"lazy-mount\">\n<h3>Context</h3>\n<p>To access the context of the floating panel, you can use the <code>useFloatingPanelContext</code> hook or the\n<code>FloatingPanel.Context</code> component.</p>\n<example id=\"render-fn\">\n<h2>API Reference</h2>\n<componenttypes id=\"floating-panel\"></componenttypes></example></example></example></example></example></example></example></anatomy></componentpreview>",
        "framework": "*",
        "status": "new",
        "toc": [
            {
                "title": "Anatomy",
                "url": "#anatomy",
                "items": []
            },
            {
                "title": "Examples",
                "url": "#examples",
                "items": [
                    {
                        "title": "Controlling the size",
                        "url": "#controlling-the-size",
                        "items": []
                    },
                    {
                        "title": "Controlling the position",
                        "url": "#controlling-the-position",
                        "items": []
                    },
                    {
                        "title": "Anchor position",
                        "url": "#anchor-position",
                        "items": []
                    },
                    {
                        "title": "Controlling the open state",
                        "url": "#controlling-the-open-state",
                        "items": []
                    },
                    {
                        "title": "Lazy mounting",
                        "url": "#lazy-mounting",
                        "items": []
                    },
                    {
                        "title": "Context",
                        "url": "#context",
                        "items": []
                    }
                ]
            },
            {
                "title": "API Reference",
                "url": "#api-reference",
                "items": []
            }
        ],
        "code": "const{Fragment:n,jsx:e,jsxs:o}=arguments[0];function _createMdxContent(i){const a={a:\"a\",blockquote:\"blockquote\",code:\"code\",h2:\"h2\",h3:\"h3\",p:\"p\",span:\"span\",...i.components},{Anatomy:t,ComponentPreview:c,ComponentTypes:l,Example:r}=a;return t||_missingMdxReference(\"Anatomy\",!0),c||_missingMdxReference(\"ComponentPreview\",!0),l||_missingMdxReference(\"ComponentTypes\",!0),r||_missingMdxReference(\"Example\",!0),o(n,{children:[e(c,{id:\"FloatingPanel\"}),\"\\n\",o(a.h2,{id:\"anatomy\",children:[e(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#anatomy\",children:e(a.span,{className:\"icon icon-link\"})}),\"Anatomy\"]}),\"\\n\",e(a.p,{children:\"To set up the editable correctly, you'll need to understand its anatomy and how we name its parts.\"}),\"\\n\",o(a.blockquote,{children:[\"\\n\",o(a.p,{children:[\"Each part includes a \",e(a.code,{children:\"data-part\"}),\" attribute to help identify them in the DOM.\"]}),\"\\n\"]}),\"\\n\",e(t,{id:\"floating-panel\"}),\"\\n\",o(a.h2,{id:\"examples\",children:[e(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#examples\",children:e(a.span,{className:\"icon icon-link\"})}),\"Examples\"]}),\"\\n\",o(a.p,{children:[\"Learn how to use the \",e(a.code,{children:\"FloatingPanel\"}),\" component in your project. Let's take a look at the most basic example:\"]}),\"\\n\",e(r,{id:\"basic\"}),\"\\n\",o(a.h3,{id:\"controlling-the-size\",children:[e(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#controlling-the-size\",children:e(a.span,{className:\"icon icon-link\"})}),\"Controlling the size\"]}),\"\\n\",o(a.p,{children:[\"To control the size of the floating panel programmatically, you can pass the \",e(a.code,{children:\"size\"}),\" \",e(a.code,{children:\"onResize\"}),\" prop to the machine.\"]}),\"\\n\",e(r,{id:\"controlled-size\"}),\"\\n\",o(a.h3,{id:\"controlling-the-position\",children:[e(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#controlling-the-position\",children:e(a.span,{className:\"icon icon-link\"})}),\"Controlling the position\"]}),\"\\n\",o(a.p,{children:[\"To control the position of the floating panel programmatically, you can pass the \",e(a.code,{children:\"position\"}),\" and \",e(a.code,{children:\"onPositionChange\"}),\" prop\\nto the machine.\"]}),\"\\n\",e(r,{id:\"controlled-position\"}),\"\\n\",o(a.h3,{id:\"anchor-position\",children:[e(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#anchor-position\",children:e(a.span,{className:\"icon icon-link\"})}),\"Anchor position\"]}),\"\\n\",o(a.p,{children:[\"Use the \",e(a.code,{children:\"getAnchorPosition\"}),\" function to compute the initial position of the floating panel. This function is called when\\nthe panel is opened and receives the \",e(a.code,{children:\"triggerRect\"}),\" and \",e(a.code,{children:\"boundaryRect\"}),\".\"]}),\"\\n\",e(r,{id:\"anchor-position\"}),\"\\n\",o(a.h3,{id:\"controlling-the-open-state\",children:[e(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#controlling-the-open-state\",children:e(a.span,{className:\"icon icon-link\"})}),\"Controlling the open state\"]}),\"\\n\",o(a.p,{children:[\"To control the open state of the floating panel programmatically, you can pass the \",e(a.code,{children:\"open\"}),\" and \",e(a.code,{children:\"onOpenChange\"}),\" prop to the\\nmachine.\"]}),\"\\n\",e(r,{id:\"controlled-open\"}),\"\\n\",o(a.h3,{id:\"lazy-mounting\",children:[e(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#lazy-mounting\",children:e(a.span,{className:\"icon icon-link\"})}),\"Lazy mounting\"]}),\"\\n\",o(a.p,{children:[\"To lazy mount the floating panel, you can pass the \",e(a.code,{children:\"lazyMount\"}),\" prop to the machine.\"]}),\"\\n\",e(r,{id:\"lazy-mount\"}),\"\\n\",o(a.h3,{id:\"context\",children:[e(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#context\",children:e(a.span,{className:\"icon icon-link\"})}),\"Context\"]}),\"\\n\",o(a.p,{children:[\"To access the context of the floating panel, you can use the \",e(a.code,{children:\"useFloatingPanelContext\"}),\" hook or the\\n\",e(a.code,{children:\"FloatingPanel.Context\"}),\" component.\"]}),\"\\n\",e(r,{id:\"render-fn\"}),\"\\n\",o(a.h2,{id:\"api-reference\",children:[e(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#api-reference\",children:e(a.span,{className:\"icon icon-link\"})}),\"API Reference\"]}),\"\\n\",e(l,{id:\"floating-panel\"})]})}return{default:function(n={}){const{wrapper:o}=n.components||{};return o?e(o,{...n,children:e(_createMdxContent,{...n})}):_createMdxContent(n)}};function _missingMdxReference(n,e){throw new Error(\"Expected \"+(e?\"component\":\"object\")+\" `\"+n+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "<ComponentPreview id=\"FloatingPanel\" />\n\n## Anatomy\n\nTo set up the editable correctly, you'll need to understand its anatomy and how we name its parts.\n\n> Each part includes a `data-part` attribute to help identify them in the DOM.\n\n<Anatomy id=\"floating-panel\" />\n\n## Examples\n\nLearn how to use the `FloatingPanel` component in your project. Let's take a look at the most basic example:\n\n<Example id=\"basic\" />\n\n### Controlling the size\n\nTo control the size of the floating panel programmatically, you can pass the `size` `onResize` prop to the machine.\n\n<Example id=\"controlled-size\" />\n\n### Controlling the position\n\nTo control the position of the floating panel programmatically, you can pass the `position` and `onPositionChange` prop\nto the machine.\n\n<Example id=\"controlled-position\" />\n\n### Anchor position\n\nUse the `getAnchorPosition` function to compute the initial position of the floating panel. This function is called when\nthe panel is opened and receives the `triggerRect` and `boundaryRect`.\n\n<Example id=\"anchor-position\" />\n\n### Controlling the open state\n\nTo control the open state of the floating panel programmatically, you can pass the `open` and `onOpenChange` prop to the\nmachine.\n\n<Example id=\"controlled-open\" />\n\n### Lazy mounting\n\nTo lazy mount the floating panel, you can pass the `lazyMount` prop to the machine.\n\n<Example id=\"lazy-mount\" />\n\n### Context\n\nTo access the context of the floating panel, you can use the `useFloatingPanelContext` hook or the\n`FloatingPanel.Context` component.\n\n<Example id=\"render-fn\" />\n\n## API Reference\n\n<ComponentTypes id=\"floating-panel\" />",
        "slug": "components/floating-panel",
        "category": "components"
    },
    {
        "id": "hover-card",
        "title": "Hover Card",
        "description": "A card that appears when a user hovers over an element.",
        "metadata": {
            "readingTime": 1,
            "wordCount": 188
        },
        "content": "<componentpreview id=\"HoverCard\">\n<h2>Anatomy</h2>\n<p>To set up the hover card correctly, you'll need to understand its anatomy and how we name its parts.</p>\n<blockquote>\n<p>Each part includes a <code>data-part</code> attribute to help identify them in the DOM.</p>\n</blockquote>\n<anatomy id=\"hover-card\">\n<h2>Examples</h2>\n<p>Learn how to use the <code>HoverCard</code> component in your project. Let's take a look at the most basic example:</p>\n<example id=\"basic\">\n<h3>Controlled HoverCard</h3>\n<p>The controlled <code>HoverCard</code> component provides an interface for managing the state of the hover card using the <code>open</code> and\n<code>onOpenChange</code> props:</p>\n<example id=\"controlled\">\n<h3>Custom Positioning</h3>\n<p>The <code>HoverCard</code> component can be customized in its placement and distance from the trigger element through the\n<code>positioning</code> prop:</p>\n<example id=\"positioning\">\n<h3>Render Prop Usage</h3>\n<p>The <code>HoverCard</code> component can also accept a render prop, giving the user more control over rendering behavior. This is\nuseful for dynamically updating the trigger based on the state of the <code>HoverCard</code>:</p>\n<example id=\"render-prop\">\n<h3>Using the Root Provider</h3>\n<p>The <code>RootProvider</code> component provides a context for the hover-card. It accepts the value of the <code>useHover-card</code> hook.\nYou can leverage it to access the component state and methods from outside the hover-card.</p>\n<example id=\"root-provider\">\n<blockquote>\n<p>If you're using the <code>RootProvider</code> component, you don't need to use the <code>Root</code> component.</p>\n</blockquote>\n<h2>API Reference</h2>\n<componenttypes id=\"hover-card\"></componenttypes></example></example></example></example></example></anatomy></componentpreview>",
        "framework": "*",
        "toc": [
            {
                "title": "Anatomy",
                "url": "#anatomy",
                "items": []
            },
            {
                "title": "Examples",
                "url": "#examples",
                "items": [
                    {
                        "title": "Controlled HoverCard",
                        "url": "#controlled-hovercard",
                        "items": []
                    },
                    {
                        "title": "Custom Positioning",
                        "url": "#custom-positioning",
                        "items": []
                    },
                    {
                        "title": "Render Prop Usage",
                        "url": "#render-prop-usage",
                        "items": []
                    },
                    {
                        "title": "Using the Root Provider",
                        "url": "#using-the-root-provider",
                        "items": []
                    }
                ]
            },
            {
                "title": "API Reference",
                "url": "#api-reference",
                "items": []
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:o}=arguments[0];function _createMdxContent(r){const i={a:\"a\",blockquote:\"blockquote\",code:\"code\",h2:\"h2\",h3:\"h3\",p:\"p\",span:\"span\",...r.components},{Anatomy:a,ComponentPreview:c,ComponentTypes:t,Example:d}=i;return a||_missingMdxReference(\"Anatomy\",!0),c||_missingMdxReference(\"ComponentPreview\",!0),t||_missingMdxReference(\"ComponentTypes\",!0),d||_missingMdxReference(\"Example\",!0),o(e,{children:[n(c,{id:\"HoverCard\"}),\"\\n\",o(i.h2,{id:\"anatomy\",children:[n(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#anatomy\",children:n(i.span,{className:\"icon icon-link\"})}),\"Anatomy\"]}),\"\\n\",n(i.p,{children:\"To set up the hover card correctly, you'll need to understand its anatomy and how we name its parts.\"}),\"\\n\",o(i.blockquote,{children:[\"\\n\",o(i.p,{children:[\"Each part includes a \",n(i.code,{children:\"data-part\"}),\" attribute to help identify them in the DOM.\"]}),\"\\n\"]}),\"\\n\",n(a,{id:\"hover-card\"}),\"\\n\",o(i.h2,{id:\"examples\",children:[n(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#examples\",children:n(i.span,{className:\"icon icon-link\"})}),\"Examples\"]}),\"\\n\",o(i.p,{children:[\"Learn how to use the \",n(i.code,{children:\"HoverCard\"}),\" component in your project. Let's take a look at the most basic example:\"]}),\"\\n\",n(d,{id:\"basic\"}),\"\\n\",o(i.h3,{id:\"controlled-hovercard\",children:[n(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#controlled-hovercard\",children:n(i.span,{className:\"icon icon-link\"})}),\"Controlled HoverCard\"]}),\"\\n\",o(i.p,{children:[\"The controlled \",n(i.code,{children:\"HoverCard\"}),\" component provides an interface for managing the state of the hover card using the \",n(i.code,{children:\"open\"}),\" and\\n\",n(i.code,{children:\"onOpenChange\"}),\" props:\"]}),\"\\n\",n(d,{id:\"controlled\"}),\"\\n\",o(i.h3,{id:\"custom-positioning\",children:[n(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#custom-positioning\",children:n(i.span,{className:\"icon icon-link\"})}),\"Custom Positioning\"]}),\"\\n\",o(i.p,{children:[\"The \",n(i.code,{children:\"HoverCard\"}),\" component can be customized in its placement and distance from the trigger element through the\\n\",n(i.code,{children:\"positioning\"}),\" prop:\"]}),\"\\n\",n(d,{id:\"positioning\"}),\"\\n\",o(i.h3,{id:\"render-prop-usage\",children:[n(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#render-prop-usage\",children:n(i.span,{className:\"icon icon-link\"})}),\"Render Prop Usage\"]}),\"\\n\",o(i.p,{children:[\"The \",n(i.code,{children:\"HoverCard\"}),\" component can also accept a render prop, giving the user more control over rendering behavior. This is\\nuseful for dynamically updating the trigger based on the state of the \",n(i.code,{children:\"HoverCard\"}),\":\"]}),\"\\n\",n(d,{id:\"render-prop\"}),\"\\n\",o(i.h3,{id:\"using-the-root-provider\",children:[n(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-the-root-provider\",children:n(i.span,{className:\"icon icon-link\"})}),\"Using the Root Provider\"]}),\"\\n\",o(i.p,{children:[\"The \",n(i.code,{children:\"RootProvider\"}),\" component provides a context for the hover-card. It accepts the value of the \",n(i.code,{children:\"useHover-card\"}),\" hook.\\nYou can leverage it to access the component state and methods from outside the hover-card.\"]}),\"\\n\",n(d,{id:\"root-provider\"}),\"\\n\",o(i.blockquote,{children:[\"\\n\",o(i.p,{children:[\"If you're using the \",n(i.code,{children:\"RootProvider\"}),\" component, you don't need to use the \",n(i.code,{children:\"Root\"}),\" component.\"]}),\"\\n\"]}),\"\\n\",o(i.h2,{id:\"api-reference\",children:[n(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#api-reference\",children:n(i.span,{className:\"icon icon-link\"})}),\"API Reference\"]}),\"\\n\",n(t,{id:\"hover-card\"})]})}return{default:function(e={}){const{wrapper:o}=e.components||{};return o?n(o,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};function _missingMdxReference(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "<ComponentPreview id=\"HoverCard\" />\n\n## Anatomy\n\nTo set up the hover card correctly, you'll need to understand its anatomy and how we name its parts.\n\n> Each part includes a `data-part` attribute to help identify them in the DOM.\n\n<Anatomy id=\"hover-card\" />\n\n## Examples\n\nLearn how to use the `HoverCard` component in your project. Let's take a look at the most basic example:\n\n<Example id=\"basic\" />\n\n### Controlled HoverCard\n\nThe controlled `HoverCard` component provides an interface for managing the state of the hover card using the `open` and\n`onOpenChange` props:\n\n<Example id=\"controlled\" />\n\n### Custom Positioning\n\nThe `HoverCard` component can be customized in its placement and distance from the trigger element through the\n`positioning` prop:\n\n<Example id=\"positioning\" />\n\n### Render Prop Usage\n\nThe `HoverCard` component can also accept a render prop, giving the user more control over rendering behavior. This is\nuseful for dynamically updating the trigger based on the state of the `HoverCard`:\n\n<Example id=\"render-prop\" />\n\n### Using the Root Provider\n\nThe `RootProvider` component provides a context for the hover-card. It accepts the value of the `useHover-card` hook.\nYou can leverage it to access the component state and methods from outside the hover-card.\n\n<Example id=\"root-provider\" />\n\n> If you're using the `RootProvider` component, you don't need to use the `Root` component.\n\n## API Reference\n\n<ComponentTypes id=\"hover-card\" />",
        "slug": "components/hover-card",
        "category": "components"
    },
    {
        "id": "listbox",
        "title": "Listbox",
        "description": "A component for selecting a single or multiple items from a list.",
        "metadata": {
            "readingTime": 1,
            "wordCount": 141
        },
        "content": "<componentpreview id=\"Listbox\">\n<h2>Anatomy</h2>\n<p>To set up the Listbox correctly, you'll need to understand its anatomy and how we name its parts.</p>\n<blockquote>\n<p>Each part includes a <code>data-part</code> attribute to help identify them in the DOM.</p>\n</blockquote>\n<p>{/* <anatomy id=\"listbox\"> */}</anatomy></p>\n<h2>Examples</h2>\n<h3>Basic</h3>\n<p>Here's a basic example of the Listbox component.</p>\n<example id=\"basic\">\n<h3>Controlled</h3>\n<p>The Listbox component can be controlled by using the <code>value</code> and <code>onValueChange</code> props. This allows you to manage the\nselected value externally.</p>\n<example id=\"controlled\">\n<h3>Disabled Item</h3>\n<p>Listbox items can be disabled using the <code>disabled</code> prop on the collection item.</p>\n<example id=\"disabled\">\n<blockquote>\n<p>You can also use the <code>isItemDisabled</code> within the <code>createListCollection</code> to disable items based on a condition.</p>\n</blockquote>\n<h3>Multiple Selection</h3>\n<p>You can set the <code>selectionMode</code> property as <code>multiple</code> to allow the user to select multiple items at a time.</p>\n<example id=\"multiple\">\n<h3>Grouping</h3>\n<p>The Listbox component supports grouping items. You can use the <code>groupBy</code> function to group items based on a specific\nproperty.</p>\n<example id=\"group\">\n<h2>API Reference</h2>\n<componenttypes id=\"listbox\"></componenttypes></example></example></example></example></example></componentpreview>",
        "framework": "*",
        "status": "new",
        "toc": [
            {
                "title": "Anatomy",
                "url": "#anatomy",
                "items": []
            },
            {
                "title": "Examples",
                "url": "#examples",
                "items": [
                    {
                        "title": "Basic",
                        "url": "#basic",
                        "items": []
                    },
                    {
                        "title": "Controlled",
                        "url": "#controlled",
                        "items": []
                    },
                    {
                        "title": "Disabled Item",
                        "url": "#disabled-item",
                        "items": []
                    },
                    {
                        "title": "Multiple Selection",
                        "url": "#multiple-selection",
                        "items": []
                    },
                    {
                        "title": "Grouping",
                        "url": "#grouping",
                        "items": []
                    }
                ]
            },
            {
                "title": "API Reference",
                "url": "#api-reference",
                "items": []
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:i}=arguments[0];function _createMdxContent(o){const a={a:\"a\",blockquote:\"blockquote\",code:\"code\",h2:\"h2\",h3:\"h3\",p:\"p\",span:\"span\",...o.components},{ComponentPreview:c,ComponentTypes:l,Example:t}=a;return c||_missingMdxReference(\"ComponentPreview\",!0),l||_missingMdxReference(\"ComponentTypes\",!0),t||_missingMdxReference(\"Example\",!0),i(e,{children:[n(c,{id:\"Listbox\"}),\"\\n\",i(a.h2,{id:\"anatomy\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#anatomy\",children:n(a.span,{className:\"icon icon-link\"})}),\"Anatomy\"]}),\"\\n\",n(a.p,{children:\"To set up the Listbox correctly, you'll need to understand its anatomy and how we name its parts.\"}),\"\\n\",i(a.blockquote,{children:[\"\\n\",i(a.p,{children:[\"Each part includes a \",n(a.code,{children:\"data-part\"}),\" attribute to help identify them in the DOM.\"]}),\"\\n\"]}),\"\\n\",i(a.h2,{id:\"examples\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#examples\",children:n(a.span,{className:\"icon icon-link\"})}),\"Examples\"]}),\"\\n\",i(a.h3,{id:\"basic\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#basic\",children:n(a.span,{className:\"icon icon-link\"})}),\"Basic\"]}),\"\\n\",n(a.p,{children:\"Here's a basic example of the Listbox component.\"}),\"\\n\",n(t,{id:\"basic\"}),\"\\n\",i(a.h3,{id:\"controlled\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#controlled\",children:n(a.span,{className:\"icon icon-link\"})}),\"Controlled\"]}),\"\\n\",i(a.p,{children:[\"The Listbox component can be controlled by using the \",n(a.code,{children:\"value\"}),\" and \",n(a.code,{children:\"onValueChange\"}),\" props. This allows you to manage the\\nselected value externally.\"]}),\"\\n\",n(t,{id:\"controlled\"}),\"\\n\",i(a.h3,{id:\"disabled-item\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#disabled-item\",children:n(a.span,{className:\"icon icon-link\"})}),\"Disabled Item\"]}),\"\\n\",i(a.p,{children:[\"Listbox items can be disabled using the \",n(a.code,{children:\"disabled\"}),\" prop on the collection item.\"]}),\"\\n\",n(t,{id:\"disabled\"}),\"\\n\",i(a.blockquote,{children:[\"\\n\",i(a.p,{children:[\"You can also use the \",n(a.code,{children:\"isItemDisabled\"}),\" within the \",n(a.code,{children:\"createListCollection\"}),\" to disable items based on a condition.\"]}),\"\\n\"]}),\"\\n\",i(a.h3,{id:\"multiple-selection\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#multiple-selection\",children:n(a.span,{className:\"icon icon-link\"})}),\"Multiple Selection\"]}),\"\\n\",i(a.p,{children:[\"You can set the \",n(a.code,{children:\"selectionMode\"}),\" property as \",n(a.code,{children:\"multiple\"}),\" to allow the user to select multiple items at a time.\"]}),\"\\n\",n(t,{id:\"multiple\"}),\"\\n\",i(a.h3,{id:\"grouping\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#grouping\",children:n(a.span,{className:\"icon icon-link\"})}),\"Grouping\"]}),\"\\n\",i(a.p,{children:[\"The Listbox component supports grouping items. You can use the \",n(a.code,{children:\"groupBy\"}),\" function to group items based on a specific\\nproperty.\"]}),\"\\n\",n(t,{id:\"group\"}),\"\\n\",i(a.h2,{id:\"api-reference\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#api-reference\",children:n(a.span,{className:\"icon icon-link\"})}),\"API Reference\"]}),\"\\n\",n(l,{id:\"listbox\"})]})}return{default:function(e={}){const{wrapper:i}=e.components||{};return i?n(i,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};function _missingMdxReference(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "<ComponentPreview id=\"Listbox\" />\n\n## Anatomy\n\nTo set up the Listbox correctly, you'll need to understand its anatomy and how we name its parts.\n\n> Each part includes a `data-part` attribute to help identify them in the DOM.\n\n{/* <Anatomy id=\"listbox\" /> */}\n\n## Examples\n\n### Basic\n\nHere's a basic example of the Listbox component.\n\n<Example id=\"basic\" />\n\n### Controlled\n\nThe Listbox component can be controlled by using the `value` and `onValueChange` props. This allows you to manage the\nselected value externally.\n\n<Example id=\"controlled\" />\n\n### Disabled Item\n\nListbox items can be disabled using the `disabled` prop on the collection item.\n\n<Example id=\"disabled\" />\n\n> You can also use the `isItemDisabled` within the `createListCollection` to disable items based on a condition.\n\n### Multiple Selection\n\nYou can set the `selectionMode` property as `multiple` to allow the user to select multiple items at a time.\n\n<Example id=\"multiple\" />\n\n### Grouping\n\nThe Listbox component supports grouping items. You can use the `groupBy` function to group items based on a specific\nproperty.\n\n<Example id=\"group\" />\n\n## API Reference\n\n<ComponentTypes id=\"listbox\" />",
        "slug": "components/listbox",
        "category": "components"
    },
    {
        "id": "menu",
        "title": "Menu",
        "description": "A list of options that appears when a user interacts with a button.",
        "metadata": {
            "readingTime": 1,
            "wordCount": 291
        },
        "content": "<componentpreview id=\"Menu\">\n<h2>Anatomy</h2>\n<p>To set up the menu correctly, you'll need to understand its anatomy and how we name its parts.</p>\n<blockquote>\n<p>Each part includes a <code>data-part</code> attribute to help identify them in the DOM.</p>\n</blockquote>\n<anatomy id=\"menu\">\n<h2>Examples</h2>\n<p>Learn how to use the <code>Menu</code> component in your project. Let's take a look at the most basic example:</p>\n<example id=\"basic\">\n<h3>Listening to item selection</h3>\n<p>Pass the <code>onSelect</code> prop to the Menu component to perform some custom logic when an item is selected. The callback is\ninvoked with the <code>id</code> of the item.</p>\n<example id=\"controlled\">\n<h3>Grouping menu items</h3>\n<p>When the number of menu items gets much, it might be useful to group related menu items. To achieve this, render the\n<code>Menu.ItemGroup</code> component around the <code>Menu.Item</code> components. The <code>Menu.ItemGroupLabel</code> component can be used to add a\nlabel to the group.</p>\n<example id=\"group\">\n<h3>Separating menu items</h3>\n<p>To separate menu items, render the <code>Menu.Separator</code> component.</p>\n<example id=\"separator\">\n<h3>Context menu</h3>\n<p>To show the menu when a trigger element is right-clicked, use the <code>Menu.ContextTrigger</code> component.</p>\n<p>Context menus are also opened during a long-press of roughly <code>700ms</code> when the pointer is pen or touch.</p>\n<example id=\"context\">\n<h3>Nested menu</h3>\n<p>To show a nested menu, render another <code>Menu</code> component and use the <code>Menu.TriggerItem</code> component to open the submenu.</p>\n<example id=\"nested\">\n<h3>Checkbox</h3>\n<p>To add a checkbox to a menu item, use the <code>Menu.Checkbox</code> component.</p>\n<example id=\"checkbox\">\n<h3>Radio Group</h3>\n<p>To group radio option items, use the <code>Menu.RadioGroup</code> component.</p>\n<example id=\"radio-group\">\n<h3>Using the Root Provider</h3>\n<p>The <code>RootProvider</code> component provides a context for the menu. It accepts the value of the <code>useMenu</code> hook. You can\nleverage it to access the component state and methods from outside the menu.</p>\n<example id=\"root-provider\">\n<blockquote>\n<p>If you're using the <code>RootProvider</code> component, you don't need to use the <code>Root</code> component.</p>\n</blockquote>\n<h2>API Reference</h2>\n<componenttypes id=\"menu\">\n<h2>Accessibility</h2>\n<p>Complies with the <a href=\"https://www.w3.org/WAI/ARIA/apg/patterns/menubar/\">Menu WAI-ARIA design pattern</a>.</p>\n<h3>Keyboard Support</h3>\n<keybindingstable id=\"menu\"></keybindingstable></componenttypes></example></example></example></example></example></example></example></example></example></anatomy></componentpreview>",
        "framework": "*",
        "toc": [
            {
                "title": "Anatomy",
                "url": "#anatomy",
                "items": []
            },
            {
                "title": "Examples",
                "url": "#examples",
                "items": [
                    {
                        "title": "Listening to item selection",
                        "url": "#listening-to-item-selection",
                        "items": []
                    },
                    {
                        "title": "Grouping menu items",
                        "url": "#grouping-menu-items",
                        "items": []
                    },
                    {
                        "title": "Separating menu items",
                        "url": "#separating-menu-items",
                        "items": []
                    },
                    {
                        "title": "Context menu",
                        "url": "#context-menu",
                        "items": []
                    },
                    {
                        "title": "Nested menu",
                        "url": "#nested-menu",
                        "items": []
                    },
                    {
                        "title": "Checkbox",
                        "url": "#checkbox",
                        "items": []
                    },
                    {
                        "title": "Radio Group",
                        "url": "#radio-group",
                        "items": []
                    },
                    {
                        "title": "Using the Root Provider",
                        "url": "#using-the-root-provider",
                        "items": []
                    }
                ]
            },
            {
                "title": "API Reference",
                "url": "#api-reference",
                "items": []
            },
            {
                "title": "Accessibility",
                "url": "#accessibility",
                "items": [
                    {
                        "title": "Keyboard Support",
                        "url": "#keyboard-support",
                        "items": []
                    }
                ]
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:i}=arguments[0];function _createMdxContent(o){const c={a:\"a\",blockquote:\"blockquote\",code:\"code\",h2:\"h2\",h3:\"h3\",p:\"p\",span:\"span\",...o.components},{Anatomy:a,ComponentPreview:t,ComponentTypes:r,Example:s,KeyBindingsTable:d}=c;return a||_missingMdxReference(\"Anatomy\",!0),t||_missingMdxReference(\"ComponentPreview\",!0),r||_missingMdxReference(\"ComponentTypes\",!0),s||_missingMdxReference(\"Example\",!0),d||_missingMdxReference(\"KeyBindingsTable\",!0),i(e,{children:[n(t,{id:\"Menu\"}),\"\\n\",i(c.h2,{id:\"anatomy\",children:[n(c.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#anatomy\",children:n(c.span,{className:\"icon icon-link\"})}),\"Anatomy\"]}),\"\\n\",n(c.p,{children:\"To set up the menu correctly, you'll need to understand its anatomy and how we name its parts.\"}),\"\\n\",i(c.blockquote,{children:[\"\\n\",i(c.p,{children:[\"Each part includes a \",n(c.code,{children:\"data-part\"}),\" attribute to help identify them in the DOM.\"]}),\"\\n\"]}),\"\\n\",n(a,{id:\"menu\"}),\"\\n\",i(c.h2,{id:\"examples\",children:[n(c.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#examples\",children:n(c.span,{className:\"icon icon-link\"})}),\"Examples\"]}),\"\\n\",i(c.p,{children:[\"Learn how to use the \",n(c.code,{children:\"Menu\"}),\" component in your project. Let's take a look at the most basic example:\"]}),\"\\n\",n(s,{id:\"basic\"}),\"\\n\",i(c.h3,{id:\"listening-to-item-selection\",children:[n(c.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#listening-to-item-selection\",children:n(c.span,{className:\"icon icon-link\"})}),\"Listening to item selection\"]}),\"\\n\",i(c.p,{children:[\"Pass the \",n(c.code,{children:\"onSelect\"}),\" prop to the Menu component to perform some custom logic when an item is selected. The callback is\\ninvoked with the \",n(c.code,{children:\"id\"}),\" of the item.\"]}),\"\\n\",n(s,{id:\"controlled\"}),\"\\n\",i(c.h3,{id:\"grouping-menu-items\",children:[n(c.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#grouping-menu-items\",children:n(c.span,{className:\"icon icon-link\"})}),\"Grouping menu items\"]}),\"\\n\",i(c.p,{children:[\"When the number of menu items gets much, it might be useful to group related menu items. To achieve this, render the\\n\",n(c.code,{children:\"Menu.ItemGroup\"}),\" component around the \",n(c.code,{children:\"Menu.Item\"}),\" components. The \",n(c.code,{children:\"Menu.ItemGroupLabel\"}),\" component can be used to add a\\nlabel to the group.\"]}),\"\\n\",n(s,{id:\"group\"}),\"\\n\",i(c.h3,{id:\"separating-menu-items\",children:[n(c.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#separating-menu-items\",children:n(c.span,{className:\"icon icon-link\"})}),\"Separating menu items\"]}),\"\\n\",i(c.p,{children:[\"To separate menu items, render the \",n(c.code,{children:\"Menu.Separator\"}),\" component.\"]}),\"\\n\",n(s,{id:\"separator\"}),\"\\n\",i(c.h3,{id:\"context-menu\",children:[n(c.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#context-menu\",children:n(c.span,{className:\"icon icon-link\"})}),\"Context menu\"]}),\"\\n\",i(c.p,{children:[\"To show the menu when a trigger element is right-clicked, use the \",n(c.code,{children:\"Menu.ContextTrigger\"}),\" component.\"]}),\"\\n\",i(c.p,{children:[\"Context menus are also opened during a long-press of roughly \",n(c.code,{children:\"700ms\"}),\" when the pointer is pen or touch.\"]}),\"\\n\",n(s,{id:\"context\"}),\"\\n\",i(c.h3,{id:\"nested-menu\",children:[n(c.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#nested-menu\",children:n(c.span,{className:\"icon icon-link\"})}),\"Nested menu\"]}),\"\\n\",i(c.p,{children:[\"To show a nested menu, render another \",n(c.code,{children:\"Menu\"}),\" component and use the \",n(c.code,{children:\"Menu.TriggerItem\"}),\" component to open the submenu.\"]}),\"\\n\",n(s,{id:\"nested\"}),\"\\n\",i(c.h3,{id:\"checkbox\",children:[n(c.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#checkbox\",children:n(c.span,{className:\"icon icon-link\"})}),\"Checkbox\"]}),\"\\n\",i(c.p,{children:[\"To add a checkbox to a menu item, use the \",n(c.code,{children:\"Menu.Checkbox\"}),\" component.\"]}),\"\\n\",n(s,{id:\"checkbox\"}),\"\\n\",i(c.h3,{id:\"radio-group\",children:[n(c.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#radio-group\",children:n(c.span,{className:\"icon icon-link\"})}),\"Radio Group\"]}),\"\\n\",i(c.p,{children:[\"To group radio option items, use the \",n(c.code,{children:\"Menu.RadioGroup\"}),\" component.\"]}),\"\\n\",n(s,{id:\"radio-group\"}),\"\\n\",i(c.h3,{id:\"using-the-root-provider\",children:[n(c.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-the-root-provider\",children:n(c.span,{className:\"icon icon-link\"})}),\"Using the Root Provider\"]}),\"\\n\",i(c.p,{children:[\"The \",n(c.code,{children:\"RootProvider\"}),\" component provides a context for the menu. It accepts the value of the \",n(c.code,{children:\"useMenu\"}),\" hook. You can\\nleverage it to access the component state and methods from outside the menu.\"]}),\"\\n\",n(s,{id:\"root-provider\"}),\"\\n\",i(c.blockquote,{children:[\"\\n\",i(c.p,{children:[\"If you're using the \",n(c.code,{children:\"RootProvider\"}),\" component, you don't need to use the \",n(c.code,{children:\"Root\"}),\" component.\"]}),\"\\n\"]}),\"\\n\",i(c.h2,{id:\"api-reference\",children:[n(c.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#api-reference\",children:n(c.span,{className:\"icon icon-link\"})}),\"API Reference\"]}),\"\\n\",n(r,{id:\"menu\"}),\"\\n\",i(c.h2,{id:\"accessibility\",children:[n(c.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#accessibility\",children:n(c.span,{className:\"icon icon-link\"})}),\"Accessibility\"]}),\"\\n\",i(c.p,{children:[\"Complies with the \",n(c.a,{href:\"https://www.w3.org/WAI/ARIA/apg/patterns/menubar/\",children:\"Menu WAI-ARIA design pattern\"}),\".\"]}),\"\\n\",i(c.h3,{id:\"keyboard-support\",children:[n(c.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#keyboard-support\",children:n(c.span,{className:\"icon icon-link\"})}),\"Keyboard Support\"]}),\"\\n\",n(d,{id:\"menu\"})]})}return{default:function(e={}){const{wrapper:i}=e.components||{};return i?n(i,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};function _missingMdxReference(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "<ComponentPreview id=\"Menu\" />\n\n## Anatomy\n\nTo set up the menu correctly, you'll need to understand its anatomy and how we name its parts.\n\n> Each part includes a `data-part` attribute to help identify them in the DOM.\n\n<Anatomy id=\"menu\" />\n\n## Examples\n\nLearn how to use the `Menu` component in your project. Let's take a look at the most basic example:\n\n<Example id=\"basic\" />\n\n### Listening to item selection\n\nPass the `onSelect` prop to the Menu component to perform some custom logic when an item is selected. The callback is\ninvoked with the `id` of the item.\n\n<Example id=\"controlled\" />\n\n### Grouping menu items\n\nWhen the number of menu items gets much, it might be useful to group related menu items. To achieve this, render the\n`Menu.ItemGroup` component around the `Menu.Item` components. The `Menu.ItemGroupLabel` component can be used to add a\nlabel to the group.\n\n<Example id=\"group\" />\n\n### Separating menu items\n\nTo separate menu items, render the `Menu.Separator` component.\n\n<Example id=\"separator\" />\n\n### Context menu\n\nTo show the menu when a trigger element is right-clicked, use the `Menu.ContextTrigger` component.\n\nContext menus are also opened during a long-press of roughly `700ms` when the pointer is pen or touch.\n\n<Example id=\"context\" />\n\n### Nested menu\n\nTo show a nested menu, render another `Menu` component and use the `Menu.TriggerItem` component to open the submenu.\n\n<Example id=\"nested\" />\n\n### Checkbox\n\nTo add a checkbox to a menu item, use the `Menu.Checkbox` component.\n\n<Example id=\"checkbox\" />\n\n### Radio Group\n\nTo group radio option items, use the `Menu.RadioGroup` component.\n\n<Example id=\"radio-group\" />\n\n### Using the Root Provider\n\nThe `RootProvider` component provides a context for the menu. It accepts the value of the `useMenu` hook. You can\nleverage it to access the component state and methods from outside the menu.\n\n<Example id=\"root-provider\" />\n\n> If you're using the `RootProvider` component, you don't need to use the `Root` component.\n\n## API Reference\n\n<ComponentTypes id=\"menu\" />\n\n## Accessibility\n\nComplies with the [Menu WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/).\n\n### Keyboard Support\n\n<KeyBindingsTable id=\"menu\" />",
        "slug": "components/menu",
        "category": "components"
    },
    {
        "id": "number-input",
        "title": "Number Input",
        "description": "A field that allows user input of numeric values.",
        "metadata": {
            "readingTime": 1,
            "wordCount": 387
        },
        "content": "<componentpreview id=\"NumberInput\">\n<h2>Anatomy</h2>\n<p>To set up the number input correctly, you'll need to understand its anatomy and how we name its parts.</p>\n<blockquote>\n<p>Each part includes a <code>data-part</code> attribute to help identify them in the DOM.</p>\n</blockquote>\n<anatomy id=\"number-input\">\n<h2>Examples</h2>\n<p>Learn how to use the <code>NumberInput</code> component in your project. Let's take a look at the most basic example:</p>\n<example id=\"basic\">\n<h3>Setting a minimum and maximum value</h3>\n<p>Pass the <code>min</code> prop or <code>max</code> prop to set an upper and lower limit for the input. By default, the input will restrict the\nvalue to stay within the specified range.</p>\n<example id=\"min-max\">\n### Adjusting the precision of the value\n<p>In some cases, you might need the value to be rounded to specific decimal points. Set the <code>formatOptions</code> and provide\n<code>Intl.NumberFormatOptions</code> such as <code>maximumFractionDigits</code> or <code>minimumFractionDigits</code>.</p>\n<example id=\"fraction-digits\">\n<h3>Scrubbing the input value</h3>\n<p>The NumberInput supports the scrubber interaction pattern. To use this pattern, render the <code>NumberInput.Scrubber</code>\ncomponent. It uses the Pointer lock API and tracks the pointer movement. It also renders a virtual cursor which mimics\nthe real cursor's pointer.</p>\n<example id=\"scrubber\">\n<h3>Using the mouse wheel to change value</h3>\n<p>The NumberInput exposes a way to increment/decrement the value using the mouse wheel event. To activate this, set the\n<code>allowMouseWheel</code> prop to <code>true</code>.</p>\n<example id=\"mouse-wheel\">\n<h3>Clamp value when user blurs the input</h3>\n<p>In most cases, users can type custom values in the input field. If the typed value is greater than the max, the value is\nreset to max when the user blur out of the input.</p>\n<p>To disable this behavior, pass <code>clampValueOnBlur</code> and set to <code>false</code>.</p>\n<example id=\"no-clamp\">\n<h3>Usage within forms</h3>\n<p>To use the number input within forms, set the <code>name</code> prop.</p>\n<example id=\"form-usage\">\n<h3>Format and parse value</h3>\n<p>To apply custom formatting to the input's value, set the <code>formatOptions</code> and provide <code>Intl.NumberFormatOptions</code> such as\n<code>style</code> and <code>currency</code>.</p>\n<example id=\"formatted\">\n<h3>Using the Field Component</h3>\n<p>The <code>Field</code> component helps manage form-related state and accessibility attributes of a number input. It includes\nhandling ARIA labels, helper text, and error text to ensure proper accessibility.</p>\n<example id=\"with-field\">\n<h3>Using the Root Provider</h3>\n<p>The <code>RootProvider</code> component provides a context for the number-input. It accepts the value of the <code>useNumber-input</code>\nhook. You can leverage it to access the component state and methods from outside the number-input.</p>\n<example id=\"root-provider\">\n<blockquote>\n<p>If you're using the <code>RootProvider</code> component, you don't need to use the <code>Root</code> component.</p>\n</blockquote>\n<h2>API Reference</h2>\n<componenttypes id=\"number-input\">\n<h2>Accessibility</h2>\n<p>Complies with the <a href=\"https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/\">Spinbutton WAI-ARIA design pattern</a>.</p>\n<h3>Keyboard Support</h3>\n<keybindingstable id=\"number-input\"></keybindingstable></componenttypes></example></example></example></example></example></example></example></example></example></example></anatomy></componentpreview>",
        "framework": "*",
        "toc": [
            {
                "title": "Anatomy",
                "url": "#anatomy",
                "items": []
            },
            {
                "title": "Examples",
                "url": "#examples",
                "items": [
                    {
                        "title": "Setting a minimum and maximum value",
                        "url": "#setting-a-minimum-and-maximum-value",
                        "items": []
                    },
                    {
                        "title": "Scrubbing the input value",
                        "url": "#scrubbing-the-input-value",
                        "items": []
                    },
                    {
                        "title": "Using the mouse wheel to change value",
                        "url": "#using-the-mouse-wheel-to-change-value",
                        "items": []
                    },
                    {
                        "title": "Clamp value when user blurs the input",
                        "url": "#clamp-value-when-user-blurs-the-input",
                        "items": []
                    },
                    {
                        "title": "Usage within forms",
                        "url": "#usage-within-forms",
                        "items": []
                    },
                    {
                        "title": "Format and parse value",
                        "url": "#format-and-parse-value",
                        "items": []
                    },
                    {
                        "title": "Using the Field Component",
                        "url": "#using-the-field-component",
                        "items": []
                    },
                    {
                        "title": "Using the Root Provider",
                        "url": "#using-the-root-provider",
                        "items": []
                    }
                ]
            },
            {
                "title": "API Reference",
                "url": "#api-reference",
                "items": []
            },
            {
                "title": "Accessibility",
                "url": "#accessibility",
                "items": [
                    {
                        "title": "Keyboard Support",
                        "url": "#keyboard-support",
                        "items": []
                    }
                ]
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:i}=arguments[0];function _createMdxContent(a){const t={a:\"a\",blockquote:\"blockquote\",code:\"code\",h2:\"h2\",h3:\"h3\",p:\"p\",span:\"span\",...a.components},{Anatomy:o,ComponentPreview:r,ComponentTypes:c,Example:s,KeyBindingsTable:l}=t;return o||_missingMdxReference(\"Anatomy\",!0),r||_missingMdxReference(\"ComponentPreview\",!0),c||_missingMdxReference(\"ComponentTypes\",!0),s||_missingMdxReference(\"Example\",!0),l||_missingMdxReference(\"KeyBindingsTable\",!0),i(e,{children:[n(r,{id:\"NumberInput\"}),\"\\n\",i(t.h2,{id:\"anatomy\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#anatomy\",children:n(t.span,{className:\"icon icon-link\"})}),\"Anatomy\"]}),\"\\n\",n(t.p,{children:\"To set up the number input correctly, you'll need to understand its anatomy and how we name its parts.\"}),\"\\n\",i(t.blockquote,{children:[\"\\n\",i(t.p,{children:[\"Each part includes a \",n(t.code,{children:\"data-part\"}),\" attribute to help identify them in the DOM.\"]}),\"\\n\"]}),\"\\n\",n(o,{id:\"number-input\"}),\"\\n\",i(t.h2,{id:\"examples\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#examples\",children:n(t.span,{className:\"icon icon-link\"})}),\"Examples\"]}),\"\\n\",i(t.p,{children:[\"Learn how to use the \",n(t.code,{children:\"NumberInput\"}),\" component in your project. Let's take a look at the most basic example:\"]}),\"\\n\",n(s,{id:\"basic\"}),\"\\n\",i(t.h3,{id:\"setting-a-minimum-and-maximum-value\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#setting-a-minimum-and-maximum-value\",children:n(t.span,{className:\"icon icon-link\"})}),\"Setting a minimum and maximum value\"]}),\"\\n\",i(t.p,{children:[\"Pass the \",n(t.code,{children:\"min\"}),\" prop or \",n(t.code,{children:\"max\"}),\" prop to set an upper and lower limit for the input. By default, the input will restrict the\\nvalue to stay within the specified range.\"]}),\"\\n\",n(s,{id:\"min-max\"}),\"\\n\",i(t.h3,{id:\"adjusting-the-precision-of-the-value\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#adjusting-the-precision-of-the-value\",children:n(t.span,{className:\"icon icon-link\"})}),\"Adjusting the precision of the value\"]}),\"\\n\",i(t.p,{children:[\"In some cases, you might need the value to be rounded to specific decimal points. Set the \",n(t.code,{children:\"formatOptions\"}),\" and provide\\n\",n(t.code,{children:\"Intl.NumberFormatOptions\"}),\" such as \",n(t.code,{children:\"maximumFractionDigits\"}),\" or \",n(t.code,{children:\"minimumFractionDigits\"}),\".\"]}),\"\\n\",n(s,{id:\"fraction-digits\"}),\"\\n\",i(t.h3,{id:\"scrubbing-the-input-value\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#scrubbing-the-input-value\",children:n(t.span,{className:\"icon icon-link\"})}),\"Scrubbing the input value\"]}),\"\\n\",i(t.p,{children:[\"The NumberInput supports the scrubber interaction pattern. To use this pattern, render the \",n(t.code,{children:\"NumberInput.Scrubber\"}),\"\\ncomponent. It uses the Pointer lock API and tracks the pointer movement. It also renders a virtual cursor which mimics\\nthe real cursor's pointer.\"]}),\"\\n\",n(s,{id:\"scrubber\"}),\"\\n\",i(t.h3,{id:\"using-the-mouse-wheel-to-change-value\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-the-mouse-wheel-to-change-value\",children:n(t.span,{className:\"icon icon-link\"})}),\"Using the mouse wheel to change value\"]}),\"\\n\",i(t.p,{children:[\"The NumberInput exposes a way to increment/decrement the value using the mouse wheel event. To activate this, set the\\n\",n(t.code,{children:\"allowMouseWheel\"}),\" prop to \",n(t.code,{children:\"true\"}),\".\"]}),\"\\n\",n(s,{id:\"mouse-wheel\"}),\"\\n\",i(t.h3,{id:\"clamp-value-when-user-blurs-the-input\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#clamp-value-when-user-blurs-the-input\",children:n(t.span,{className:\"icon icon-link\"})}),\"Clamp value when user blurs the input\"]}),\"\\n\",n(t.p,{children:\"In most cases, users can type custom values in the input field. If the typed value is greater than the max, the value is\\nreset to max when the user blur out of the input.\"}),\"\\n\",i(t.p,{children:[\"To disable this behavior, pass \",n(t.code,{children:\"clampValueOnBlur\"}),\" and set to \",n(t.code,{children:\"false\"}),\".\"]}),\"\\n\",n(s,{id:\"no-clamp\"}),\"\\n\",i(t.h3,{id:\"usage-within-forms\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#usage-within-forms\",children:n(t.span,{className:\"icon icon-link\"})}),\"Usage within forms\"]}),\"\\n\",i(t.p,{children:[\"To use the number input within forms, set the \",n(t.code,{children:\"name\"}),\" prop.\"]}),\"\\n\",n(s,{id:\"form-usage\"}),\"\\n\",i(t.h3,{id:\"format-and-parse-value\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#format-and-parse-value\",children:n(t.span,{className:\"icon icon-link\"})}),\"Format and parse value\"]}),\"\\n\",i(t.p,{children:[\"To apply custom formatting to the input's value, set the \",n(t.code,{children:\"formatOptions\"}),\" and provide \",n(t.code,{children:\"Intl.NumberFormatOptions\"}),\" such as\\n\",n(t.code,{children:\"style\"}),\" and \",n(t.code,{children:\"currency\"}),\".\"]}),\"\\n\",n(s,{id:\"formatted\"}),\"\\n\",i(t.h3,{id:\"using-the-field-component\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-the-field-component\",children:n(t.span,{className:\"icon icon-link\"})}),\"Using the Field Component\"]}),\"\\n\",i(t.p,{children:[\"The \",n(t.code,{children:\"Field\"}),\" component helps manage form-related state and accessibility attributes of a number input. It includes\\nhandling ARIA labels, helper text, and error text to ensure proper accessibility.\"]}),\"\\n\",n(s,{id:\"with-field\"}),\"\\n\",i(t.h3,{id:\"using-the-root-provider\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-the-root-provider\",children:n(t.span,{className:\"icon icon-link\"})}),\"Using the Root Provider\"]}),\"\\n\",i(t.p,{children:[\"The \",n(t.code,{children:\"RootProvider\"}),\" component provides a context for the number-input. It accepts the value of the \",n(t.code,{children:\"useNumber-input\"}),\"\\nhook. You can leverage it to access the component state and methods from outside the number-input.\"]}),\"\\n\",n(s,{id:\"root-provider\"}),\"\\n\",i(t.blockquote,{children:[\"\\n\",i(t.p,{children:[\"If you're using the \",n(t.code,{children:\"RootProvider\"}),\" component, you don't need to use the \",n(t.code,{children:\"Root\"}),\" component.\"]}),\"\\n\"]}),\"\\n\",i(t.h2,{id:\"api-reference\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#api-reference\",children:n(t.span,{className:\"icon icon-link\"})}),\"API Reference\"]}),\"\\n\",n(c,{id:\"number-input\"}),\"\\n\",i(t.h2,{id:\"accessibility\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#accessibility\",children:n(t.span,{className:\"icon icon-link\"})}),\"Accessibility\"]}),\"\\n\",i(t.p,{children:[\"Complies with the \",n(t.a,{href:\"https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/\",children:\"Spinbutton WAI-ARIA design pattern\"}),\".\"]}),\"\\n\",i(t.h3,{id:\"keyboard-support\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#keyboard-support\",children:n(t.span,{className:\"icon icon-link\"})}),\"Keyboard Support\"]}),\"\\n\",n(l,{id:\"number-input\"})]})}return{default:function(e={}){const{wrapper:i}=e.components||{};return i?n(i,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};function _missingMdxReference(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "<ComponentPreview id=\"NumberInput\" />\n\n## Anatomy\n\nTo set up the number input correctly, you'll need to understand its anatomy and how we name its parts.\n\n> Each part includes a `data-part` attribute to help identify them in the DOM.\n\n<Anatomy id=\"number-input\" />\n\n## Examples\n\nLearn how to use the `NumberInput` component in your project. Let's take a look at the most basic example:\n\n<Example id=\"basic\" />\n\n### Setting a minimum and maximum value\n\nPass the `min` prop or `max` prop to set an upper and lower limit for the input. By default, the input will restrict the\nvalue to stay within the specified range.\n\n<Example id=\"min-max\" />\n### Adjusting the precision of the value\n\nIn some cases, you might need the value to be rounded to specific decimal points. Set the `formatOptions` and provide\n`Intl.NumberFormatOptions` such as `maximumFractionDigits` or `minimumFractionDigits`.\n\n<Example id=\"fraction-digits\" />\n\n### Scrubbing the input value\n\nThe NumberInput supports the scrubber interaction pattern. To use this pattern, render the `NumberInput.Scrubber`\ncomponent. It uses the Pointer lock API and tracks the pointer movement. It also renders a virtual cursor which mimics\nthe real cursor's pointer.\n\n<Example id=\"scrubber\" />\n\n### Using the mouse wheel to change value\n\nThe NumberInput exposes a way to increment/decrement the value using the mouse wheel event. To activate this, set the\n`allowMouseWheel` prop to `true`.\n\n<Example id=\"mouse-wheel\" />\n\n### Clamp value when user blurs the input\n\nIn most cases, users can type custom values in the input field. If the typed value is greater than the max, the value is\nreset to max when the user blur out of the input.\n\nTo disable this behavior, pass `clampValueOnBlur` and set to `false`.\n\n<Example id=\"no-clamp\" />\n\n### Usage within forms\n\nTo use the number input within forms, set the `name` prop.\n\n<Example id=\"form-usage\" />\n\n### Format and parse value\n\nTo apply custom formatting to the input's value, set the `formatOptions` and provide `Intl.NumberFormatOptions` such as\n`style` and `currency`.\n\n<Example id=\"formatted\" />\n\n### Using the Field Component\n\nThe `Field` component helps manage form-related state and accessibility attributes of a number input. It includes\nhandling ARIA labels, helper text, and error text to ensure proper accessibility.\n\n<Example id=\"with-field\" />\n\n### Using the Root Provider\n\nThe `RootProvider` component provides a context for the number-input. It accepts the value of the `useNumber-input`\nhook. You can leverage it to access the component state and methods from outside the number-input.\n\n<Example id=\"root-provider\" />\n\n> If you're using the `RootProvider` component, you don't need to use the `Root` component.\n\n## API Reference\n\n<ComponentTypes id=\"number-input\" />\n\n## Accessibility\n\nComplies with the [Spinbutton WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/).\n\n### Keyboard Support\n\n<KeyBindingsTable id=\"number-input\" />",
        "slug": "components/number-input",
        "category": "components"
    },
    {
        "id": "pagination",
        "title": "Pagination",
        "description": "A navigation component that allows users to browse through pages.",
        "metadata": {
            "readingTime": 1,
            "wordCount": 160
        },
        "content": "<componentpreview id=\"Pagination\">\n<h2>Anatomy</h2>\n<p>To set up the pagination correctly, you'll need to understand its anatomy and how we name its parts.</p>\n<blockquote>\n<p>Each part includes a <code>data-part</code> attribute to help identify them in the DOM.</p>\n</blockquote>\n<anatomy id=\"pagination\">\n<h2>Examples</h2>\n<p>Learn how to use the <code>Pagination</code> component in your project. Let's take a look at the most basic example:</p>\n<example id=\"basic\">\n<h3>Controlled Pagination</h3>\n<p>To create a controlled Pagination component, manage the state of the current page using the <code>page</code> prop and update it\nwhen the <code>onPageChange</code> event handler is called:</p>\n<example id=\"controlled\">\n<h3>Customizing Pagination</h3>\n<p>You can customize the Pagination component by setting various props such as <code>dir</code>, <code>pageSize</code>, <code>siblingCount</code>, and\n<code>translations</code>. Here's an example of a customized Pagination:</p>\n<example id=\"customized\">\n<h3>Using the Root Provider</h3>\n<p>The <code>RootProvider</code> component provides a context for the pagination. It accepts the value of the <code>usePagination</code> hook.\nYou can leverage it to access the component state and methods from outside the pagination.</p>\n<example id=\"root-provider\">\n<blockquote>\n<p>If you're using the <code>RootProvider</code> component, you don't need to use the <code>Root</code> component.</p>\n</blockquote>\n<h2>API Reference</h2>\n<componenttypes id=\"pagination\"></componenttypes></example></example></example></example></anatomy></componentpreview>",
        "framework": "*",
        "toc": [
            {
                "title": "Anatomy",
                "url": "#anatomy",
                "items": []
            },
            {
                "title": "Examples",
                "url": "#examples",
                "items": [
                    {
                        "title": "Controlled Pagination",
                        "url": "#controlled-pagination",
                        "items": []
                    },
                    {
                        "title": "Customizing Pagination",
                        "url": "#customizing-pagination",
                        "items": []
                    },
                    {
                        "title": "Using the Root Provider",
                        "url": "#using-the-root-provider",
                        "items": []
                    }
                ]
            },
            {
                "title": "API Reference",
                "url": "#api-reference",
                "items": []
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:o}=arguments[0];function _createMdxContent(i){const a={a:\"a\",blockquote:\"blockquote\",code:\"code\",h2:\"h2\",h3:\"h3\",p:\"p\",span:\"span\",...i.components},{Anatomy:t,ComponentPreview:c,ComponentTypes:r,Example:d}=a;return t||_missingMdxReference(\"Anatomy\",!0),c||_missingMdxReference(\"ComponentPreview\",!0),r||_missingMdxReference(\"ComponentTypes\",!0),d||_missingMdxReference(\"Example\",!0),o(e,{children:[n(c,{id:\"Pagination\"}),\"\\n\",o(a.h2,{id:\"anatomy\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#anatomy\",children:n(a.span,{className:\"icon icon-link\"})}),\"Anatomy\"]}),\"\\n\",n(a.p,{children:\"To set up the pagination correctly, you'll need to understand its anatomy and how we name its parts.\"}),\"\\n\",o(a.blockquote,{children:[\"\\n\",o(a.p,{children:[\"Each part includes a \",n(a.code,{children:\"data-part\"}),\" attribute to help identify them in the DOM.\"]}),\"\\n\"]}),\"\\n\",n(t,{id:\"pagination\"}),\"\\n\",o(a.h2,{id:\"examples\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#examples\",children:n(a.span,{className:\"icon icon-link\"})}),\"Examples\"]}),\"\\n\",o(a.p,{children:[\"Learn how to use the \",n(a.code,{children:\"Pagination\"}),\" component in your project. Let's take a look at the most basic example:\"]}),\"\\n\",n(d,{id:\"basic\"}),\"\\n\",o(a.h3,{id:\"controlled-pagination\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#controlled-pagination\",children:n(a.span,{className:\"icon icon-link\"})}),\"Controlled Pagination\"]}),\"\\n\",o(a.p,{children:[\"To create a controlled Pagination component, manage the state of the current page using the \",n(a.code,{children:\"page\"}),\" prop and update it\\nwhen the \",n(a.code,{children:\"onPageChange\"}),\" event handler is called:\"]}),\"\\n\",n(d,{id:\"controlled\"}),\"\\n\",o(a.h3,{id:\"customizing-pagination\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#customizing-pagination\",children:n(a.span,{className:\"icon icon-link\"})}),\"Customizing Pagination\"]}),\"\\n\",o(a.p,{children:[\"You can customize the Pagination component by setting various props such as \",n(a.code,{children:\"dir\"}),\", \",n(a.code,{children:\"pageSize\"}),\", \",n(a.code,{children:\"siblingCount\"}),\", and\\n\",n(a.code,{children:\"translations\"}),\". Here's an example of a customized Pagination:\"]}),\"\\n\",n(d,{id:\"customized\"}),\"\\n\",o(a.h3,{id:\"using-the-root-provider\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-the-root-provider\",children:n(a.span,{className:\"icon icon-link\"})}),\"Using the Root Provider\"]}),\"\\n\",o(a.p,{children:[\"The \",n(a.code,{children:\"RootProvider\"}),\" component provides a context for the pagination. It accepts the value of the \",n(a.code,{children:\"usePagination\"}),\" hook.\\nYou can leverage it to access the component state and methods from outside the pagination.\"]}),\"\\n\",n(d,{id:\"root-provider\"}),\"\\n\",o(a.blockquote,{children:[\"\\n\",o(a.p,{children:[\"If you're using the \",n(a.code,{children:\"RootProvider\"}),\" component, you don't need to use the \",n(a.code,{children:\"Root\"}),\" component.\"]}),\"\\n\"]}),\"\\n\",o(a.h2,{id:\"api-reference\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#api-reference\",children:n(a.span,{className:\"icon icon-link\"})}),\"API Reference\"]}),\"\\n\",n(r,{id:\"pagination\"})]})}return{default:function(e={}){const{wrapper:o}=e.components||{};return o?n(o,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};function _missingMdxReference(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "<ComponentPreview id=\"Pagination\" />\n\n## Anatomy\n\nTo set up the pagination correctly, you'll need to understand its anatomy and how we name its parts.\n\n> Each part includes a `data-part` attribute to help identify them in the DOM.\n\n<Anatomy id=\"pagination\" />\n\n## Examples\n\nLearn how to use the `Pagination` component in your project. Let's take a look at the most basic example:\n\n<Example id=\"basic\" />\n\n### Controlled Pagination\n\nTo create a controlled Pagination component, manage the state of the current page using the `page` prop and update it\nwhen the `onPageChange` event handler is called:\n\n<Example id=\"controlled\" />\n\n### Customizing Pagination\n\nYou can customize the Pagination component by setting various props such as `dir`, `pageSize`, `siblingCount`, and\n`translations`. Here's an example of a customized Pagination:\n\n<Example id=\"customized\" />\n\n### Using the Root Provider\n\nThe `RootProvider` component provides a context for the pagination. It accepts the value of the `usePagination` hook.\nYou can leverage it to access the component state and methods from outside the pagination.\n\n<Example id=\"root-provider\" />\n\n> If you're using the `RootProvider` component, you don't need to use the `Root` component.\n\n## API Reference\n\n<ComponentTypes id=\"pagination\" />",
        "slug": "components/pagination",
        "category": "components"
    },
    {
        "id": "pin-input",
        "title": "Pin Input",
        "description": "For pin or verification codes with auto-focus transfer and masking options.",
        "metadata": {
            "readingTime": 1,
            "wordCount": 352
        },
        "content": "<componentpreview id=\"PinInput\">\n<h2>Anatomy</h2>\n<p>To set up the pin input correctly, you'll need to understand its anatomy and how we name its parts.</p>\n<blockquote>\n<p>Each part includes a <code>data-part</code> attribute to help identify them in the DOM.</p>\n</blockquote>\n<anatomy id=\"pin-input\">\n<h2>Examples</h2>\n<p>Learn how to use the <code>PinInput</code> component in your project. Let's take a look at the most basic example:</p>\n<example id=\"basic\">\n<h3>Setting a default value</h3>\n<p>To set the initial value of the pin input, set the <code>defaultValue</code> prop.</p>\n<example id=\"initial-value\">\n<h3>Changing the placeholder</h3>\n<p>To customize the default pin input placeholder <code>○</code> for each input, pass the placeholder prop and set it to your desired\nvalue.</p>\n<example id=\"customized\">\n<h3>Blur on complete</h3>\n<p>By default, the last input maintains focus when filled, and we invoke the <code>onValueComplete</code> callback. To blur the last\ninput when the user completes the input, set the prop <code>blurOnComplete</code> to <code>true</code>.</p>\n<example id=\"blurred\">\n<h3>Using OTP mode</h3>\n<p>To trigger smartphone OTP auto-suggestion, it is recommended to set the <code>autocomplete</code> attribute to \"one-time-code\". The\npin input component provides support for this automatically when you set the <code>otp</code> prop to true.</p>\n<example id=\"otp-mode\">\n<h3>Securing the text input</h3>\n<p>When collecting private or sensitive information using the pin input, you might need to mask the value entered, similar\nto <code>&#x3C;input type=\"password\"/></code>. Pass the <code>mask</code> prop to <code>true</code>.</p>\n<example id=\"with-mask\">\n<h3>Listening for changes</h3>\n<p>The pin input component invokes several callback functions when the user enters:</p>\n<ul>\n<li><code>onValueChange</code> — Callback invoked when the value is changed.</li>\n<li><code>onValueComplete</code> — Callback invoked when all fields have been completed (by typing or pasting).</li>\n<li><code>onValueInvalid</code> — Callback invoked when an invalid value is entered into the input. An invalid value is any value\nthat doesn't match the specified \"type\".</li>\n</ul>\n<h3>Using the Field Component</h3>\n<p>The <code>Field</code> component helps manage form-related state and accessibility attributes of a pin input. It includes handling\nARIA labels, helper text, and error text to ensure proper accessibility.</p>\n<example id=\"with-field\">\n<h3>Using the Root Provider</h3>\n<p>The <code>RootProvider</code> component provides a context for the pin-input. It accepts the value of the <code>usePin-input</code> hook. You\ncan leverage it to access the component state and methods from outside the pin-input.</p>\n<example id=\"root-provider\">\n<blockquote>\n<p>If you're using the <code>RootProvider</code> component, you don't need to use the <code>Root</code> component.</p>\n</blockquote>\n<h2>API Reference</h2>\n<componenttypes id=\"pin-input\">\n<h2>Accessibility</h2>\n<h3>Keyboard Support</h3>\n<keybindingstable id=\"pin-input\"></keybindingstable></componenttypes></example></example></example></example></example></example></example></example></anatomy></componentpreview>",
        "framework": "*",
        "toc": [
            {
                "title": "Anatomy",
                "url": "#anatomy",
                "items": []
            },
            {
                "title": "Examples",
                "url": "#examples",
                "items": [
                    {
                        "title": "Setting a default value",
                        "url": "#setting-a-default-value",
                        "items": []
                    },
                    {
                        "title": "Changing the placeholder",
                        "url": "#changing-the-placeholder",
                        "items": []
                    },
                    {
                        "title": "Blur on complete",
                        "url": "#blur-on-complete",
                        "items": []
                    },
                    {
                        "title": "Using OTP mode",
                        "url": "#using-otp-mode",
                        "items": []
                    },
                    {
                        "title": "Securing the text input",
                        "url": "#securing-the-text-input",
                        "items": []
                    },
                    {
                        "title": "Listening for changes",
                        "url": "#listening-for-changes",
                        "items": []
                    },
                    {
                        "title": "Using the Field Component",
                        "url": "#using-the-field-component",
                        "items": []
                    },
                    {
                        "title": "Using the Root Provider",
                        "url": "#using-the-root-provider",
                        "items": []
                    }
                ]
            },
            {
                "title": "API Reference",
                "url": "#api-reference",
                "items": []
            },
            {
                "title": "Accessibility",
                "url": "#accessibility",
                "items": [
                    {
                        "title": "Keyboard Support",
                        "url": "#keyboard-support",
                        "items": []
                    }
                ]
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:i}=arguments[0];function _createMdxContent(t){const a={a:\"a\",blockquote:\"blockquote\",code:\"code\",h2:\"h2\",h3:\"h3\",li:\"li\",p:\"p\",span:\"span\",ul:\"ul\",...t.components},{Anatomy:o,ComponentPreview:c,ComponentTypes:l,Example:r,KeyBindingsTable:s}=a;return o||_missingMdxReference(\"Anatomy\",!0),c||_missingMdxReference(\"ComponentPreview\",!0),l||_missingMdxReference(\"ComponentTypes\",!0),r||_missingMdxReference(\"Example\",!0),s||_missingMdxReference(\"KeyBindingsTable\",!0),i(e,{children:[n(c,{id:\"PinInput\"}),\"\\n\",i(a.h2,{id:\"anatomy\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#anatomy\",children:n(a.span,{className:\"icon icon-link\"})}),\"Anatomy\"]}),\"\\n\",n(a.p,{children:\"To set up the pin input correctly, you'll need to understand its anatomy and how we name its parts.\"}),\"\\n\",i(a.blockquote,{children:[\"\\n\",i(a.p,{children:[\"Each part includes a \",n(a.code,{children:\"data-part\"}),\" attribute to help identify them in the DOM.\"]}),\"\\n\"]}),\"\\n\",n(o,{id:\"pin-input\"}),\"\\n\",i(a.h2,{id:\"examples\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#examples\",children:n(a.span,{className:\"icon icon-link\"})}),\"Examples\"]}),\"\\n\",i(a.p,{children:[\"Learn how to use the \",n(a.code,{children:\"PinInput\"}),\" component in your project. Let's take a look at the most basic example:\"]}),\"\\n\",n(r,{id:\"basic\"}),\"\\n\",i(a.h3,{id:\"setting-a-default-value\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#setting-a-default-value\",children:n(a.span,{className:\"icon icon-link\"})}),\"Setting a default value\"]}),\"\\n\",i(a.p,{children:[\"To set the initial value of the pin input, set the \",n(a.code,{children:\"defaultValue\"}),\" prop.\"]}),\"\\n\",n(r,{id:\"initial-value\"}),\"\\n\",i(a.h3,{id:\"changing-the-placeholder\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#changing-the-placeholder\",children:n(a.span,{className:\"icon icon-link\"})}),\"Changing the placeholder\"]}),\"\\n\",i(a.p,{children:[\"To customize the default pin input placeholder \",n(a.code,{children:\"○\"}),\" for each input, pass the placeholder prop and set it to your desired\\nvalue.\"]}),\"\\n\",n(r,{id:\"customized\"}),\"\\n\",i(a.h3,{id:\"blur-on-complete\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#blur-on-complete\",children:n(a.span,{className:\"icon icon-link\"})}),\"Blur on complete\"]}),\"\\n\",i(a.p,{children:[\"By default, the last input maintains focus when filled, and we invoke the \",n(a.code,{children:\"onValueComplete\"}),\" callback. To blur the last\\ninput when the user completes the input, set the prop \",n(a.code,{children:\"blurOnComplete\"}),\" to \",n(a.code,{children:\"true\"}),\".\"]}),\"\\n\",n(r,{id:\"blurred\"}),\"\\n\",i(a.h3,{id:\"using-otp-mode\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-otp-mode\",children:n(a.span,{className:\"icon icon-link\"})}),\"Using OTP mode\"]}),\"\\n\",i(a.p,{children:[\"To trigger smartphone OTP auto-suggestion, it is recommended to set the \",n(a.code,{children:\"autocomplete\"}),' attribute to \"one-time-code\". The\\npin input component provides support for this automatically when you set the ',n(a.code,{children:\"otp\"}),\" prop to true.\"]}),\"\\n\",n(r,{id:\"otp-mode\"}),\"\\n\",i(a.h3,{id:\"securing-the-text-input\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#securing-the-text-input\",children:n(a.span,{className:\"icon icon-link\"})}),\"Securing the text input\"]}),\"\\n\",i(a.p,{children:[\"When collecting private or sensitive information using the pin input, you might need to mask the value entered, similar\\nto \",n(a.code,{children:'<input type=\"password\"/>'}),\". Pass the \",n(a.code,{children:\"mask\"}),\" prop to \",n(a.code,{children:\"true\"}),\".\"]}),\"\\n\",n(r,{id:\"with-mask\"}),\"\\n\",i(a.h3,{id:\"listening-for-changes\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#listening-for-changes\",children:n(a.span,{className:\"icon icon-link\"})}),\"Listening for changes\"]}),\"\\n\",n(a.p,{children:\"The pin input component invokes several callback functions when the user enters:\"}),\"\\n\",i(a.ul,{children:[\"\\n\",i(a.li,{children:[n(a.code,{children:\"onValueChange\"}),\" — Callback invoked when the value is changed.\"]}),\"\\n\",i(a.li,{children:[n(a.code,{children:\"onValueComplete\"}),\" — Callback invoked when all fields have been completed (by typing or pasting).\"]}),\"\\n\",i(a.li,{children:[n(a.code,{children:\"onValueInvalid\"}),' — Callback invoked when an invalid value is entered into the input. An invalid value is any value\\nthat doesn\\'t match the specified \"type\".']}),\"\\n\"]}),\"\\n\",i(a.h3,{id:\"using-the-field-component\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-the-field-component\",children:n(a.span,{className:\"icon icon-link\"})}),\"Using the Field Component\"]}),\"\\n\",i(a.p,{children:[\"The \",n(a.code,{children:\"Field\"}),\" component helps manage form-related state and accessibility attributes of a pin input. It includes handling\\nARIA labels, helper text, and error text to ensure proper accessibility.\"]}),\"\\n\",n(r,{id:\"with-field\"}),\"\\n\",i(a.h3,{id:\"using-the-root-provider\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-the-root-provider\",children:n(a.span,{className:\"icon icon-link\"})}),\"Using the Root Provider\"]}),\"\\n\",i(a.p,{children:[\"The \",n(a.code,{children:\"RootProvider\"}),\" component provides a context for the pin-input. It accepts the value of the \",n(a.code,{children:\"usePin-input\"}),\" hook. You\\ncan leverage it to access the component state and methods from outside the pin-input.\"]}),\"\\n\",n(r,{id:\"root-provider\"}),\"\\n\",i(a.blockquote,{children:[\"\\n\",i(a.p,{children:[\"If you're using the \",n(a.code,{children:\"RootProvider\"}),\" component, you don't need to use the \",n(a.code,{children:\"Root\"}),\" component.\"]}),\"\\n\"]}),\"\\n\",i(a.h2,{id:\"api-reference\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#api-reference\",children:n(a.span,{className:\"icon icon-link\"})}),\"API Reference\"]}),\"\\n\",n(l,{id:\"pin-input\"}),\"\\n\",i(a.h2,{id:\"accessibility\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#accessibility\",children:n(a.span,{className:\"icon icon-link\"})}),\"Accessibility\"]}),\"\\n\",i(a.h3,{id:\"keyboard-support\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#keyboard-support\",children:n(a.span,{className:\"icon icon-link\"})}),\"Keyboard Support\"]}),\"\\n\",n(s,{id:\"pin-input\"})]})}return{default:function(e={}){const{wrapper:i}=e.components||{};return i?n(i,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};function _missingMdxReference(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "<ComponentPreview id=\"PinInput\" />\n\n## Anatomy\n\nTo set up the pin input correctly, you'll need to understand its anatomy and how we name its parts.\n\n> Each part includes a `data-part` attribute to help identify them in the DOM.\n\n<Anatomy id=\"pin-input\" />\n\n## Examples\n\nLearn how to use the `PinInput` component in your project. Let's take a look at the most basic example:\n\n<Example id=\"basic\" />\n\n### Setting a default value\n\nTo set the initial value of the pin input, set the `defaultValue` prop.\n\n<Example id=\"initial-value\" />\n\n### Changing the placeholder\n\nTo customize the default pin input placeholder `○` for each input, pass the placeholder prop and set it to your desired\nvalue.\n\n<Example id=\"customized\" />\n\n### Blur on complete\n\nBy default, the last input maintains focus when filled, and we invoke the `onValueComplete` callback. To blur the last\ninput when the user completes the input, set the prop `blurOnComplete` to `true`.\n\n<Example id=\"blurred\" />\n\n### Using OTP mode\n\nTo trigger smartphone OTP auto-suggestion, it is recommended to set the `autocomplete` attribute to \"one-time-code\". The\npin input component provides support for this automatically when you set the `otp` prop to true.\n\n<Example id=\"otp-mode\" />\n\n### Securing the text input\n\nWhen collecting private or sensitive information using the pin input, you might need to mask the value entered, similar\nto `<input type=\"password\"/>`. Pass the `mask` prop to `true`.\n\n<Example id=\"with-mask\" />\n\n### Listening for changes\n\nThe pin input component invokes several callback functions when the user enters:\n\n- `onValueChange` — Callback invoked when the value is changed.\n- `onValueComplete` — Callback invoked when all fields have been completed (by typing or pasting).\n- `onValueInvalid` — Callback invoked when an invalid value is entered into the input. An invalid value is any value\n  that doesn't match the specified \"type\".\n\n### Using the Field Component\n\nThe `Field` component helps manage form-related state and accessibility attributes of a pin input. It includes handling\nARIA labels, helper text, and error text to ensure proper accessibility.\n\n<Example id=\"with-field\" />\n\n### Using the Root Provider\n\nThe `RootProvider` component provides a context for the pin-input. It accepts the value of the `usePin-input` hook. You\ncan leverage it to access the component state and methods from outside the pin-input.\n\n<Example id=\"root-provider\" />\n\n> If you're using the `RootProvider` component, you don't need to use the `Root` component.\n\n## API Reference\n\n<ComponentTypes id=\"pin-input\" />\n\n## Accessibility\n\n### Keyboard Support\n\n<KeyBindingsTable id=\"pin-input\" />",
        "slug": "components/pin-input",
        "category": "components"
    },
    {
        "id": "popover",
        "title": "Popover",
        "description": "An overlay that displays additional information or options when triggered.",
        "metadata": {
            "readingTime": 1,
            "wordCount": 350
        },
        "content": "<componentpreview id=\"Popover\">\n<h2>Anatomy</h2>\n<p>To set up the popover correctly, you'll need to understand its anatomy and how we name its parts.</p>\n<blockquote>\n<p>Each part includes a <code>data-part</code> attribute to help identify them in the DOM.</p>\n</blockquote>\n<anatomy id=\"popover\">\n<h2>Examples</h2>\n<p>Learn how to use the <code>Popover</code> component in your project. Let's take a look at the most basic example:</p>\n<example id=\"basic\">\n<h3>Using a Portal</h3>\n<p>By default, the popover is rendered in the same DOM hierarchy as the trigger. To render the popover within a portal, set\nthe <code>portalled</code> prop to <code>true</code>.</p>\n<blockquote>\n<p>Note: This requires that you render the component within a <code>Portal</code> based on the framework you use.</p>\n</blockquote>\n<example id=\"portalled\">\n<h3>Adding an arrow</h3>\n<p>To render an arrow within the popover, render the component <code>Popover.Arrow</code> and <code>Popover.ArrowTip</code> as children of\n<code>Popover.Positioner</code>.</p>\n<example id=\"arrow\">\n<h3>Listening for open and close events</h3>\n<p>When the popover is opened or closed, we invoke the <code>onOpenChange</code> callback.</p>\n<example id=\"on-open-change\">\n<h3>Control the open state</h3>\n<p>Use the <code>isOpen</code> prop to control the open state of the popover.</p>\n<example id=\"controlled\">\n<h3>Modifying the close behavior</h3>\n<p>The popover is designed to close on blur and when the <kbd>esc</kbd> key is pressed.</p>\n<p>To prevent it from closing on blur (clicking or focusing outside), pass the <code>closeOnInteractOutside</code> prop and set it to\n<code>false</code>.</p>\n<p>To prevent it from closing when the <kbd>esc</kbd> key is pressed, pass the <code>closeOnEsc</code> prop and set it to <code>false</code>.</p>\n<example id=\"close-behavior\">\n<h3>Changing the placement</h3>\n<p>To change the placement of the popover, set the <code>positioning</code> prop.</p>\n<example id=\"positioning\">\n<h3>Changing the modality</h3>\n<p>In some cases, you might want the popover to be modal. This means that it'll:</p>\n<ul>\n<li>trap focus within its content</li>\n<li>block scrolling on the body</li>\n<li>disable pointer interactions outside the popover</li>\n<li>hide content behind the popover from screen readers</li>\n</ul>\n<p>To make the popover modal, set the <code>modal</code> prop to <code>true</code>. When <code>modal={true}</code>, we set the <code>portalled</code> attribute to\n<code>true</code> as well.</p>\n<example id=\"modal\">\n<h3>Using the Root Provider</h3>\n<p>The <code>RootProvider</code> component provides a context for the popover. It accepts the value of the <code>usePopover</code> hook. You can\nleverage it to access the component state and methods from outside the popover.</p>\n<example id=\"root-provider\">\n<blockquote>\n<p>If you're using the <code>RootProvider</code> component, you don't need to use the <code>Root</code> component.</p>\n</blockquote>\n<h2>API Reference</h2>\n<componenttypes id=\"popover\">\n<h2>Accessibility</h2>\n<h3>Keyboard Support</h3>\n<keybindingstable id=\"popover\"></keybindingstable></componenttypes></example></example></example></example></example></example></example></example></example></anatomy></componentpreview>",
        "framework": "*",
        "toc": [
            {
                "title": "Anatomy",
                "url": "#anatomy",
                "items": []
            },
            {
                "title": "Examples",
                "url": "#examples",
                "items": [
                    {
                        "title": "Using a Portal",
                        "url": "#using-a-portal",
                        "items": []
                    },
                    {
                        "title": "Adding an arrow",
                        "url": "#adding-an-arrow",
                        "items": []
                    },
                    {
                        "title": "Listening for open and close events",
                        "url": "#listening-for-open-and-close-events",
                        "items": []
                    },
                    {
                        "title": "Control the open state",
                        "url": "#control-the-open-state",
                        "items": []
                    },
                    {
                        "title": "Modifying the close behavior",
                        "url": "#modifying-the-close-behavior",
                        "items": []
                    },
                    {
                        "title": "Changing the placement",
                        "url": "#changing-the-placement",
                        "items": []
                    },
                    {
                        "title": "Changing the modality",
                        "url": "#changing-the-modality",
                        "items": []
                    },
                    {
                        "title": "Using the Root Provider",
                        "url": "#using-the-root-provider",
                        "items": []
                    }
                ]
            },
            {
                "title": "API Reference",
                "url": "#api-reference",
                "items": []
            },
            {
                "title": "Accessibility",
                "url": "#accessibility",
                "items": [
                    {
                        "title": "Keyboard Support",
                        "url": "#keyboard-support",
                        "items": []
                    }
                ]
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:o}=arguments[0];function _createMdxContent(i){const r={a:\"a\",blockquote:\"blockquote\",code:\"code\",h2:\"h2\",h3:\"h3\",li:\"li\",p:\"p\",span:\"span\",ul:\"ul\",...i.components},{Anatomy:a,ComponentPreview:c,ComponentTypes:t,Example:l,KeyBindingsTable:s}=r;return a||_missingMdxReference(\"Anatomy\",!0),c||_missingMdxReference(\"ComponentPreview\",!0),t||_missingMdxReference(\"ComponentTypes\",!0),l||_missingMdxReference(\"Example\",!0),s||_missingMdxReference(\"KeyBindingsTable\",!0),o(e,{children:[n(c,{id:\"Popover\"}),\"\\n\",o(r.h2,{id:\"anatomy\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#anatomy\",children:n(r.span,{className:\"icon icon-link\"})}),\"Anatomy\"]}),\"\\n\",n(r.p,{children:\"To set up the popover correctly, you'll need to understand its anatomy and how we name its parts.\"}),\"\\n\",o(r.blockquote,{children:[\"\\n\",o(r.p,{children:[\"Each part includes a \",n(r.code,{children:\"data-part\"}),\" attribute to help identify them in the DOM.\"]}),\"\\n\"]}),\"\\n\",n(a,{id:\"popover\"}),\"\\n\",o(r.h2,{id:\"examples\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#examples\",children:n(r.span,{className:\"icon icon-link\"})}),\"Examples\"]}),\"\\n\",o(r.p,{children:[\"Learn how to use the \",n(r.code,{children:\"Popover\"}),\" component in your project. Let's take a look at the most basic example:\"]}),\"\\n\",n(l,{id:\"basic\"}),\"\\n\",o(r.h3,{id:\"using-a-portal\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-a-portal\",children:n(r.span,{className:\"icon icon-link\"})}),\"Using a Portal\"]}),\"\\n\",o(r.p,{children:[\"By default, the popover is rendered in the same DOM hierarchy as the trigger. To render the popover within a portal, set\\nthe \",n(r.code,{children:\"portalled\"}),\" prop to \",n(r.code,{children:\"true\"}),\".\"]}),\"\\n\",o(r.blockquote,{children:[\"\\n\",o(r.p,{children:[\"Note: This requires that you render the component within a \",n(r.code,{children:\"Portal\"}),\" based on the framework you use.\"]}),\"\\n\"]}),\"\\n\",n(l,{id:\"portalled\"}),\"\\n\",o(r.h3,{id:\"adding-an-arrow\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#adding-an-arrow\",children:n(r.span,{className:\"icon icon-link\"})}),\"Adding an arrow\"]}),\"\\n\",o(r.p,{children:[\"To render an arrow within the popover, render the component \",n(r.code,{children:\"Popover.Arrow\"}),\" and \",n(r.code,{children:\"Popover.ArrowTip\"}),\" as children of\\n\",n(r.code,{children:\"Popover.Positioner\"}),\".\"]}),\"\\n\",n(l,{id:\"arrow\"}),\"\\n\",o(r.h3,{id:\"listening-for-open-and-close-events\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#listening-for-open-and-close-events\",children:n(r.span,{className:\"icon icon-link\"})}),\"Listening for open and close events\"]}),\"\\n\",o(r.p,{children:[\"When the popover is opened or closed, we invoke the \",n(r.code,{children:\"onOpenChange\"}),\" callback.\"]}),\"\\n\",n(l,{id:\"on-open-change\"}),\"\\n\",o(r.h3,{id:\"control-the-open-state\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#control-the-open-state\",children:n(r.span,{className:\"icon icon-link\"})}),\"Control the open state\"]}),\"\\n\",o(r.p,{children:[\"Use the \",n(r.code,{children:\"isOpen\"}),\" prop to control the open state of the popover.\"]}),\"\\n\",n(l,{id:\"controlled\"}),\"\\n\",o(r.h3,{id:\"modifying-the-close-behavior\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#modifying-the-close-behavior\",children:n(r.span,{className:\"icon icon-link\"})}),\"Modifying the close behavior\"]}),\"\\n\",o(r.p,{children:[\"The popover is designed to close on blur and when the \",n(\"kbd\",{children:\"esc\"}),\" key is pressed.\"]}),\"\\n\",o(r.p,{children:[\"To prevent it from closing on blur (clicking or focusing outside), pass the \",n(r.code,{children:\"closeOnInteractOutside\"}),\" prop and set it to\\n\",n(r.code,{children:\"false\"}),\".\"]}),\"\\n\",o(r.p,{children:[\"To prevent it from closing when the \",n(\"kbd\",{children:\"esc\"}),\" key is pressed, pass the \",n(r.code,{children:\"closeOnEsc\"}),\" prop and set it to \",n(r.code,{children:\"false\"}),\".\"]}),\"\\n\",n(l,{id:\"close-behavior\"}),\"\\n\",o(r.h3,{id:\"changing-the-placement\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#changing-the-placement\",children:n(r.span,{className:\"icon icon-link\"})}),\"Changing the placement\"]}),\"\\n\",o(r.p,{children:[\"To change the placement of the popover, set the \",n(r.code,{children:\"positioning\"}),\" prop.\"]}),\"\\n\",n(l,{id:\"positioning\"}),\"\\n\",o(r.h3,{id:\"changing-the-modality\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#changing-the-modality\",children:n(r.span,{className:\"icon icon-link\"})}),\"Changing the modality\"]}),\"\\n\",n(r.p,{children:\"In some cases, you might want the popover to be modal. This means that it'll:\"}),\"\\n\",o(r.ul,{children:[\"\\n\",n(r.li,{children:\"trap focus within its content\"}),\"\\n\",n(r.li,{children:\"block scrolling on the body\"}),\"\\n\",n(r.li,{children:\"disable pointer interactions outside the popover\"}),\"\\n\",n(r.li,{children:\"hide content behind the popover from screen readers\"}),\"\\n\"]}),\"\\n\",o(r.p,{children:[\"To make the popover modal, set the \",n(r.code,{children:\"modal\"}),\" prop to \",n(r.code,{children:\"true\"}),\". When \",n(r.code,{children:\"modal={true}\"}),\", we set the \",n(r.code,{children:\"portalled\"}),\" attribute to\\n\",n(r.code,{children:\"true\"}),\" as well.\"]}),\"\\n\",n(l,{id:\"modal\"}),\"\\n\",o(r.h3,{id:\"using-the-root-provider\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-the-root-provider\",children:n(r.span,{className:\"icon icon-link\"})}),\"Using the Root Provider\"]}),\"\\n\",o(r.p,{children:[\"The \",n(r.code,{children:\"RootProvider\"}),\" component provides a context for the popover. It accepts the value of the \",n(r.code,{children:\"usePopover\"}),\" hook. You can\\nleverage it to access the component state and methods from outside the popover.\"]}),\"\\n\",n(l,{id:\"root-provider\"}),\"\\n\",o(r.blockquote,{children:[\"\\n\",o(r.p,{children:[\"If you're using the \",n(r.code,{children:\"RootProvider\"}),\" component, you don't need to use the \",n(r.code,{children:\"Root\"}),\" component.\"]}),\"\\n\"]}),\"\\n\",o(r.h2,{id:\"api-reference\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#api-reference\",children:n(r.span,{className:\"icon icon-link\"})}),\"API Reference\"]}),\"\\n\",n(t,{id:\"popover\"}),\"\\n\",o(r.h2,{id:\"accessibility\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#accessibility\",children:n(r.span,{className:\"icon icon-link\"})}),\"Accessibility\"]}),\"\\n\",o(r.h3,{id:\"keyboard-support\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#keyboard-support\",children:n(r.span,{className:\"icon icon-link\"})}),\"Keyboard Support\"]}),\"\\n\",n(s,{id:\"popover\"})]})}return{default:function(e={}){const{wrapper:o}=e.components||{};return o?n(o,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};function _missingMdxReference(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "<ComponentPreview id=\"Popover\" />\n\n## Anatomy\n\nTo set up the popover correctly, you'll need to understand its anatomy and how we name its parts.\n\n> Each part includes a `data-part` attribute to help identify them in the DOM.\n\n<Anatomy id=\"popover\" />\n\n## Examples\n\nLearn how to use the `Popover` component in your project. Let's take a look at the most basic example:\n\n<Example id=\"basic\" />\n\n### Using a Portal\n\nBy default, the popover is rendered in the same DOM hierarchy as the trigger. To render the popover within a portal, set\nthe `portalled` prop to `true`.\n\n> Note: This requires that you render the component within a `Portal` based on the framework you use.\n\n<Example id=\"portalled\" />\n\n### Adding an arrow\n\nTo render an arrow within the popover, render the component `Popover.Arrow` and `Popover.ArrowTip` as children of\n`Popover.Positioner`.\n\n<Example id=\"arrow\" />\n\n### Listening for open and close events\n\nWhen the popover is opened or closed, we invoke the `onOpenChange` callback.\n\n<Example id=\"on-open-change\" />\n\n### Control the open state\n\nUse the `isOpen` prop to control the open state of the popover.\n\n<Example id=\"controlled\" />\n\n### Modifying the close behavior\n\nThe popover is designed to close on blur and when the <kbd>esc</kbd> key is pressed.\n\nTo prevent it from closing on blur (clicking or focusing outside), pass the `closeOnInteractOutside` prop and set it to\n`false`.\n\nTo prevent it from closing when the <kbd>esc</kbd> key is pressed, pass the `closeOnEsc` prop and set it to `false`.\n\n<Example id=\"close-behavior\" />\n\n### Changing the placement\n\nTo change the placement of the popover, set the `positioning` prop.\n\n<Example id=\"positioning\" />\n\n### Changing the modality\n\nIn some cases, you might want the popover to be modal. This means that it'll:\n\n- trap focus within its content\n- block scrolling on the body\n- disable pointer interactions outside the popover\n- hide content behind the popover from screen readers\n\nTo make the popover modal, set the `modal` prop to `true`. When `modal={true}`, we set the `portalled` attribute to\n`true` as well.\n\n<Example id=\"modal\" />\n\n### Using the Root Provider\n\nThe `RootProvider` component provides a context for the popover. It accepts the value of the `usePopover` hook. You can\nleverage it to access the component state and methods from outside the popover.\n\n<Example id=\"root-provider\" />\n\n> If you're using the `RootProvider` component, you don't need to use the `Root` component.\n\n## API Reference\n\n<ComponentTypes id=\"popover\" />\n\n## Accessibility\n\n### Keyboard Support\n\n<KeyBindingsTable id=\"popover\" />",
        "slug": "components/popover",
        "category": "components"
    },
    {
        "id": "circular-progress",
        "title": "Progress - Circular",
        "description": "An element that shows either determinate or indeterminate progress.",
        "metadata": {
            "readingTime": 1,
            "wordCount": 235
        },
        "content": "<componentpreview id=\"ProgressCircular\">\n<h2>Anatomy</h2>\n<p>To set up the progress correctly, you'll need to understand its anatomy and how we name its parts.</p>\n<blockquote>\n<p>Each part includes a <code>data-part</code> attribute to help identify them in the DOM.</p>\n</blockquote>\n<anatomy id=\"circular-progress\">\n<h2>Examples</h2>\n<p>Learn how to use the <code>Progress</code> component in your project. Let's take a look at the most basic example:</p>\n<example id=\"basic\">\n<h3>Set a min and max value</h3>\n<p>By default, the maximum is <code>100</code>. If that's not what you want, you can easily specify a different bound by changing the\nvalue of the <code>max</code> prop. You can do the same with the minimum value by setting the <code>min</code> prop.</p>\n<p>For example, to show the user a progress from <code>10</code> to <code>30</code>, you can use:</p>\n<example id=\"min-max\">\n<h3>Indeterminate value</h3>\n<p>The progress component is determinate by default, with the value and max set to 50 and 100 respectively. To render an\nindeterminate progress, you will have to set the <code>value</code> to <code>null</code>.</p>\n<example id=\"indeterminate\">\n<h3>Showing a value text</h3>\n<p>Progress bars can only be interpreted by sighted users. To include a text description to support assistive technologies\nlike screen readers, use the <code>value</code> part in <code>translations</code>.</p>\n<example id=\"value-text\">\n<h3>Using the Root Provider</h3>\n<p>The <code>RootProvider</code> component provides a context for the progress. It accepts the value of the <code>useProgress</code> hook. You\ncan leverage it to access the component state and methods from outside the progress.</p>\n<example id=\"root-provider\">\n<blockquote>\n<p>If you're using the <code>RootProvider</code> component, you don't need to use the <code>Root</code> component.</p>\n</blockquote>\n<h2>API Reference</h2>\n<componenttypes id=\"progress\">\n<h2>Accessibility</h2>\n<p>Complies with the <a href=\"https://w3c.github.io/aria/#progressbar\">the progressbar role requirements.</a>.</p></componenttypes></example></example></example></example></example></anatomy></componentpreview>",
        "framework": "*",
        "toc": [
            {
                "title": "Anatomy",
                "url": "#anatomy",
                "items": []
            },
            {
                "title": "Examples",
                "url": "#examples",
                "items": [
                    {
                        "title": "Set a min and max value",
                        "url": "#set-a-min-and-max-value",
                        "items": []
                    },
                    {
                        "title": "Indeterminate value",
                        "url": "#indeterminate-value",
                        "items": []
                    },
                    {
                        "title": "Showing a value text",
                        "url": "#showing-a-value-text",
                        "items": []
                    },
                    {
                        "title": "Using the Root Provider",
                        "url": "#using-the-root-provider",
                        "items": []
                    }
                ]
            },
            {
                "title": "API Reference",
                "url": "#api-reference",
                "items": []
            },
            {
                "title": "Accessibility",
                "url": "#accessibility",
                "items": []
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:i}=arguments[0];function _createMdxContent(a){const o={a:\"a\",blockquote:\"blockquote\",code:\"code\",h2:\"h2\",h3:\"h3\",p:\"p\",span:\"span\",...a.components},{Anatomy:t,ComponentPreview:r,ComponentTypes:c,Example:s}=o;return t||_missingMdxReference(\"Anatomy\",!0),r||_missingMdxReference(\"ComponentPreview\",!0),c||_missingMdxReference(\"ComponentTypes\",!0),s||_missingMdxReference(\"Example\",!0),i(e,{children:[n(r,{id:\"ProgressCircular\"}),\"\\n\",i(o.h2,{id:\"anatomy\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#anatomy\",children:n(o.span,{className:\"icon icon-link\"})}),\"Anatomy\"]}),\"\\n\",n(o.p,{children:\"To set up the progress correctly, you'll need to understand its anatomy and how we name its parts.\"}),\"\\n\",i(o.blockquote,{children:[\"\\n\",i(o.p,{children:[\"Each part includes a \",n(o.code,{children:\"data-part\"}),\" attribute to help identify them in the DOM.\"]}),\"\\n\"]}),\"\\n\",n(t,{id:\"circular-progress\"}),\"\\n\",i(o.h2,{id:\"examples\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#examples\",children:n(o.span,{className:\"icon icon-link\"})}),\"Examples\"]}),\"\\n\",i(o.p,{children:[\"Learn how to use the \",n(o.code,{children:\"Progress\"}),\" component in your project. Let's take a look at the most basic example:\"]}),\"\\n\",n(s,{id:\"basic\"}),\"\\n\",i(o.h3,{id:\"set-a-min-and-max-value\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#set-a-min-and-max-value\",children:n(o.span,{className:\"icon icon-link\"})}),\"Set a min and max value\"]}),\"\\n\",i(o.p,{children:[\"By default, the maximum is \",n(o.code,{children:\"100\"}),\". If that's not what you want, you can easily specify a different bound by changing the\\nvalue of the \",n(o.code,{children:\"max\"}),\" prop. You can do the same with the minimum value by setting the \",n(o.code,{children:\"min\"}),\" prop.\"]}),\"\\n\",i(o.p,{children:[\"For example, to show the user a progress from \",n(o.code,{children:\"10\"}),\" to \",n(o.code,{children:\"30\"}),\", you can use:\"]}),\"\\n\",n(s,{id:\"min-max\"}),\"\\n\",i(o.h3,{id:\"indeterminate-value\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#indeterminate-value\",children:n(o.span,{className:\"icon icon-link\"})}),\"Indeterminate value\"]}),\"\\n\",i(o.p,{children:[\"The progress component is determinate by default, with the value and max set to 50 and 100 respectively. To render an\\nindeterminate progress, you will have to set the \",n(o.code,{children:\"value\"}),\" to \",n(o.code,{children:\"null\"}),\".\"]}),\"\\n\",n(s,{id:\"indeterminate\"}),\"\\n\",i(o.h3,{id:\"showing-a-value-text\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#showing-a-value-text\",children:n(o.span,{className:\"icon icon-link\"})}),\"Showing a value text\"]}),\"\\n\",i(o.p,{children:[\"Progress bars can only be interpreted by sighted users. To include a text description to support assistive technologies\\nlike screen readers, use the \",n(o.code,{children:\"value\"}),\" part in \",n(o.code,{children:\"translations\"}),\".\"]}),\"\\n\",n(s,{id:\"value-text\"}),\"\\n\",i(o.h3,{id:\"using-the-root-provider\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-the-root-provider\",children:n(o.span,{className:\"icon icon-link\"})}),\"Using the Root Provider\"]}),\"\\n\",i(o.p,{children:[\"The \",n(o.code,{children:\"RootProvider\"}),\" component provides a context for the progress. It accepts the value of the \",n(o.code,{children:\"useProgress\"}),\" hook. You\\ncan leverage it to access the component state and methods from outside the progress.\"]}),\"\\n\",n(s,{id:\"root-provider\"}),\"\\n\",i(o.blockquote,{children:[\"\\n\",i(o.p,{children:[\"If you're using the \",n(o.code,{children:\"RootProvider\"}),\" component, you don't need to use the \",n(o.code,{children:\"Root\"}),\" component.\"]}),\"\\n\"]}),\"\\n\",i(o.h2,{id:\"api-reference\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#api-reference\",children:n(o.span,{className:\"icon icon-link\"})}),\"API Reference\"]}),\"\\n\",n(c,{id:\"progress\"}),\"\\n\",i(o.h2,{id:\"accessibility\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#accessibility\",children:n(o.span,{className:\"icon icon-link\"})}),\"Accessibility\"]}),\"\\n\",i(o.p,{children:[\"Complies with the \",n(o.a,{href:\"https://w3c.github.io/aria/#progressbar\",children:\"the progressbar role requirements.\"}),\".\"]})]})}return{default:function(e={}){const{wrapper:i}=e.components||{};return i?n(i,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};function _missingMdxReference(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "<ComponentPreview id=\"ProgressCircular\" />\n\n## Anatomy\n\nTo set up the progress correctly, you'll need to understand its anatomy and how we name its parts.\n\n> Each part includes a `data-part` attribute to help identify them in the DOM.\n\n<Anatomy id=\"circular-progress\" />\n\n## Examples\n\nLearn how to use the `Progress` component in your project. Let's take a look at the most basic example:\n\n<Example id=\"basic\" />\n\n### Set a min and max value\n\nBy default, the maximum is `100`. If that's not what you want, you can easily specify a different bound by changing the\nvalue of the `max` prop. You can do the same with the minimum value by setting the `min` prop.\n\nFor example, to show the user a progress from `10` to `30`, you can use:\n\n<Example id=\"min-max\" />\n\n### Indeterminate value\n\nThe progress component is determinate by default, with the value and max set to 50 and 100 respectively. To render an\nindeterminate progress, you will have to set the `value` to `null`.\n\n<Example id=\"indeterminate\" />\n\n### Showing a value text\n\nProgress bars can only be interpreted by sighted users. To include a text description to support assistive technologies\nlike screen readers, use the `value` part in `translations`.\n\n<Example id=\"value-text\" />\n\n### Using the Root Provider\n\nThe `RootProvider` component provides a context for the progress. It accepts the value of the `useProgress` hook. You\ncan leverage it to access the component state and methods from outside the progress.\n\n<Example id=\"root-provider\" />\n\n> If you're using the `RootProvider` component, you don't need to use the `Root` component.\n\n## API Reference\n\n<ComponentTypes id=\"progress\" />\n\n## Accessibility\n\nComplies with the [the progressbar role requirements.](https://w3c.github.io/aria/#progressbar).",
        "slug": "components/progress-circular",
        "category": "components"
    },
    {
        "id": "linear-progress",
        "title": "Progress - Linear",
        "description": "An element that shows either determinate or indeterminate progress.",
        "metadata": {
            "readingTime": 1,
            "wordCount": 277
        },
        "content": "<componentpreview id=\"ProgressLinear\">\n<h2>Anatomy</h2>\n<p>To set up the progress correctly, you'll need to understand its anatomy and how we name its parts.</p>\n<blockquote>\n<p>Each part includes a <code>data-part</code> attribute to help identify them in the DOM.</p>\n</blockquote>\n<anatomy id=\"linear-progress\">\n<h2>Examples</h2>\n<p>Learn how to use the <code>Progress</code> component in your project. Let's take a look at the most basic example:</p>\n<example id=\"basic\">\n<h3>Set a min and max value</h3>\n<p>By default, the maximum is <code>100</code>. If that's not what you want, you can easily specify a different bound by changing the\nvalue of the <code>max</code> prop. You can do the same with the minimum value by setting the <code>min</code> prop.</p>\n<p>For example, to show the user a progress from <code>10</code> to <code>30</code>, you can use:</p>\n<example id=\"min-max\">\n<h3>Indeterminate progress</h3>\n<p>The progress component is determinate by default, with the value and max set to 50 and 100 respectively. To render an\nindeterminate progress, you will have to set the <code>value</code> to <code>null</code>.</p>\n<example id=\"indeterminate\">\n<h3>Showing a value text</h3>\n<p>Progress bars can only be interpreted by sighted users. To include a text description to support assistive technologies\nlike screen readers, use the <code>value</code> part in <code>translations</code>.</p>\n<example id=\"value-text\">\n<h3>Changing the orientation</h3>\n<p>By default, the progress is assumed to be horizontal. To change the orientation to vertical, set the orientation\nproperty in the machine's context to vertical.</p>\n<blockquote>\n<p>Don't forget to change the styles of the vertical progress by specifying its height</p>\n</blockquote>\n<example id=\"vertical\">\n<h3>Using the Root Provider</h3>\n<p>The <code>RootProvider</code> component provides a context for the progress. It accepts the value of the <code>useProgress</code> hook. You\ncan leverage it to access the component state and methods from outside the progress.</p>\n<example id=\"root-provider\">\n<blockquote>\n<p>If you're using the <code>RootProvider</code> component, you don't need to use the <code>Root</code> component.</p>\n</blockquote>\n<h2>API Reference</h2>\n<componenttypes id=\"progress\">\n<h2>Accessibility</h2>\n<p>Complies with the <a href=\"https://w3c.github.io/aria/#progressbar\">the progressbar role requirements.</a>.</p></componenttypes></example></example></example></example></example></example></anatomy></componentpreview>",
        "framework": "*",
        "toc": [
            {
                "title": "Anatomy",
                "url": "#anatomy",
                "items": []
            },
            {
                "title": "Examples",
                "url": "#examples",
                "items": [
                    {
                        "title": "Set a min and max value",
                        "url": "#set-a-min-and-max-value",
                        "items": []
                    },
                    {
                        "title": "Indeterminate progress",
                        "url": "#indeterminate-progress",
                        "items": []
                    },
                    {
                        "title": "Showing a value text",
                        "url": "#showing-a-value-text",
                        "items": []
                    },
                    {
                        "title": "Changing the orientation",
                        "url": "#changing-the-orientation",
                        "items": []
                    },
                    {
                        "title": "Using the Root Provider",
                        "url": "#using-the-root-provider",
                        "items": []
                    }
                ]
            },
            {
                "title": "API Reference",
                "url": "#api-reference",
                "items": []
            },
            {
                "title": "Accessibility",
                "url": "#accessibility",
                "items": []
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:i}=arguments[0];function _createMdxContent(o){const a={a:\"a\",blockquote:\"blockquote\",code:\"code\",h2:\"h2\",h3:\"h3\",p:\"p\",span:\"span\",...o.components},{Anatomy:t,ComponentPreview:r,ComponentTypes:s,Example:c}=a;return t||_missingMdxReference(\"Anatomy\",!0),r||_missingMdxReference(\"ComponentPreview\",!0),s||_missingMdxReference(\"ComponentTypes\",!0),c||_missingMdxReference(\"Example\",!0),i(e,{children:[n(r,{id:\"ProgressLinear\"}),\"\\n\",i(a.h2,{id:\"anatomy\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#anatomy\",children:n(a.span,{className:\"icon icon-link\"})}),\"Anatomy\"]}),\"\\n\",n(a.p,{children:\"To set up the progress correctly, you'll need to understand its anatomy and how we name its parts.\"}),\"\\n\",i(a.blockquote,{children:[\"\\n\",i(a.p,{children:[\"Each part includes a \",n(a.code,{children:\"data-part\"}),\" attribute to help identify them in the DOM.\"]}),\"\\n\"]}),\"\\n\",n(t,{id:\"linear-progress\"}),\"\\n\",i(a.h2,{id:\"examples\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#examples\",children:n(a.span,{className:\"icon icon-link\"})}),\"Examples\"]}),\"\\n\",i(a.p,{children:[\"Learn how to use the \",n(a.code,{children:\"Progress\"}),\" component in your project. Let's take a look at the most basic example:\"]}),\"\\n\",n(c,{id:\"basic\"}),\"\\n\",i(a.h3,{id:\"set-a-min-and-max-value\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#set-a-min-and-max-value\",children:n(a.span,{className:\"icon icon-link\"})}),\"Set a min and max value\"]}),\"\\n\",i(a.p,{children:[\"By default, the maximum is \",n(a.code,{children:\"100\"}),\". If that's not what you want, you can easily specify a different bound by changing the\\nvalue of the \",n(a.code,{children:\"max\"}),\" prop. You can do the same with the minimum value by setting the \",n(a.code,{children:\"min\"}),\" prop.\"]}),\"\\n\",i(a.p,{children:[\"For example, to show the user a progress from \",n(a.code,{children:\"10\"}),\" to \",n(a.code,{children:\"30\"}),\", you can use:\"]}),\"\\n\",n(c,{id:\"min-max\"}),\"\\n\",i(a.h3,{id:\"indeterminate-progress\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#indeterminate-progress\",children:n(a.span,{className:\"icon icon-link\"})}),\"Indeterminate progress\"]}),\"\\n\",i(a.p,{children:[\"The progress component is determinate by default, with the value and max set to 50 and 100 respectively. To render an\\nindeterminate progress, you will have to set the \",n(a.code,{children:\"value\"}),\" to \",n(a.code,{children:\"null\"}),\".\"]}),\"\\n\",n(c,{id:\"indeterminate\"}),\"\\n\",i(a.h3,{id:\"showing-a-value-text\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#showing-a-value-text\",children:n(a.span,{className:\"icon icon-link\"})}),\"Showing a value text\"]}),\"\\n\",i(a.p,{children:[\"Progress bars can only be interpreted by sighted users. To include a text description to support assistive technologies\\nlike screen readers, use the \",n(a.code,{children:\"value\"}),\" part in \",n(a.code,{children:\"translations\"}),\".\"]}),\"\\n\",n(c,{id:\"value-text\"}),\"\\n\",i(a.h3,{id:\"changing-the-orientation\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#changing-the-orientation\",children:n(a.span,{className:\"icon icon-link\"})}),\"Changing the orientation\"]}),\"\\n\",n(a.p,{children:\"By default, the progress is assumed to be horizontal. To change the orientation to vertical, set the orientation\\nproperty in the machine's context to vertical.\"}),\"\\n\",i(a.blockquote,{children:[\"\\n\",n(a.p,{children:\"Don't forget to change the styles of the vertical progress by specifying its height\"}),\"\\n\"]}),\"\\n\",n(c,{id:\"vertical\"}),\"\\n\",i(a.h3,{id:\"using-the-root-provider\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-the-root-provider\",children:n(a.span,{className:\"icon icon-link\"})}),\"Using the Root Provider\"]}),\"\\n\",i(a.p,{children:[\"The \",n(a.code,{children:\"RootProvider\"}),\" component provides a context for the progress. It accepts the value of the \",n(a.code,{children:\"useProgress\"}),\" hook. You\\ncan leverage it to access the component state and methods from outside the progress.\"]}),\"\\n\",n(c,{id:\"root-provider\"}),\"\\n\",i(a.blockquote,{children:[\"\\n\",i(a.p,{children:[\"If you're using the \",n(a.code,{children:\"RootProvider\"}),\" component, you don't need to use the \",n(a.code,{children:\"Root\"}),\" component.\"]}),\"\\n\"]}),\"\\n\",i(a.h2,{id:\"api-reference\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#api-reference\",children:n(a.span,{className:\"icon icon-link\"})}),\"API Reference\"]}),\"\\n\",n(s,{id:\"progress\"}),\"\\n\",i(a.h2,{id:\"accessibility\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#accessibility\",children:n(a.span,{className:\"icon icon-link\"})}),\"Accessibility\"]}),\"\\n\",i(a.p,{children:[\"Complies with the \",n(a.a,{href:\"https://w3c.github.io/aria/#progressbar\",children:\"the progressbar role requirements.\"}),\".\"]})]})}return{default:function(e={}){const{wrapper:i}=e.components||{};return i?n(i,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};function _missingMdxReference(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "<ComponentPreview id=\"ProgressLinear\" />\n\n## Anatomy\n\nTo set up the progress correctly, you'll need to understand its anatomy and how we name its parts.\n\n> Each part includes a `data-part` attribute to help identify them in the DOM.\n\n<Anatomy id=\"linear-progress\" />\n\n## Examples\n\nLearn how to use the `Progress` component in your project. Let's take a look at the most basic example:\n\n<Example id=\"basic\" />\n\n### Set a min and max value\n\nBy default, the maximum is `100`. If that's not what you want, you can easily specify a different bound by changing the\nvalue of the `max` prop. You can do the same with the minimum value by setting the `min` prop.\n\nFor example, to show the user a progress from `10` to `30`, you can use:\n\n<Example id=\"min-max\" />\n\n### Indeterminate progress\n\nThe progress component is determinate by default, with the value and max set to 50 and 100 respectively. To render an\nindeterminate progress, you will have to set the `value` to `null`.\n\n<Example id=\"indeterminate\" />\n\n### Showing a value text\n\nProgress bars can only be interpreted by sighted users. To include a text description to support assistive technologies\nlike screen readers, use the `value` part in `translations`.\n\n<Example id=\"value-text\" />\n\n### Changing the orientation\n\nBy default, the progress is assumed to be horizontal. To change the orientation to vertical, set the orientation\nproperty in the machine's context to vertical.\n\n> Don't forget to change the styles of the vertical progress by specifying its height\n\n<Example id=\"vertical\" />\n\n### Using the Root Provider\n\nThe `RootProvider` component provides a context for the progress. It accepts the value of the `useProgress` hook. You\ncan leverage it to access the component state and methods from outside the progress.\n\n<Example id=\"root-provider\" />\n\n> If you're using the `RootProvider` component, you don't need to use the `Root` component.\n\n## API Reference\n\n<ComponentTypes id=\"progress\" />\n\n## Accessibility\n\nComplies with the [the progressbar role requirements.](https://w3c.github.io/aria/#progressbar).",
        "slug": "components/progress-linear",
        "category": "components"
    },
    {
        "id": "qr-code",
        "title": "QR Code",
        "description": "A component that generates a QR code based on the provided data.",
        "metadata": {
            "readingTime": 1,
            "wordCount": 246
        },
        "content": "<componentpreview id=\"QrCode\">\n<h2>Anatomy</h2>\n<p>To set up the QR code correctly, you'll need to understand its anatomy and how we name its parts.</p>\n<blockquote>\n<p>Each part includes a <code>data-part</code> attribute to help identify them in the DOM.</p>\n</blockquote>\n<anatomy id=\"qr-code\">\n<h2>Examples</h2>\n<p>Learn how to use the <code>QR Code</code> component in your project. Let's take a look at the most basic example:</p>\n<example id=\"basic\">\n<h3>Download a QR Code</h3>\n<p>You can download the QR code by using the <code>QrCode.DownloadTrigger</code>. You will have to provide the <code>fileName</code> and the\n<code>mimeType</code> of the image.</p>\n<pre><code class=\"language-tsx\">&#x3C;QrCode.DownloadTrigger fileName=\"qr-code.png\" mimeType=\"image/png\">\n  Download\n&#x3C;/QrCode.DownloadTrigger>\n</code></pre>\n<h3>With Overlay</h3>\n<p>You can also add a logo or overlay to the QR code. This is useful when you want to brand the QR code.</p>\n<example id=\"with-overlay\">\n<h3>Error Correction</h3>\n<p>In cases where the link is too long or the logo overlay covers a significant area, the error correction level can be\nincreased.</p>\n<p>Use the <code>encoding.ecc</code> or <code>encoding.boostEcc</code> property to set the error correction level:</p>\n<ul>\n<li><code>L</code>: Allows recovery of up to 7% data loss (default)</li>\n<li><code>M</code>: Allows recovery of up to 15% data loss</li>\n<li><code>Q</code>: Allows recovery of up to 25% data loss</li>\n<li><code>H</code>: Allows recovery of up to 30% data loss</li>\n</ul>\n<example id=\"error-correction\">\n<h3>Using the Root Provider</h3>\n<p>The <code>RootProvider</code> component provides a context for the QR code. It accepts the value of the <code>useQrCode</code> hook. You can\nleverage it to access the component state and methods from outside the QR code.</p>\n<example id=\"root-provider\">\n<blockquote>\n<p>If you're using the <code>RootProvider</code> component, you don't need to use the <code>Root</code> component.</p>\n</blockquote>\n<h2>API Reference</h2>\n<componenttypes id=\"qr-code\"></componenttypes></example></example></example></example></anatomy></componentpreview>",
        "framework": "*",
        "toc": [
            {
                "title": "Anatomy",
                "url": "#anatomy",
                "items": []
            },
            {
                "title": "Examples",
                "url": "#examples",
                "items": [
                    {
                        "title": "Download a QR Code",
                        "url": "#download-a-qr-code",
                        "items": []
                    },
                    {
                        "title": "With Overlay",
                        "url": "#with-overlay",
                        "items": []
                    },
                    {
                        "title": "Error Correction",
                        "url": "#error-correction",
                        "items": []
                    },
                    {
                        "title": "Using the Root Provider",
                        "url": "#using-the-root-provider",
                        "items": []
                    }
                ]
            },
            {
                "title": "API Reference",
                "url": "#api-reference",
                "items": []
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:o}=arguments[0];function _createMdxContent(r){const i={a:\"a\",blockquote:\"blockquote\",code:\"code\",h2:\"h2\",h3:\"h3\",li:\"li\",p:\"p\",pre:\"pre\",span:\"span\",ul:\"ul\",...r.components},{Anatomy:c,ComponentPreview:a,ComponentTypes:d,Example:t}=i;return c||_missingMdxReference(\"Anatomy\",!0),a||_missingMdxReference(\"ComponentPreview\",!0),d||_missingMdxReference(\"ComponentTypes\",!0),t||_missingMdxReference(\"Example\",!0),o(e,{children:[n(a,{id:\"QrCode\"}),\"\\n\",o(i.h2,{id:\"anatomy\",children:[n(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#anatomy\",children:n(i.span,{className:\"icon icon-link\"})}),\"Anatomy\"]}),\"\\n\",n(i.p,{children:\"To set up the QR code correctly, you'll need to understand its anatomy and how we name its parts.\"}),\"\\n\",o(i.blockquote,{children:[\"\\n\",o(i.p,{children:[\"Each part includes a \",n(i.code,{children:\"data-part\"}),\" attribute to help identify them in the DOM.\"]}),\"\\n\"]}),\"\\n\",n(c,{id:\"qr-code\"}),\"\\n\",o(i.h2,{id:\"examples\",children:[n(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#examples\",children:n(i.span,{className:\"icon icon-link\"})}),\"Examples\"]}),\"\\n\",o(i.p,{children:[\"Learn how to use the \",n(i.code,{children:\"QR Code\"}),\" component in your project. Let's take a look at the most basic example:\"]}),\"\\n\",n(t,{id:\"basic\"}),\"\\n\",o(i.h3,{id:\"download-a-qr-code\",children:[n(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#download-a-qr-code\",children:n(i.span,{className:\"icon icon-link\"})}),\"Download a QR Code\"]}),\"\\n\",o(i.p,{children:[\"You can download the QR code by using the \",n(i.code,{children:\"QrCode.DownloadTrigger\"}),\". You will have to provide the \",n(i.code,{children:\"fileName\"}),\" and the\\n\",n(i.code,{children:\"mimeType\"}),\" of the image.\"]}),\"\\n\",n(i.pre,{children:n(i.code,{className:\"language-tsx\",children:'<QrCode.DownloadTrigger fileName=\"qr-code.png\" mimeType=\"image/png\">\\n  Download\\n</QrCode.DownloadTrigger>\\n'})}),\"\\n\",o(i.h3,{id:\"with-overlay\",children:[n(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#with-overlay\",children:n(i.span,{className:\"icon icon-link\"})}),\"With Overlay\"]}),\"\\n\",n(i.p,{children:\"You can also add a logo or overlay to the QR code. This is useful when you want to brand the QR code.\"}),\"\\n\",n(t,{id:\"with-overlay\"}),\"\\n\",o(i.h3,{id:\"error-correction\",children:[n(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#error-correction\",children:n(i.span,{className:\"icon icon-link\"})}),\"Error Correction\"]}),\"\\n\",n(i.p,{children:\"In cases where the link is too long or the logo overlay covers a significant area, the error correction level can be\\nincreased.\"}),\"\\n\",o(i.p,{children:[\"Use the \",n(i.code,{children:\"encoding.ecc\"}),\" or \",n(i.code,{children:\"encoding.boostEcc\"}),\" property to set the error correction level:\"]}),\"\\n\",o(i.ul,{children:[\"\\n\",o(i.li,{children:[n(i.code,{children:\"L\"}),\": Allows recovery of up to 7% data loss (default)\"]}),\"\\n\",o(i.li,{children:[n(i.code,{children:\"M\"}),\": Allows recovery of up to 15% data loss\"]}),\"\\n\",o(i.li,{children:[n(i.code,{children:\"Q\"}),\": Allows recovery of up to 25% data loss\"]}),\"\\n\",o(i.li,{children:[n(i.code,{children:\"H\"}),\": Allows recovery of up to 30% data loss\"]}),\"\\n\"]}),\"\\n\",n(t,{id:\"error-correction\"}),\"\\n\",o(i.h3,{id:\"using-the-root-provider\",children:[n(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-the-root-provider\",children:n(i.span,{className:\"icon icon-link\"})}),\"Using the Root Provider\"]}),\"\\n\",o(i.p,{children:[\"The \",n(i.code,{children:\"RootProvider\"}),\" component provides a context for the QR code. It accepts the value of the \",n(i.code,{children:\"useQrCode\"}),\" hook. You can\\nleverage it to access the component state and methods from outside the QR code.\"]}),\"\\n\",n(t,{id:\"root-provider\"}),\"\\n\",o(i.blockquote,{children:[\"\\n\",o(i.p,{children:[\"If you're using the \",n(i.code,{children:\"RootProvider\"}),\" component, you don't need to use the \",n(i.code,{children:\"Root\"}),\" component.\"]}),\"\\n\"]}),\"\\n\",o(i.h2,{id:\"api-reference\",children:[n(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#api-reference\",children:n(i.span,{className:\"icon icon-link\"})}),\"API Reference\"]}),\"\\n\",n(d,{id:\"qr-code\"})]})}return{default:function(e={}){const{wrapper:o}=e.components||{};return o?n(o,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};function _missingMdxReference(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "<ComponentPreview id=\"QrCode\" />\n\n## Anatomy\n\nTo set up the QR code correctly, you'll need to understand its anatomy and how we name its parts.\n\n> Each part includes a `data-part` attribute to help identify them in the DOM.\n\n<Anatomy id=\"qr-code\" />\n\n## Examples\n\nLearn how to use the `QR Code` component in your project. Let's take a look at the most basic example:\n\n<Example id=\"basic\" />\n\n### Download a QR Code\n\nYou can download the QR code by using the `QrCode.DownloadTrigger`. You will have to provide the `fileName` and the\n`mimeType` of the image.\n\n```tsx\n<QrCode.DownloadTrigger fileName=\"qr-code.png\" mimeType=\"image/png\">\n  Download\n</QrCode.DownloadTrigger>\n```\n\n### With Overlay\n\nYou can also add a logo or overlay to the QR code. This is useful when you want to brand the QR code.\n\n<Example id=\"with-overlay\" />\n\n### Error Correction\n\nIn cases where the link is too long or the logo overlay covers a significant area, the error correction level can be\nincreased.\n\nUse the `encoding.ecc` or `encoding.boostEcc` property to set the error correction level:\n\n- `L`: Allows recovery of up to 7% data loss (default)\n- `M`: Allows recovery of up to 15% data loss\n- `Q`: Allows recovery of up to 25% data loss\n- `H`: Allows recovery of up to 30% data loss\n\n<Example id=\"error-correction\" />\n\n### Using the Root Provider\n\nThe `RootProvider` component provides a context for the QR code. It accepts the value of the `useQrCode` hook. You can\nleverage it to access the component state and methods from outside the QR code.\n\n<Example id=\"root-provider\" />\n\n> If you're using the `RootProvider` component, you don't need to use the `Root` component.\n\n## API Reference\n\n<ComponentTypes id=\"qr-code\" />",
        "slug": "components/qr-code",
        "category": "components"
    },
    {
        "id": "radio-group",
        "title": "Radio Group",
        "description": "Allows single selection from multiple options.",
        "metadata": {
            "readingTime": 1,
            "wordCount": 252
        },
        "content": "<componentpreview id=\"RadioGroup\">\n<h2>Anatomy</h2>\n<p>To set up the radio group correctly, you'll need to understand its anatomy and how we name its parts.</p>\n<blockquote>\n<p>Each part includes a <code>data-part</code> attribute to help identify them in the DOM.</p>\n</blockquote>\n<anatomy id=\"radio-group\">\n<h3>Design impact on the asChild property</h3>\n<p>The <code>RadioGroup.Item</code> element of the radio group is a <code>label</code> element. This is because the radio group is a form control\nand should be associated with a label to provide context and meaning to the user. Otherwise, the HTML and accessibility\nstructure will be invalid.</p>\n<blockquote>\n<p>If you need to use the <code>asChild</code> property, make sure that the <code>label</code> element is the direct child of the\n<code>RadioGroup.Item</code> component.</p>\n</blockquote>\n<h2>Examples</h2>\n<p>Learn how to use the <code>RadioGroup</code> component in your project. Let's take a look at the most basic example:</p>\n<example id=\"basic\">\n<h3>Disabling the radio group</h3>\n<p>To make a radio group disabled, set the <code>disabled</code> prop to <code>true</code>.</p>\n<example id=\"disabled\">\n<h3>Setting the initial value</h3>\n<p>To set the radio group's initial value, set the <code>defaultValue</code> prop to the value of the radio item to be selected by\ndefault.</p>\n<example id=\"initial-value\">\n<h3>Listening for changes</h3>\n<p>When the radio group value changes, the <code>onValueChange</code> callback is invoked.</p>\n<example id=\"on-event\">\n<h3>Using the Root Provider</h3>\n<p>The <code>RootProvider</code> component provides a context for the radio-group. It accepts the value of the <code>useRadio-group</code> hook.\nYou can leverage it to access the component state and methods from outside the radio-group.</p>\n<example id=\"root-provider\">\n<blockquote>\n<p>If you're using the <code>RootProvider</code> component, you don't need to use the <code>Root</code> component.</p>\n</blockquote>\n<h2>API Reference</h2>\n<componenttypes id=\"radio-group\">\n<h2>Accessibility</h2>\n<p>Complies with the <a href=\"https://www.w3.org/WAI/ARIA/apg/patterns/radio/\">Radio WAI-ARIA design pattern</a>.</p>\n<h3>Keyboard Support</h3>\n<keybindingstable id=\"radio-group\"></keybindingstable></componenttypes></example></example></example></example></example></anatomy></componentpreview>",
        "framework": "*",
        "toc": [
            {
                "title": "Anatomy",
                "url": "#anatomy",
                "items": [
                    {
                        "title": "Design impact on the asChild property",
                        "url": "#design-impact-on-the-aschild-property",
                        "items": []
                    }
                ]
            },
            {
                "title": "Examples",
                "url": "#examples",
                "items": [
                    {
                        "title": "Disabling the radio group",
                        "url": "#disabling-the-radio-group",
                        "items": []
                    },
                    {
                        "title": "Setting the initial value",
                        "url": "#setting-the-initial-value",
                        "items": []
                    },
                    {
                        "title": "Listening for changes",
                        "url": "#listening-for-changes",
                        "items": []
                    },
                    {
                        "title": "Using the Root Provider",
                        "url": "#using-the-root-provider",
                        "items": []
                    }
                ]
            },
            {
                "title": "API Reference",
                "url": "#api-reference",
                "items": []
            },
            {
                "title": "Accessibility",
                "url": "#accessibility",
                "items": [
                    {
                        "title": "Keyboard Support",
                        "url": "#keyboard-support",
                        "items": []
                    }
                ]
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:i}=arguments[0];function _createMdxContent(o){const a={a:\"a\",blockquote:\"blockquote\",code:\"code\",h2:\"h2\",h3:\"h3\",p:\"p\",span:\"span\",...o.components},{Anatomy:t,ComponentPreview:r,ComponentTypes:c,Example:d,KeyBindingsTable:s}=a;return t||_missingMdxReference(\"Anatomy\",!0),r||_missingMdxReference(\"ComponentPreview\",!0),c||_missingMdxReference(\"ComponentTypes\",!0),d||_missingMdxReference(\"Example\",!0),s||_missingMdxReference(\"KeyBindingsTable\",!0),i(e,{children:[n(r,{id:\"RadioGroup\"}),\"\\n\",i(a.h2,{id:\"anatomy\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#anatomy\",children:n(a.span,{className:\"icon icon-link\"})}),\"Anatomy\"]}),\"\\n\",n(a.p,{children:\"To set up the radio group correctly, you'll need to understand its anatomy and how we name its parts.\"}),\"\\n\",i(a.blockquote,{children:[\"\\n\",i(a.p,{children:[\"Each part includes a \",n(a.code,{children:\"data-part\"}),\" attribute to help identify them in the DOM.\"]}),\"\\n\"]}),\"\\n\",n(t,{id:\"radio-group\"}),\"\\n\",i(a.h3,{id:\"design-impact-on-the-aschild-property\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#design-impact-on-the-aschild-property\",children:n(a.span,{className:\"icon icon-link\"})}),\"Design impact on the asChild property\"]}),\"\\n\",i(a.p,{children:[\"The \",n(a.code,{children:\"RadioGroup.Item\"}),\" element of the radio group is a \",n(a.code,{children:\"label\"}),\" element. This is because the radio group is a form control\\nand should be associated with a label to provide context and meaning to the user. Otherwise, the HTML and accessibility\\nstructure will be invalid.\"]}),\"\\n\",i(a.blockquote,{children:[\"\\n\",i(a.p,{children:[\"If you need to use the \",n(a.code,{children:\"asChild\"}),\" property, make sure that the \",n(a.code,{children:\"label\"}),\" element is the direct child of the\\n\",n(a.code,{children:\"RadioGroup.Item\"}),\" component.\"]}),\"\\n\"]}),\"\\n\",i(a.h2,{id:\"examples\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#examples\",children:n(a.span,{className:\"icon icon-link\"})}),\"Examples\"]}),\"\\n\",i(a.p,{children:[\"Learn how to use the \",n(a.code,{children:\"RadioGroup\"}),\" component in your project. Let's take a look at the most basic example:\"]}),\"\\n\",n(d,{id:\"basic\"}),\"\\n\",i(a.h3,{id:\"disabling-the-radio-group\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#disabling-the-radio-group\",children:n(a.span,{className:\"icon icon-link\"})}),\"Disabling the radio group\"]}),\"\\n\",i(a.p,{children:[\"To make a radio group disabled, set the \",n(a.code,{children:\"disabled\"}),\" prop to \",n(a.code,{children:\"true\"}),\".\"]}),\"\\n\",n(d,{id:\"disabled\"}),\"\\n\",i(a.h3,{id:\"setting-the-initial-value\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#setting-the-initial-value\",children:n(a.span,{className:\"icon icon-link\"})}),\"Setting the initial value\"]}),\"\\n\",i(a.p,{children:[\"To set the radio group's initial value, set the \",n(a.code,{children:\"defaultValue\"}),\" prop to the value of the radio item to be selected by\\ndefault.\"]}),\"\\n\",n(d,{id:\"initial-value\"}),\"\\n\",i(a.h3,{id:\"listening-for-changes\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#listening-for-changes\",children:n(a.span,{className:\"icon icon-link\"})}),\"Listening for changes\"]}),\"\\n\",i(a.p,{children:[\"When the radio group value changes, the \",n(a.code,{children:\"onValueChange\"}),\" callback is invoked.\"]}),\"\\n\",n(d,{id:\"on-event\"}),\"\\n\",i(a.h3,{id:\"using-the-root-provider\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-the-root-provider\",children:n(a.span,{className:\"icon icon-link\"})}),\"Using the Root Provider\"]}),\"\\n\",i(a.p,{children:[\"The \",n(a.code,{children:\"RootProvider\"}),\" component provides a context for the radio-group. It accepts the value of the \",n(a.code,{children:\"useRadio-group\"}),\" hook.\\nYou can leverage it to access the component state and methods from outside the radio-group.\"]}),\"\\n\",n(d,{id:\"root-provider\"}),\"\\n\",i(a.blockquote,{children:[\"\\n\",i(a.p,{children:[\"If you're using the \",n(a.code,{children:\"RootProvider\"}),\" component, you don't need to use the \",n(a.code,{children:\"Root\"}),\" component.\"]}),\"\\n\"]}),\"\\n\",i(a.h2,{id:\"api-reference\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#api-reference\",children:n(a.span,{className:\"icon icon-link\"})}),\"API Reference\"]}),\"\\n\",n(c,{id:\"radio-group\"}),\"\\n\",i(a.h2,{id:\"accessibility\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#accessibility\",children:n(a.span,{className:\"icon icon-link\"})}),\"Accessibility\"]}),\"\\n\",i(a.p,{children:[\"Complies with the \",n(a.a,{href:\"https://www.w3.org/WAI/ARIA/apg/patterns/radio/\",children:\"Radio WAI-ARIA design pattern\"}),\".\"]}),\"\\n\",i(a.h3,{id:\"keyboard-support\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#keyboard-support\",children:n(a.span,{className:\"icon icon-link\"})}),\"Keyboard Support\"]}),\"\\n\",n(s,{id:\"radio-group\"})]})}return{default:function(e={}){const{wrapper:i}=e.components||{};return i?n(i,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};function _missingMdxReference(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "<ComponentPreview id=\"RadioGroup\" />\n\n## Anatomy\n\nTo set up the radio group correctly, you'll need to understand its anatomy and how we name its parts.\n\n> Each part includes a `data-part` attribute to help identify them in the DOM.\n\n<Anatomy id=\"radio-group\" />\n\n### Design impact on the asChild property\n\nThe `RadioGroup.Item` element of the radio group is a `label` element. This is because the radio group is a form control\nand should be associated with a label to provide context and meaning to the user. Otherwise, the HTML and accessibility\nstructure will be invalid.\n\n> If you need to use the `asChild` property, make sure that the `label` element is the direct child of the\n> `RadioGroup.Item` component.\n\n## Examples\n\nLearn how to use the `RadioGroup` component in your project. Let's take a look at the most basic example:\n\n<Example id=\"basic\" />\n\n### Disabling the radio group\n\nTo make a radio group disabled, set the `disabled` prop to `true`.\n\n<Example id=\"disabled\" />\n\n### Setting the initial value\n\nTo set the radio group's initial value, set the `defaultValue` prop to the value of the radio item to be selected by\ndefault.\n\n<Example id=\"initial-value\" />\n\n### Listening for changes\n\nWhen the radio group value changes, the `onValueChange` callback is invoked.\n\n<Example id=\"on-event\" />\n\n### Using the Root Provider\n\nThe `RootProvider` component provides a context for the radio-group. It accepts the value of the `useRadio-group` hook.\nYou can leverage it to access the component state and methods from outside the radio-group.\n\n<Example id=\"root-provider\" />\n\n> If you're using the `RootProvider` component, you don't need to use the `Root` component.\n\n## API Reference\n\n<ComponentTypes id=\"radio-group\" />\n\n## Accessibility\n\nComplies with the [Radio WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/radio/).\n\n### Keyboard Support\n\n<KeyBindingsTable id=\"radio-group\" />",
        "slug": "components/radio-group",
        "category": "components"
    },
    {
        "id": "rating-group",
        "title": "Rating Group",
        "description": "Allows users to rate items using a set of icons.",
        "metadata": {
            "readingTime": 1,
            "wordCount": 259
        },
        "content": "<componentpreview id=\"RatingGroup\">\n<h2>Anatomy</h2>\n<p>To set up the rating correctly, you'll need to understand its anatomy and how we name its parts.</p>\n<blockquote>\n<p>Each part includes a <code>data-part</code> attribute to help identify them in the DOM.</p>\n</blockquote>\n<anatomy id=\"rating-group\">\n<h2>Examples</h2>\n<p>Learn how to use the <code>RatingGroup</code> component in your project. Let's take a look at the most basic example:</p>\n<example id=\"basic\">\n<h3>Using half ratings</h3>\n<p>Allow <code>0.5</code> value steps by setting the <code>allowHalf</code> prop to <code>true</code>. Ensure to render the correct icon if the <code>isHalf</code>\nvalue is set in the Rating components render callback.</p>\n<example id=\"half-ratings\">\n<h3>Using a default value</h3>\n<example id=\"initial-value\">\n<h3>Controlled</h3>\n<p>When using the <code>RatingGroup</code> component, you can use the <code>value</code> and <code>onValueChange</code> props to control the state.</p>\n<example id=\"controlled\">\n<h3>Disabling the rating group</h3>\n<p>To make the rating group disabled, set the <code>disabled</code> prop to <code>true</code>.</p>\n<example id=\"disabled\">\n<h3>Readonly rating group</h3>\n<p>To make the rating group readonly, set the <code>readOnly</code> prop to <code>true</code>.</p>\n<example id=\"read-only\">\n<h3>Usage within forms</h3>\n<p>To use the rating group within forms, pass the prop <code>name</code>. It will render a hidden input and ensure the value changes\nget propagated to the form correctly.</p>\n<example id=\"form-usage\">\n<h3>Using the Field Component</h3>\n<p>The <code>Field</code> component helps manage form-related state and accessibility attributes of a rating group. It includes\nhandling ARIA labels, helper text, and error text to ensure proper accessibility.</p>\n<example id=\"with-field\">\n<h3>Using the Root Provider</h3>\n<p>The <code>RootProvider</code> component provides a context for the rating-group. It accepts the value of the <code>useRating-group</code>\nhook. You can leverage it to access the component state and methods from outside the rating-group.</p>\n<example id=\"root-provider\">\n<blockquote>\n<p>If you're using the <code>RootProvider</code> component, you don't need to use the <code>Root</code> component.</p>\n</blockquote>\n<h2>API Reference</h2>\n<componenttypes id=\"rating-group\">\n<h2>Accessibility</h2>\n<h3>Keyboard Support</h3>\n<keybindingstable id=\"rating-group\"></keybindingstable></componenttypes></example></example></example></example></example></example></example></example></example></anatomy></componentpreview>",
        "framework": "*",
        "toc": [
            {
                "title": "Anatomy",
                "url": "#anatomy",
                "items": []
            },
            {
                "title": "Examples",
                "url": "#examples",
                "items": [
                    {
                        "title": "Using half ratings",
                        "url": "#using-half-ratings",
                        "items": []
                    },
                    {
                        "title": "Using a default value",
                        "url": "#using-a-default-value",
                        "items": []
                    },
                    {
                        "title": "Controlled",
                        "url": "#controlled",
                        "items": []
                    },
                    {
                        "title": "Disabling the rating group",
                        "url": "#disabling-the-rating-group",
                        "items": []
                    },
                    {
                        "title": "Readonly rating group",
                        "url": "#readonly-rating-group",
                        "items": []
                    },
                    {
                        "title": "Usage within forms",
                        "url": "#usage-within-forms",
                        "items": []
                    },
                    {
                        "title": "Using the Field Component",
                        "url": "#using-the-field-component",
                        "items": []
                    },
                    {
                        "title": "Using the Root Provider",
                        "url": "#using-the-root-provider",
                        "items": []
                    }
                ]
            },
            {
                "title": "API Reference",
                "url": "#api-reference",
                "items": []
            },
            {
                "title": "Accessibility",
                "url": "#accessibility",
                "items": [
                    {
                        "title": "Keyboard Support",
                        "url": "#keyboard-support",
                        "items": []
                    }
                ]
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:i}=arguments[0];function _createMdxContent(a){const o={a:\"a\",blockquote:\"blockquote\",code:\"code\",h2:\"h2\",h3:\"h3\",p:\"p\",span:\"span\",...a.components},{Anatomy:r,ComponentPreview:t,ComponentTypes:c,Example:l,KeyBindingsTable:s}=o;return r||_missingMdxReference(\"Anatomy\",!0),t||_missingMdxReference(\"ComponentPreview\",!0),c||_missingMdxReference(\"ComponentTypes\",!0),l||_missingMdxReference(\"Example\",!0),s||_missingMdxReference(\"KeyBindingsTable\",!0),i(e,{children:[n(t,{id:\"RatingGroup\"}),\"\\n\",i(o.h2,{id:\"anatomy\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#anatomy\",children:n(o.span,{className:\"icon icon-link\"})}),\"Anatomy\"]}),\"\\n\",n(o.p,{children:\"To set up the rating correctly, you'll need to understand its anatomy and how we name its parts.\"}),\"\\n\",i(o.blockquote,{children:[\"\\n\",i(o.p,{children:[\"Each part includes a \",n(o.code,{children:\"data-part\"}),\" attribute to help identify them in the DOM.\"]}),\"\\n\"]}),\"\\n\",n(r,{id:\"rating-group\"}),\"\\n\",i(o.h2,{id:\"examples\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#examples\",children:n(o.span,{className:\"icon icon-link\"})}),\"Examples\"]}),\"\\n\",i(o.p,{children:[\"Learn how to use the \",n(o.code,{children:\"RatingGroup\"}),\" component in your project. Let's take a look at the most basic example:\"]}),\"\\n\",n(l,{id:\"basic\"}),\"\\n\",i(o.h3,{id:\"using-half-ratings\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-half-ratings\",children:n(o.span,{className:\"icon icon-link\"})}),\"Using half ratings\"]}),\"\\n\",i(o.p,{children:[\"Allow \",n(o.code,{children:\"0.5\"}),\" value steps by setting the \",n(o.code,{children:\"allowHalf\"}),\" prop to \",n(o.code,{children:\"true\"}),\". Ensure to render the correct icon if the \",n(o.code,{children:\"isHalf\"}),\"\\nvalue is set in the Rating components render callback.\"]}),\"\\n\",n(l,{id:\"half-ratings\"}),\"\\n\",i(o.h3,{id:\"using-a-default-value\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-a-default-value\",children:n(o.span,{className:\"icon icon-link\"})}),\"Using a default value\"]}),\"\\n\",n(l,{id:\"initial-value\"}),\"\\n\",i(o.h3,{id:\"controlled\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#controlled\",children:n(o.span,{className:\"icon icon-link\"})}),\"Controlled\"]}),\"\\n\",i(o.p,{children:[\"When using the \",n(o.code,{children:\"RatingGroup\"}),\" component, you can use the \",n(o.code,{children:\"value\"}),\" and \",n(o.code,{children:\"onValueChange\"}),\" props to control the state.\"]}),\"\\n\",n(l,{id:\"controlled\"}),\"\\n\",i(o.h3,{id:\"disabling-the-rating-group\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#disabling-the-rating-group\",children:n(o.span,{className:\"icon icon-link\"})}),\"Disabling the rating group\"]}),\"\\n\",i(o.p,{children:[\"To make the rating group disabled, set the \",n(o.code,{children:\"disabled\"}),\" prop to \",n(o.code,{children:\"true\"}),\".\"]}),\"\\n\",n(l,{id:\"disabled\"}),\"\\n\",i(o.h3,{id:\"readonly-rating-group\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#readonly-rating-group\",children:n(o.span,{className:\"icon icon-link\"})}),\"Readonly rating group\"]}),\"\\n\",i(o.p,{children:[\"To make the rating group readonly, set the \",n(o.code,{children:\"readOnly\"}),\" prop to \",n(o.code,{children:\"true\"}),\".\"]}),\"\\n\",n(l,{id:\"read-only\"}),\"\\n\",i(o.h3,{id:\"usage-within-forms\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#usage-within-forms\",children:n(o.span,{className:\"icon icon-link\"})}),\"Usage within forms\"]}),\"\\n\",i(o.p,{children:[\"To use the rating group within forms, pass the prop \",n(o.code,{children:\"name\"}),\". It will render a hidden input and ensure the value changes\\nget propagated to the form correctly.\"]}),\"\\n\",n(l,{id:\"form-usage\"}),\"\\n\",i(o.h3,{id:\"using-the-field-component\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-the-field-component\",children:n(o.span,{className:\"icon icon-link\"})}),\"Using the Field Component\"]}),\"\\n\",i(o.p,{children:[\"The \",n(o.code,{children:\"Field\"}),\" component helps manage form-related state and accessibility attributes of a rating group. It includes\\nhandling ARIA labels, helper text, and error text to ensure proper accessibility.\"]}),\"\\n\",n(l,{id:\"with-field\"}),\"\\n\",i(o.h3,{id:\"using-the-root-provider\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-the-root-provider\",children:n(o.span,{className:\"icon icon-link\"})}),\"Using the Root Provider\"]}),\"\\n\",i(o.p,{children:[\"The \",n(o.code,{children:\"RootProvider\"}),\" component provides a context for the rating-group. It accepts the value of the \",n(o.code,{children:\"useRating-group\"}),\"\\nhook. You can leverage it to access the component state and methods from outside the rating-group.\"]}),\"\\n\",n(l,{id:\"root-provider\"}),\"\\n\",i(o.blockquote,{children:[\"\\n\",i(o.p,{children:[\"If you're using the \",n(o.code,{children:\"RootProvider\"}),\" component, you don't need to use the \",n(o.code,{children:\"Root\"}),\" component.\"]}),\"\\n\"]}),\"\\n\",i(o.h2,{id:\"api-reference\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#api-reference\",children:n(o.span,{className:\"icon icon-link\"})}),\"API Reference\"]}),\"\\n\",n(c,{id:\"rating-group\"}),\"\\n\",i(o.h2,{id:\"accessibility\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#accessibility\",children:n(o.span,{className:\"icon icon-link\"})}),\"Accessibility\"]}),\"\\n\",i(o.h3,{id:\"keyboard-support\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#keyboard-support\",children:n(o.span,{className:\"icon icon-link\"})}),\"Keyboard Support\"]}),\"\\n\",n(s,{id:\"rating-group\"})]})}return{default:function(e={}){const{wrapper:i}=e.components||{};return i?n(i,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};function _missingMdxReference(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "<ComponentPreview id=\"RatingGroup\" />\n\n## Anatomy\n\nTo set up the rating correctly, you'll need to understand its anatomy and how we name its parts.\n\n> Each part includes a `data-part` attribute to help identify them in the DOM.\n\n<Anatomy id=\"rating-group\" />\n\n## Examples\n\nLearn how to use the `RatingGroup` component in your project. Let's take a look at the most basic example:\n\n<Example id=\"basic\" />\n\n### Using half ratings\n\nAllow `0.5` value steps by setting the `allowHalf` prop to `true`. Ensure to render the correct icon if the `isHalf`\nvalue is set in the Rating components render callback.\n\n<Example id=\"half-ratings\" />\n\n### Using a default value\n\n<Example id=\"initial-value\" />\n\n### Controlled\n\nWhen using the `RatingGroup` component, you can use the `value` and `onValueChange` props to control the state.\n\n<Example id=\"controlled\" />\n\n### Disabling the rating group\n\nTo make the rating group disabled, set the `disabled` prop to `true`.\n\n<Example id=\"disabled\" />\n\n### Readonly rating group\n\nTo make the rating group readonly, set the `readOnly` prop to `true`.\n\n<Example id=\"read-only\" />\n\n### Usage within forms\n\nTo use the rating group within forms, pass the prop `name`. It will render a hidden input and ensure the value changes\nget propagated to the form correctly.\n\n<Example id=\"form-usage\" />\n\n### Using the Field Component\n\nThe `Field` component helps manage form-related state and accessibility attributes of a rating group. It includes\nhandling ARIA labels, helper text, and error text to ensure proper accessibility.\n\n<Example id=\"with-field\" />\n\n### Using the Root Provider\n\nThe `RootProvider` component provides a context for the rating-group. It accepts the value of the `useRating-group`\nhook. You can leverage it to access the component state and methods from outside the rating-group.\n\n<Example id=\"root-provider\" />\n\n> If you're using the `RootProvider` component, you don't need to use the `Root` component.\n\n## API Reference\n\n<ComponentTypes id=\"rating-group\" />\n\n## Accessibility\n\n### Keyboard Support\n\n<KeyBindingsTable id=\"rating-group\" />",
        "slug": "components/rating-group",
        "category": "components"
    },
    {
        "id": "segment-group",
        "title": "Segment Group",
        "description": "Organizes and navigates between sections in a view.",
        "metadata": {
            "readingTime": 1,
            "wordCount": 178
        },
        "content": "<componentpreview id=\"SegmentGroup\">\n<h2>Anatomy</h2>\n<p>To set up the segmented control correctly, you'll need to understand its anatomy and how we name its parts.</p>\n<blockquote>\n<p>Each part includes a <code>data-part</code> attribute to help identify them in the DOM.</p>\n</blockquote>\n<anatomy id=\"segmented-control\">\n<h2>Examples</h2>\n<p>Learn how to use the <code>SegmentGroup</code> component in your project. Let's take a look at the most basic example:</p>\n<example id=\"basic\">\n<h3>Initial Value</h3>\n<p>To set a default segment on initial render, use the <code>defaultValue</code> prop:</p>\n<example id=\"initial-value\">\n<h3>Controlled Segment Group</h3>\n<p>To create a controlled SegmentGroup component, manage the current selected segment using the <code>value</code> prop and update it\nwhen the <code>onValueChange</code> event handler is called:</p>\n<example id=\"controlled\">\n<h3>Disabled Segment</h3>\n<p>To disable a segment, simply pass the <code>disabled</code> prop to the <code>SegmentGroup.Item</code> component:</p>\n<example id=\"disabled\">\n<h3>Using the Root Provider</h3>\n<p>The <code>RootProvider</code> component provides a context for the radio-group. It accepts the value of the <code>useRadio-group</code> hook.\nYou can leverage it to access the component state and methods from outside the radio-group.</p>\n<example id=\"root-provider\">\n<blockquote>\n<p>If you're using the <code>RootProvider</code> component, you don't need to use the <code>Root</code> component.</p>\n</blockquote>\n<h2>API Reference</h2>\n<componenttypes id=\"radio-group\">\n<h2>Accessibility</h2>\n<p>Complies with the <a href=\"https://www.w3.org/WAI/ARIA/apg/patterns/radio/\">Radio WAI-ARIA design pattern</a>.</p>\n<h3>Keyboard Support</h3>\n<keybindingstable id=\"radio-group\"></keybindingstable></componenttypes></example></example></example></example></example></anatomy></componentpreview>",
        "framework": "*",
        "toc": [
            {
                "title": "Anatomy",
                "url": "#anatomy",
                "items": []
            },
            {
                "title": "Examples",
                "url": "#examples",
                "items": [
                    {
                        "title": "Initial Value",
                        "url": "#initial-value",
                        "items": []
                    },
                    {
                        "title": "Controlled Segment Group",
                        "url": "#controlled-segment-group",
                        "items": []
                    },
                    {
                        "title": "Disabled Segment",
                        "url": "#disabled-segment",
                        "items": []
                    },
                    {
                        "title": "Using the Root Provider",
                        "url": "#using-the-root-provider",
                        "items": []
                    }
                ]
            },
            {
                "title": "API Reference",
                "url": "#api-reference",
                "items": []
            },
            {
                "title": "Accessibility",
                "url": "#accessibility",
                "items": [
                    {
                        "title": "Keyboard Support",
                        "url": "#keyboard-support",
                        "items": []
                    }
                ]
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:i}=arguments[0];function _createMdxContent(o){const a={a:\"a\",blockquote:\"blockquote\",code:\"code\",h2:\"h2\",h3:\"h3\",p:\"p\",span:\"span\",...o.components},{Anatomy:t,ComponentPreview:r,ComponentTypes:c,Example:d,KeyBindingsTable:s}=a;return t||_missingMdxReference(\"Anatomy\",!0),r||_missingMdxReference(\"ComponentPreview\",!0),c||_missingMdxReference(\"ComponentTypes\",!0),d||_missingMdxReference(\"Example\",!0),s||_missingMdxReference(\"KeyBindingsTable\",!0),i(e,{children:[n(r,{id:\"SegmentGroup\"}),\"\\n\",i(a.h2,{id:\"anatomy\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#anatomy\",children:n(a.span,{className:\"icon icon-link\"})}),\"Anatomy\"]}),\"\\n\",n(a.p,{children:\"To set up the segmented control correctly, you'll need to understand its anatomy and how we name its parts.\"}),\"\\n\",i(a.blockquote,{children:[\"\\n\",i(a.p,{children:[\"Each part includes a \",n(a.code,{children:\"data-part\"}),\" attribute to help identify them in the DOM.\"]}),\"\\n\"]}),\"\\n\",n(t,{id:\"segmented-control\"}),\"\\n\",i(a.h2,{id:\"examples\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#examples\",children:n(a.span,{className:\"icon icon-link\"})}),\"Examples\"]}),\"\\n\",i(a.p,{children:[\"Learn how to use the \",n(a.code,{children:\"SegmentGroup\"}),\" component in your project. Let's take a look at the most basic example:\"]}),\"\\n\",n(d,{id:\"basic\"}),\"\\n\",i(a.h3,{id:\"initial-value\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#initial-value\",children:n(a.span,{className:\"icon icon-link\"})}),\"Initial Value\"]}),\"\\n\",i(a.p,{children:[\"To set a default segment on initial render, use the \",n(a.code,{children:\"defaultValue\"}),\" prop:\"]}),\"\\n\",n(d,{id:\"initial-value\"}),\"\\n\",i(a.h3,{id:\"controlled-segment-group\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#controlled-segment-group\",children:n(a.span,{className:\"icon icon-link\"})}),\"Controlled Segment Group\"]}),\"\\n\",i(a.p,{children:[\"To create a controlled SegmentGroup component, manage the current selected segment using the \",n(a.code,{children:\"value\"}),\" prop and update it\\nwhen the \",n(a.code,{children:\"onValueChange\"}),\" event handler is called:\"]}),\"\\n\",n(d,{id:\"controlled\"}),\"\\n\",i(a.h3,{id:\"disabled-segment\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#disabled-segment\",children:n(a.span,{className:\"icon icon-link\"})}),\"Disabled Segment\"]}),\"\\n\",i(a.p,{children:[\"To disable a segment, simply pass the \",n(a.code,{children:\"disabled\"}),\" prop to the \",n(a.code,{children:\"SegmentGroup.Item\"}),\" component:\"]}),\"\\n\",n(d,{id:\"disabled\"}),\"\\n\",i(a.h3,{id:\"using-the-root-provider\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-the-root-provider\",children:n(a.span,{className:\"icon icon-link\"})}),\"Using the Root Provider\"]}),\"\\n\",i(a.p,{children:[\"The \",n(a.code,{children:\"RootProvider\"}),\" component provides a context for the radio-group. It accepts the value of the \",n(a.code,{children:\"useRadio-group\"}),\" hook.\\nYou can leverage it to access the component state and methods from outside the radio-group.\"]}),\"\\n\",n(d,{id:\"root-provider\"}),\"\\n\",i(a.blockquote,{children:[\"\\n\",i(a.p,{children:[\"If you're using the \",n(a.code,{children:\"RootProvider\"}),\" component, you don't need to use the \",n(a.code,{children:\"Root\"}),\" component.\"]}),\"\\n\"]}),\"\\n\",i(a.h2,{id:\"api-reference\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#api-reference\",children:n(a.span,{className:\"icon icon-link\"})}),\"API Reference\"]}),\"\\n\",n(c,{id:\"radio-group\"}),\"\\n\",i(a.h2,{id:\"accessibility\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#accessibility\",children:n(a.span,{className:\"icon icon-link\"})}),\"Accessibility\"]}),\"\\n\",i(a.p,{children:[\"Complies with the \",n(a.a,{href:\"https://www.w3.org/WAI/ARIA/apg/patterns/radio/\",children:\"Radio WAI-ARIA design pattern\"}),\".\"]}),\"\\n\",i(a.h3,{id:\"keyboard-support\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#keyboard-support\",children:n(a.span,{className:\"icon icon-link\"})}),\"Keyboard Support\"]}),\"\\n\",n(s,{id:\"radio-group\"})]})}return{default:function(e={}){const{wrapper:i}=e.components||{};return i?n(i,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};function _missingMdxReference(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "<ComponentPreview id=\"SegmentGroup\" />\n\n## Anatomy\n\nTo set up the segmented control correctly, you'll need to understand its anatomy and how we name its parts.\n\n> Each part includes a `data-part` attribute to help identify them in the DOM.\n\n<Anatomy id=\"segmented-control\" />\n\n## Examples\n\nLearn how to use the `SegmentGroup` component in your project. Let's take a look at the most basic example:\n\n<Example id=\"basic\" />\n\n### Initial Value\n\nTo set a default segment on initial render, use the `defaultValue` prop:\n\n<Example id=\"initial-value\" />\n\n### Controlled Segment Group\n\nTo create a controlled SegmentGroup component, manage the current selected segment using the `value` prop and update it\nwhen the `onValueChange` event handler is called:\n\n<Example id=\"controlled\" />\n\n### Disabled Segment\n\nTo disable a segment, simply pass the `disabled` prop to the `SegmentGroup.Item` component:\n\n<Example id=\"disabled\" />\n\n### Using the Root Provider\n\nThe `RootProvider` component provides a context for the radio-group. It accepts the value of the `useRadio-group` hook.\nYou can leverage it to access the component state and methods from outside the radio-group.\n\n<Example id=\"root-provider\" />\n\n> If you're using the `RootProvider` component, you don't need to use the `Root` component.\n\n## API Reference\n\n<ComponentTypes id=\"radio-group\" />\n\n## Accessibility\n\nComplies with the [Radio WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/radio/).\n\n### Keyboard Support\n\n<KeyBindingsTable id=\"radio-group\" />",
        "slug": "components/segment-group",
        "category": "components"
    },
    {
        "id": "select",
        "title": "Select",
        "description": "Displays a list of options for the user to pick from.",
        "metadata": {
            "readingTime": 1,
            "wordCount": 194
        },
        "content": "<componentpreview id=\"Select\">\n<h2>Anatomy</h2>\n<p>To set up the select correctly, you'll need to understand its anatomy and how we name its parts.</p>\n<blockquote>\n<p>Each part includes a <code>data-part</code> attribute to help identify them in the DOM.</p>\n</blockquote>\n<anatomy id=\"select\">\n<h2>Examples</h2>\n<p>Learn how to use the <code>Select</code> component in your project. Let's take a look at the most basic example:</p>\n<example id=\"basic\">\n<h3>Advanced Customization</h3>\n<p>For advanced customizations and item properties like <code>disabled</code>:</p>\n<example id=\"advanced\">\n<h3>Multiple Selection</h3>\n<p>To enable <code>multiple</code> item selection:</p>\n<example id=\"multiple\">\n<h3>Controlled Component</h3>\n<p>For scenarios where you want to control the Select component's state:</p>\n<example id=\"controlled\">\n<h3>Usage with a Form Library</h3>\n<p>See how to use the Select component with popular form libraries:</p>\n<example id=\"form-library\">\n<h3>Using the Field Component</h3>\n<p>The <code>Field</code> component helps manage form-related state and accessibility attributes of a select. It includes handling\nARIA labels, helper text, and error text to ensure proper accessibility.</p>\n<example id=\"with-field\">\n<h3>Using the Root Provider</h3>\n<p>The <code>RootProvider</code> component provides a context for the select. It accepts the value of the <code>useSelect</code> hook. You can\nleverage it to access the component state and methods from outside the select.</p>\n<example id=\"root-provider\">\n<blockquote>\n<p>If you're using the <code>RootProvider</code> component, you don't need to use the <code>Root</code> component.</p>\n</blockquote>\n<h2>API Reference</h2>\n<componenttypes id=\"select\">\n<h2>Accessibility</h2>\n<p>Complies with the <a href=\"https://www.w3.org/WAI/ARIA/apg/patterns/listbox/\">Listbox WAI-ARIA design pattern</a>.</p>\n<h3>Keyboard Support</h3>\n<keybindingstable id=\"select\"></keybindingstable></componenttypes></example></example></example></example></example></example></example></anatomy></componentpreview>",
        "framework": "*",
        "toc": [
            {
                "title": "Anatomy",
                "url": "#anatomy",
                "items": []
            },
            {
                "title": "Examples",
                "url": "#examples",
                "items": [
                    {
                        "title": "Advanced Customization",
                        "url": "#advanced-customization",
                        "items": []
                    },
                    {
                        "title": "Multiple Selection",
                        "url": "#multiple-selection",
                        "items": []
                    },
                    {
                        "title": "Controlled Component",
                        "url": "#controlled-component",
                        "items": []
                    },
                    {
                        "title": "Usage with a Form Library",
                        "url": "#usage-with-a-form-library",
                        "items": []
                    },
                    {
                        "title": "Using the Field Component",
                        "url": "#using-the-field-component",
                        "items": []
                    },
                    {
                        "title": "Using the Root Provider",
                        "url": "#using-the-root-provider",
                        "items": []
                    }
                ]
            },
            {
                "title": "API Reference",
                "url": "#api-reference",
                "items": []
            },
            {
                "title": "Accessibility",
                "url": "#accessibility",
                "items": [
                    {
                        "title": "Keyboard Support",
                        "url": "#keyboard-support",
                        "items": []
                    }
                ]
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:i}=arguments[0];function _createMdxContent(o){const a={a:\"a\",blockquote:\"blockquote\",code:\"code\",h2:\"h2\",h3:\"h3\",p:\"p\",span:\"span\",...o.components},{Anatomy:t,ComponentPreview:c,ComponentTypes:r,Example:l,KeyBindingsTable:s}=a;return t||_missingMdxReference(\"Anatomy\",!0),c||_missingMdxReference(\"ComponentPreview\",!0),r||_missingMdxReference(\"ComponentTypes\",!0),l||_missingMdxReference(\"Example\",!0),s||_missingMdxReference(\"KeyBindingsTable\",!0),i(e,{children:[n(c,{id:\"Select\"}),\"\\n\",i(a.h2,{id:\"anatomy\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#anatomy\",children:n(a.span,{className:\"icon icon-link\"})}),\"Anatomy\"]}),\"\\n\",n(a.p,{children:\"To set up the select correctly, you'll need to understand its anatomy and how we name its parts.\"}),\"\\n\",i(a.blockquote,{children:[\"\\n\",i(a.p,{children:[\"Each part includes a \",n(a.code,{children:\"data-part\"}),\" attribute to help identify them in the DOM.\"]}),\"\\n\"]}),\"\\n\",n(t,{id:\"select\"}),\"\\n\",i(a.h2,{id:\"examples\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#examples\",children:n(a.span,{className:\"icon icon-link\"})}),\"Examples\"]}),\"\\n\",i(a.p,{children:[\"Learn how to use the \",n(a.code,{children:\"Select\"}),\" component in your project. Let's take a look at the most basic example:\"]}),\"\\n\",n(l,{id:\"basic\"}),\"\\n\",i(a.h3,{id:\"advanced-customization\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#advanced-customization\",children:n(a.span,{className:\"icon icon-link\"})}),\"Advanced Customization\"]}),\"\\n\",i(a.p,{children:[\"For advanced customizations and item properties like \",n(a.code,{children:\"disabled\"}),\":\"]}),\"\\n\",n(l,{id:\"advanced\"}),\"\\n\",i(a.h3,{id:\"multiple-selection\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#multiple-selection\",children:n(a.span,{className:\"icon icon-link\"})}),\"Multiple Selection\"]}),\"\\n\",i(a.p,{children:[\"To enable \",n(a.code,{children:\"multiple\"}),\" item selection:\"]}),\"\\n\",n(l,{id:\"multiple\"}),\"\\n\",i(a.h3,{id:\"controlled-component\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#controlled-component\",children:n(a.span,{className:\"icon icon-link\"})}),\"Controlled Component\"]}),\"\\n\",n(a.p,{children:\"For scenarios where you want to control the Select component's state:\"}),\"\\n\",n(l,{id:\"controlled\"}),\"\\n\",i(a.h3,{id:\"usage-with-a-form-library\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#usage-with-a-form-library\",children:n(a.span,{className:\"icon icon-link\"})}),\"Usage with a Form Library\"]}),\"\\n\",n(a.p,{children:\"See how to use the Select component with popular form libraries:\"}),\"\\n\",n(l,{id:\"form-library\"}),\"\\n\",i(a.h3,{id:\"using-the-field-component\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-the-field-component\",children:n(a.span,{className:\"icon icon-link\"})}),\"Using the Field Component\"]}),\"\\n\",i(a.p,{children:[\"The \",n(a.code,{children:\"Field\"}),\" component helps manage form-related state and accessibility attributes of a select. It includes handling\\nARIA labels, helper text, and error text to ensure proper accessibility.\"]}),\"\\n\",n(l,{id:\"with-field\"}),\"\\n\",i(a.h3,{id:\"using-the-root-provider\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-the-root-provider\",children:n(a.span,{className:\"icon icon-link\"})}),\"Using the Root Provider\"]}),\"\\n\",i(a.p,{children:[\"The \",n(a.code,{children:\"RootProvider\"}),\" component provides a context for the select. It accepts the value of the \",n(a.code,{children:\"useSelect\"}),\" hook. You can\\nleverage it to access the component state and methods from outside the select.\"]}),\"\\n\",n(l,{id:\"root-provider\"}),\"\\n\",i(a.blockquote,{children:[\"\\n\",i(a.p,{children:[\"If you're using the \",n(a.code,{children:\"RootProvider\"}),\" component, you don't need to use the \",n(a.code,{children:\"Root\"}),\" component.\"]}),\"\\n\"]}),\"\\n\",i(a.h2,{id:\"api-reference\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#api-reference\",children:n(a.span,{className:\"icon icon-link\"})}),\"API Reference\"]}),\"\\n\",n(r,{id:\"select\"}),\"\\n\",i(a.h2,{id:\"accessibility\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#accessibility\",children:n(a.span,{className:\"icon icon-link\"})}),\"Accessibility\"]}),\"\\n\",i(a.p,{children:[\"Complies with the \",n(a.a,{href:\"https://www.w3.org/WAI/ARIA/apg/patterns/listbox/\",children:\"Listbox WAI-ARIA design pattern\"}),\".\"]}),\"\\n\",i(a.h3,{id:\"keyboard-support\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#keyboard-support\",children:n(a.span,{className:\"icon icon-link\"})}),\"Keyboard Support\"]}),\"\\n\",n(s,{id:\"select\"})]})}return{default:function(e={}){const{wrapper:i}=e.components||{};return i?n(i,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};function _missingMdxReference(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "<ComponentPreview id=\"Select\" />\n\n## Anatomy\n\nTo set up the select correctly, you'll need to understand its anatomy and how we name its parts.\n\n> Each part includes a `data-part` attribute to help identify them in the DOM.\n\n<Anatomy id=\"select\" />\n\n## Examples\n\nLearn how to use the `Select` component in your project. Let's take a look at the most basic example:\n\n<Example id=\"basic\" />\n\n### Advanced Customization\n\nFor advanced customizations and item properties like `disabled`:\n\n<Example id=\"advanced\" />\n\n### Multiple Selection\n\nTo enable `multiple` item selection:\n\n<Example id=\"multiple\" />\n\n### Controlled Component\n\nFor scenarios where you want to control the Select component's state:\n\n<Example id=\"controlled\" />\n\n### Usage with a Form Library\n\nSee how to use the Select component with popular form libraries:\n\n<Example id=\"form-library\" />\n\n### Using the Field Component\n\nThe `Field` component helps manage form-related state and accessibility attributes of a select. It includes handling\nARIA labels, helper text, and error text to ensure proper accessibility.\n\n<Example id=\"with-field\" />\n\n### Using the Root Provider\n\nThe `RootProvider` component provides a context for the select. It accepts the value of the `useSelect` hook. You can\nleverage it to access the component state and methods from outside the select.\n\n<Example id=\"root-provider\" />\n\n> If you're using the `RootProvider` component, you don't need to use the `Root` component.\n\n## API Reference\n\n<ComponentTypes id=\"select\" />\n\n## Accessibility\n\nComplies with the [Listbox WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/).\n\n### Keyboard Support\n\n<KeyBindingsTable id=\"select\" />",
        "slug": "components/select",
        "category": "components"
    },
    {
        "id": "signature-pad",
        "title": "Signature Pad",
        "description": "A component that allows users to draw a signature using a signature pad.",
        "metadata": {
            "readingTime": 1,
            "wordCount": 180
        },
        "content": "<componentpreview id=\"SignaturePad\">\n<h2>Anatomy</h2>\n<p>To set up the signature pad correctly, you'll need to understand its anatomy and how we name its parts.</p>\n<blockquote>\n<p>Each part includes a <code>data-part</code> attribute to help identify them in the DOM.</p>\n</blockquote>\n<anatomy id=\"signature-pad\">\n<h2>Examples</h2>\n<p>Learn how to use the <code>Signature Pad</code> component in your project. Let's take a look at the most basic example:</p>\n<example id=\"basic\">\n<h3>Image Preview</h3>\n<p>After the user draws a signature, you can display a preview of the signature as an image. This is useful when you want\nto show the user a preview of the signature before saving it.</p>\n<example id=\"image-preview\">\n<h3>Using the Field Component</h3>\n<p>The <code>Field</code> component helps manage form-related state and accessibility attributes of a signature pad. It includes\nhandling ARIA labels, helper text, and error text to ensure proper accessibility.</p>\n<example id=\"with-field\">\n<h3>Using the Root Provider</h3>\n<p>The <code>RootProvider</code> component provides a context for the signature-pad. It accepts the value of the <code>useSignature-pad</code>\nhook. You can leverage it to access the component state and methods from outside the signature-pad.</p>\n<example id=\"root-provider\">\n<blockquote>\n<p>If you're using the <code>RootProvider</code> component, you don't need to use the <code>Root</code> component.</p>\n</blockquote>\n<h2>API Reference</h2>\n<componenttypes id=\"signature-pad\"></componenttypes></example></example></example></example></anatomy></componentpreview>",
        "framework": "*",
        "toc": [
            {
                "title": "Anatomy",
                "url": "#anatomy",
                "items": []
            },
            {
                "title": "Examples",
                "url": "#examples",
                "items": [
                    {
                        "title": "Image Preview",
                        "url": "#image-preview",
                        "items": []
                    },
                    {
                        "title": "Using the Field Component",
                        "url": "#using-the-field-component",
                        "items": []
                    },
                    {
                        "title": "Using the Root Provider",
                        "url": "#using-the-root-provider",
                        "items": []
                    }
                ]
            },
            {
                "title": "API Reference",
                "url": "#api-reference",
                "items": []
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:i}=arguments[0];function _createMdxContent(a){const o={a:\"a\",blockquote:\"blockquote\",code:\"code\",h2:\"h2\",h3:\"h3\",p:\"p\",span:\"span\",...a.components},{Anatomy:t,ComponentPreview:r,ComponentTypes:c,Example:s}=o;return t||_missingMdxReference(\"Anatomy\",!0),r||_missingMdxReference(\"ComponentPreview\",!0),c||_missingMdxReference(\"ComponentTypes\",!0),s||_missingMdxReference(\"Example\",!0),i(e,{children:[n(r,{id:\"SignaturePad\"}),\"\\n\",i(o.h2,{id:\"anatomy\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#anatomy\",children:n(o.span,{className:\"icon icon-link\"})}),\"Anatomy\"]}),\"\\n\",n(o.p,{children:\"To set up the signature pad correctly, you'll need to understand its anatomy and how we name its parts.\"}),\"\\n\",i(o.blockquote,{children:[\"\\n\",i(o.p,{children:[\"Each part includes a \",n(o.code,{children:\"data-part\"}),\" attribute to help identify them in the DOM.\"]}),\"\\n\"]}),\"\\n\",n(t,{id:\"signature-pad\"}),\"\\n\",i(o.h2,{id:\"examples\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#examples\",children:n(o.span,{className:\"icon icon-link\"})}),\"Examples\"]}),\"\\n\",i(o.p,{children:[\"Learn how to use the \",n(o.code,{children:\"Signature Pad\"}),\" component in your project. Let's take a look at the most basic example:\"]}),\"\\n\",n(s,{id:\"basic\"}),\"\\n\",i(o.h3,{id:\"image-preview\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#image-preview\",children:n(o.span,{className:\"icon icon-link\"})}),\"Image Preview\"]}),\"\\n\",n(o.p,{children:\"After the user draws a signature, you can display a preview of the signature as an image. This is useful when you want\\nto show the user a preview of the signature before saving it.\"}),\"\\n\",n(s,{id:\"image-preview\"}),\"\\n\",i(o.h3,{id:\"using-the-field-component\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-the-field-component\",children:n(o.span,{className:\"icon icon-link\"})}),\"Using the Field Component\"]}),\"\\n\",i(o.p,{children:[\"The \",n(o.code,{children:\"Field\"}),\" component helps manage form-related state and accessibility attributes of a signature pad. It includes\\nhandling ARIA labels, helper text, and error text to ensure proper accessibility.\"]}),\"\\n\",n(s,{id:\"with-field\"}),\"\\n\",i(o.h3,{id:\"using-the-root-provider\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-the-root-provider\",children:n(o.span,{className:\"icon icon-link\"})}),\"Using the Root Provider\"]}),\"\\n\",i(o.p,{children:[\"The \",n(o.code,{children:\"RootProvider\"}),\" component provides a context for the signature-pad. It accepts the value of the \",n(o.code,{children:\"useSignature-pad\"}),\"\\nhook. You can leverage it to access the component state and methods from outside the signature-pad.\"]}),\"\\n\",n(s,{id:\"root-provider\"}),\"\\n\",i(o.blockquote,{children:[\"\\n\",i(o.p,{children:[\"If you're using the \",n(o.code,{children:\"RootProvider\"}),\" component, you don't need to use the \",n(o.code,{children:\"Root\"}),\" component.\"]}),\"\\n\"]}),\"\\n\",i(o.h2,{id:\"api-reference\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#api-reference\",children:n(o.span,{className:\"icon icon-link\"})}),\"API Reference\"]}),\"\\n\",n(c,{id:\"signature-pad\"})]})}return{default:function(e={}){const{wrapper:i}=e.components||{};return i?n(i,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};function _missingMdxReference(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "<ComponentPreview id=\"SignaturePad\" />\n\n## Anatomy\n\nTo set up the signature pad correctly, you'll need to understand its anatomy and how we name its parts.\n\n> Each part includes a `data-part` attribute to help identify them in the DOM.\n\n<Anatomy id=\"signature-pad\" />\n\n## Examples\n\nLearn how to use the `Signature Pad` component in your project. Let's take a look at the most basic example:\n\n<Example id=\"basic\" />\n\n### Image Preview\n\nAfter the user draws a signature, you can display a preview of the signature as an image. This is useful when you want\nto show the user a preview of the signature before saving it.\n\n<Example id=\"image-preview\" />\n\n### Using the Field Component\n\nThe `Field` component helps manage form-related state and accessibility attributes of a signature pad. It includes\nhandling ARIA labels, helper text, and error text to ensure proper accessibility.\n\n<Example id=\"with-field\" />\n\n### Using the Root Provider\n\nThe `RootProvider` component provides a context for the signature-pad. It accepts the value of the `useSignature-pad`\nhook. You can leverage it to access the component state and methods from outside the signature-pad.\n\n<Example id=\"root-provider\" />\n\n> If you're using the `RootProvider` component, you don't need to use the `Root` component.\n\n## API Reference\n\n<ComponentTypes id=\"signature-pad\" />",
        "slug": "components/signature-pad",
        "category": "components"
    },
    {
        "id": "slider",
        "title": "Slider",
        "description": "A control element that allows for a range of selections.",
        "metadata": {
            "readingTime": 2,
            "wordCount": 401
        },
        "content": "<componentpreview id=\"Slider\">\n<h2>Anatomy</h2>\n<p>To set up the slider correctly, you'll need to understand its anatomy and how we name its parts.</p>\n<blockquote>\n<p>Each part includes a <code>data-part</code> attribute to help identify them in the DOM.</p>\n</blockquote>\n<anatomy id=\"slider\">\n<h2>Examples</h2>\n<p>Learn how to use the <code>Slider</code> component in your project. Let's take a look at the most basic example:</p>\n<example id=\"basic\">\n<h3>Range Slider</h3>\n<p>You can add multiple thumbs to the slider by adding multiple <code>Slider.Thumb</code></p>\n<example id=\"range\">\n<h3>Adding marks</h3>\n<p>You can add marks to the slider track by using the <code>Slider.MarkerGroup</code> and <code>Slider.Marker</code> components.</p>\n<p>Position the <code>Slider.Marker</code> components relative to the track by providing the <code>value</code> prop.</p>\n<example id=\"with-marks\">\n<h3>Setting the initial value</h3>\n<p>To set the slider's initial value, set the <code>defaultValue</code> prop to the array of numbers.</p>\n<example id=\"initial-value\">\n<h3>Specifying the minimum and maximum</h3>\n<p>By default, the minimum is <code>0</code> and the maximum is <code>100</code>. If that's not what you want, you can easily specify different\nbounds by changing the values of the <code>min</code> and/or <code>max</code> props.</p>\n<p>For example, to ask the user for a value between <code>-10</code> and <code>10</code>, you can use:</p>\n<example id=\"min-max\">\n<h3>Setting the value's granularity</h3>\n<p>By default, the granularity, is <code>1</code>, meaning that the value is always an integer. You can change the step attribute to\ncontrol the granularity.</p>\n<p>For example, If you need a value between <code>5</code> and <code>10</code>, accurate to two decimal places, you should set the value of step\nto <code>0.01</code>:</p>\n<example id=\"step\">\n<h3>Listening for changes</h3>\n<p>When the slider value changes, the <code>onValueChange</code> and <code>onValueChangeEnd</code> callbacks are invoked. You can use this to set\nup custom behaviors in your app.</p>\n<example id=\"on-event\">\n<h3>Changing the orientation</h3>\n<p>By default, the slider is assumed to be horizontal. To change the orientation to vertical, set the orientation property\nin the machine's context to vertical.</p>\n<p>In this mode, the slider will use the arrow up and down keys to increment/decrement its value.</p>\n<blockquote>\n<p>Don't forget to change the styles of the vertical slider by specifying its height</p>\n</blockquote>\n<example id=\"vertical\">\n<h3>Changing the origin</h3>\n<p>By default, the slider's origin is at the start of the track. To change the origin to the center of the track, set the\n<code>origin</code> prop to <code>center</code>.</p>\n<example id=\"center-origin\">\n<h3>Using the Root Provider</h3>\n<p>The <code>RootProvider</code> component provides a context for the slider. It accepts the value of the <code>useSlider</code> hook. You can\nleverage it to access the component state and methods from outside the slider.</p>\n<example id=\"root-provider\">\n<blockquote>\n<p>If you're using the <code>RootProvider</code> component, you don't need to use the <code>Root</code> component.</p>\n</blockquote>\n<h2>API Reference</h2>\n<componenttypes id=\"slider\">\n<h2>Accessibility</h2>\n<p>Complies with the <a href=\"https://www.w3.org/WAI/ARIA/apg/patterns/slider/\">Slider WAI-ARIA design pattern</a>.</p>\n<h3>Keyboard Support</h3>\n<keybindingstable id=\"slider\"></keybindingstable></componenttypes></example></example></example></example></example></example></example></example></example></example></anatomy></componentpreview>",
        "framework": "*",
        "toc": [
            {
                "title": "Anatomy",
                "url": "#anatomy",
                "items": []
            },
            {
                "title": "Examples",
                "url": "#examples",
                "items": [
                    {
                        "title": "Range Slider",
                        "url": "#range-slider",
                        "items": []
                    },
                    {
                        "title": "Adding marks",
                        "url": "#adding-marks",
                        "items": []
                    },
                    {
                        "title": "Setting the initial value",
                        "url": "#setting-the-initial-value",
                        "items": []
                    },
                    {
                        "title": "Specifying the minimum and maximum",
                        "url": "#specifying-the-minimum-and-maximum",
                        "items": []
                    },
                    {
                        "title": "Setting the value's granularity",
                        "url": "#setting-the-values-granularity",
                        "items": []
                    },
                    {
                        "title": "Listening for changes",
                        "url": "#listening-for-changes",
                        "items": []
                    },
                    {
                        "title": "Changing the orientation",
                        "url": "#changing-the-orientation",
                        "items": []
                    },
                    {
                        "title": "Changing the origin",
                        "url": "#changing-the-origin",
                        "items": []
                    },
                    {
                        "title": "Using the Root Provider",
                        "url": "#using-the-root-provider",
                        "items": []
                    }
                ]
            },
            {
                "title": "API Reference",
                "url": "#api-reference",
                "items": []
            },
            {
                "title": "Accessibility",
                "url": "#accessibility",
                "items": [
                    {
                        "title": "Keyboard Support",
                        "url": "#keyboard-support",
                        "items": []
                    }
                ]
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:i}=arguments[0];function _createMdxContent(a){const t={a:\"a\",blockquote:\"blockquote\",code:\"code\",h2:\"h2\",h3:\"h3\",p:\"p\",span:\"span\",...a.components},{Anatomy:o,ComponentPreview:r,ComponentTypes:c,Example:l,KeyBindingsTable:s}=t;return o||_missingMdxReference(\"Anatomy\",!0),r||_missingMdxReference(\"ComponentPreview\",!0),c||_missingMdxReference(\"ComponentTypes\",!0),l||_missingMdxReference(\"Example\",!0),s||_missingMdxReference(\"KeyBindingsTable\",!0),i(e,{children:[n(r,{id:\"Slider\"}),\"\\n\",i(t.h2,{id:\"anatomy\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#anatomy\",children:n(t.span,{className:\"icon icon-link\"})}),\"Anatomy\"]}),\"\\n\",n(t.p,{children:\"To set up the slider correctly, you'll need to understand its anatomy and how we name its parts.\"}),\"\\n\",i(t.blockquote,{children:[\"\\n\",i(t.p,{children:[\"Each part includes a \",n(t.code,{children:\"data-part\"}),\" attribute to help identify them in the DOM.\"]}),\"\\n\"]}),\"\\n\",n(o,{id:\"slider\"}),\"\\n\",i(t.h2,{id:\"examples\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#examples\",children:n(t.span,{className:\"icon icon-link\"})}),\"Examples\"]}),\"\\n\",i(t.p,{children:[\"Learn how to use the \",n(t.code,{children:\"Slider\"}),\" component in your project. Let's take a look at the most basic example:\"]}),\"\\n\",n(l,{id:\"basic\"}),\"\\n\",i(t.h3,{id:\"range-slider\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#range-slider\",children:n(t.span,{className:\"icon icon-link\"})}),\"Range Slider\"]}),\"\\n\",i(t.p,{children:[\"You can add multiple thumbs to the slider by adding multiple \",n(t.code,{children:\"Slider.Thumb\"})]}),\"\\n\",n(l,{id:\"range\"}),\"\\n\",i(t.h3,{id:\"adding-marks\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#adding-marks\",children:n(t.span,{className:\"icon icon-link\"})}),\"Adding marks\"]}),\"\\n\",i(t.p,{children:[\"You can add marks to the slider track by using the \",n(t.code,{children:\"Slider.MarkerGroup\"}),\" and \",n(t.code,{children:\"Slider.Marker\"}),\" components.\"]}),\"\\n\",i(t.p,{children:[\"Position the \",n(t.code,{children:\"Slider.Marker\"}),\" components relative to the track by providing the \",n(t.code,{children:\"value\"}),\" prop.\"]}),\"\\n\",n(l,{id:\"with-marks\"}),\"\\n\",i(t.h3,{id:\"setting-the-initial-value\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#setting-the-initial-value\",children:n(t.span,{className:\"icon icon-link\"})}),\"Setting the initial value\"]}),\"\\n\",i(t.p,{children:[\"To set the slider's initial value, set the \",n(t.code,{children:\"defaultValue\"}),\" prop to the array of numbers.\"]}),\"\\n\",n(l,{id:\"initial-value\"}),\"\\n\",i(t.h3,{id:\"specifying-the-minimum-and-maximum\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#specifying-the-minimum-and-maximum\",children:n(t.span,{className:\"icon icon-link\"})}),\"Specifying the minimum and maximum\"]}),\"\\n\",i(t.p,{children:[\"By default, the minimum is \",n(t.code,{children:\"0\"}),\" and the maximum is \",n(t.code,{children:\"100\"}),\". If that's not what you want, you can easily specify different\\nbounds by changing the values of the \",n(t.code,{children:\"min\"}),\" and/or \",n(t.code,{children:\"max\"}),\" props.\"]}),\"\\n\",i(t.p,{children:[\"For example, to ask the user for a value between \",n(t.code,{children:\"-10\"}),\" and \",n(t.code,{children:\"10\"}),\", you can use:\"]}),\"\\n\",n(l,{id:\"min-max\"}),\"\\n\",i(t.h3,{id:\"setting-the-values-granularity\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#setting-the-values-granularity\",children:n(t.span,{className:\"icon icon-link\"})}),\"Setting the value's granularity\"]}),\"\\n\",i(t.p,{children:[\"By default, the granularity, is \",n(t.code,{children:\"1\"}),\", meaning that the value is always an integer. You can change the step attribute to\\ncontrol the granularity.\"]}),\"\\n\",i(t.p,{children:[\"For example, If you need a value between \",n(t.code,{children:\"5\"}),\" and \",n(t.code,{children:\"10\"}),\", accurate to two decimal places, you should set the value of step\\nto \",n(t.code,{children:\"0.01\"}),\":\"]}),\"\\n\",n(l,{id:\"step\"}),\"\\n\",i(t.h3,{id:\"listening-for-changes\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#listening-for-changes\",children:n(t.span,{className:\"icon icon-link\"})}),\"Listening for changes\"]}),\"\\n\",i(t.p,{children:[\"When the slider value changes, the \",n(t.code,{children:\"onValueChange\"}),\" and \",n(t.code,{children:\"onValueChangeEnd\"}),\" callbacks are invoked. You can use this to set\\nup custom behaviors in your app.\"]}),\"\\n\",n(l,{id:\"on-event\"}),\"\\n\",i(t.h3,{id:\"changing-the-orientation\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#changing-the-orientation\",children:n(t.span,{className:\"icon icon-link\"})}),\"Changing the orientation\"]}),\"\\n\",n(t.p,{children:\"By default, the slider is assumed to be horizontal. To change the orientation to vertical, set the orientation property\\nin the machine's context to vertical.\"}),\"\\n\",n(t.p,{children:\"In this mode, the slider will use the arrow up and down keys to increment/decrement its value.\"}),\"\\n\",i(t.blockquote,{children:[\"\\n\",n(t.p,{children:\"Don't forget to change the styles of the vertical slider by specifying its height\"}),\"\\n\"]}),\"\\n\",n(l,{id:\"vertical\"}),\"\\n\",i(t.h3,{id:\"changing-the-origin\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#changing-the-origin\",children:n(t.span,{className:\"icon icon-link\"})}),\"Changing the origin\"]}),\"\\n\",i(t.p,{children:[\"By default, the slider's origin is at the start of the track. To change the origin to the center of the track, set the\\n\",n(t.code,{children:\"origin\"}),\" prop to \",n(t.code,{children:\"center\"}),\".\"]}),\"\\n\",n(l,{id:\"center-origin\"}),\"\\n\",i(t.h3,{id:\"using-the-root-provider\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-the-root-provider\",children:n(t.span,{className:\"icon icon-link\"})}),\"Using the Root Provider\"]}),\"\\n\",i(t.p,{children:[\"The \",n(t.code,{children:\"RootProvider\"}),\" component provides a context for the slider. It accepts the value of the \",n(t.code,{children:\"useSlider\"}),\" hook. You can\\nleverage it to access the component state and methods from outside the slider.\"]}),\"\\n\",n(l,{id:\"root-provider\"}),\"\\n\",i(t.blockquote,{children:[\"\\n\",i(t.p,{children:[\"If you're using the \",n(t.code,{children:\"RootProvider\"}),\" component, you don't need to use the \",n(t.code,{children:\"Root\"}),\" component.\"]}),\"\\n\"]}),\"\\n\",i(t.h2,{id:\"api-reference\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#api-reference\",children:n(t.span,{className:\"icon icon-link\"})}),\"API Reference\"]}),\"\\n\",n(c,{id:\"slider\"}),\"\\n\",i(t.h2,{id:\"accessibility\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#accessibility\",children:n(t.span,{className:\"icon icon-link\"})}),\"Accessibility\"]}),\"\\n\",i(t.p,{children:[\"Complies with the \",n(t.a,{href:\"https://www.w3.org/WAI/ARIA/apg/patterns/slider/\",children:\"Slider WAI-ARIA design pattern\"}),\".\"]}),\"\\n\",i(t.h3,{id:\"keyboard-support\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#keyboard-support\",children:n(t.span,{className:\"icon icon-link\"})}),\"Keyboard Support\"]}),\"\\n\",n(s,{id:\"slider\"})]})}return{default:function(e={}){const{wrapper:i}=e.components||{};return i?n(i,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};function _missingMdxReference(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "<ComponentPreview id=\"Slider\" />\n\n## Anatomy\n\nTo set up the slider correctly, you'll need to understand its anatomy and how we name its parts.\n\n> Each part includes a `data-part` attribute to help identify them in the DOM.\n\n<Anatomy id=\"slider\" />\n\n## Examples\n\nLearn how to use the `Slider` component in your project. Let's take a look at the most basic example:\n\n<Example id=\"basic\" />\n\n### Range Slider\n\nYou can add multiple thumbs to the slider by adding multiple `Slider.Thumb`\n\n<Example id=\"range\" />\n\n### Adding marks\n\nYou can add marks to the slider track by using the `Slider.MarkerGroup` and `Slider.Marker` components.\n\nPosition the `Slider.Marker` components relative to the track by providing the `value` prop.\n\n<Example id=\"with-marks\" />\n\n### Setting the initial value\n\nTo set the slider's initial value, set the `defaultValue` prop to the array of numbers.\n\n<Example id=\"initial-value\" />\n\n### Specifying the minimum and maximum\n\nBy default, the minimum is `0` and the maximum is `100`. If that's not what you want, you can easily specify different\nbounds by changing the values of the `min` and/or `max` props.\n\nFor example, to ask the user for a value between `-10` and `10`, you can use:\n\n<Example id=\"min-max\" />\n\n### Setting the value's granularity\n\nBy default, the granularity, is `1`, meaning that the value is always an integer. You can change the step attribute to\ncontrol the granularity.\n\nFor example, If you need a value between `5` and `10`, accurate to two decimal places, you should set the value of step\nto `0.01`:\n\n<Example id=\"step\" />\n\n### Listening for changes\n\nWhen the slider value changes, the `onValueChange` and `onValueChangeEnd` callbacks are invoked. You can use this to set\nup custom behaviors in your app.\n\n<Example id=\"on-event\" />\n\n### Changing the orientation\n\nBy default, the slider is assumed to be horizontal. To change the orientation to vertical, set the orientation property\nin the machine's context to vertical.\n\nIn this mode, the slider will use the arrow up and down keys to increment/decrement its value.\n\n> Don't forget to change the styles of the vertical slider by specifying its height\n\n<Example id=\"vertical\" />\n\n### Changing the origin\n\nBy default, the slider's origin is at the start of the track. To change the origin to the center of the track, set the\n`origin` prop to `center`.\n\n<Example id=\"center-origin\" />\n\n### Using the Root Provider\n\nThe `RootProvider` component provides a context for the slider. It accepts the value of the `useSlider` hook. You can\nleverage it to access the component state and methods from outside the slider.\n\n<Example id=\"root-provider\" />\n\n> If you're using the `RootProvider` component, you don't need to use the `Root` component.\n\n## API Reference\n\n<ComponentTypes id=\"slider\" />\n\n## Accessibility\n\nComplies with the [Slider WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/slider/).\n\n### Keyboard Support\n\n<KeyBindingsTable id=\"slider\" />",
        "slug": "components/slider",
        "category": "components"
    },
    {
        "id": "splitter",
        "title": "Splitter",
        "description": "A component that divides your interface into resizable sections",
        "metadata": {
            "readingTime": 1,
            "wordCount": 259
        },
        "content": "<componentpreview id=\"Splitter\">\n<h2>Anatomy</h2>\n<p>To set up the splitter correctly, you'll need to understand its anatomy and how we name its parts.</p>\n<blockquote>\n<p>Each part includes a <code>data-part</code> attribute to help identify them in the DOM.</p>\n</blockquote>\n<anatomy id=\"splitter\">\n<h2>Examples</h2>\n<p>Learn how to use the <code>Splitter</code> component in your project. Let's take a look at the most basic example:</p>\n<example id=\"basic\">\n<h3>Using Render Props</h3>\n<p>The Splitter component allows you to pass a function as a child to gain direct access to its API. This provides more\ncontrol and allows you to modify the size of the panels programmatically:</p>\n<example id=\"render-prop\">\n<h3>Handling Events</h3>\n<p>Splitter also provides <code>onResizeStart</code>, <code>onResize</code>, and <code>onResizeEnd</code> events which can be useful to perform some actions\nduring the start and end of the resizing process:</p>\n<example id=\"events\">\n<h3>Vertical Splitter</h3>\n<p>By default, the Splitter component is horizontal. If you need a vertical splitter, use the <code>orientation</code> prop:</p>\n<example id=\"vertical\">\n<h3>Collapsible Panels</h3>\n<p>To make a panel collapsible, set the <code>collapsible</code> prop to <code>true</code> on the panel you want to make collapsible.\nAdditionally, you can use the <code>collapsedSize</code> prop to set the size of the panel when it's collapsed.</p>\n<blockquote>\n<p>This can be useful for building sidebar layouts.</p>\n</blockquote>\n<example id=\"collapsible\">\n<h3>Multiple Panels</h3>\n<p>Here's an example of how to use the <code>Splitter</code> component with multiple panels.</p>\n<example id=\"multiple-panels\">\n<h3>Using the Root Provider</h3>\n<p>The <code>RootProvider</code> component provides a context for the splitter. It accepts the value of the <code>useSplitter</code> hook. You\ncan leverage it to access the component state and methods from outside the splitter.</p>\n<example id=\"root-provider\">\n<blockquote>\n<p>If you're using the <code>RootProvider</code> component, you don't need to use the <code>Root</code> component.</p>\n</blockquote>\n<h2>API Reference</h2>\n<componenttypes id=\"splitter\">\n<h2>Accessibility</h2>\n<p>Complies with the <a href=\"https://www.w3.org/WAI/ARIA/apg/patterns/windowsplitter/\">Window Splitter WAI-ARIA design pattern</a>.</p></componenttypes></example></example></example></example></example></example></example></anatomy></componentpreview>",
        "framework": "*",
        "status": "Preview",
        "toc": [
            {
                "title": "Anatomy",
                "url": "#anatomy",
                "items": []
            },
            {
                "title": "Examples",
                "url": "#examples",
                "items": [
                    {
                        "title": "Using Render Props",
                        "url": "#using-render-props",
                        "items": []
                    },
                    {
                        "title": "Handling Events",
                        "url": "#handling-events",
                        "items": []
                    },
                    {
                        "title": "Vertical Splitter",
                        "url": "#vertical-splitter",
                        "items": []
                    },
                    {
                        "title": "Collapsible Panels",
                        "url": "#collapsible-panels",
                        "items": []
                    },
                    {
                        "title": "Multiple Panels",
                        "url": "#multiple-panels",
                        "items": []
                    },
                    {
                        "title": "Using the Root Provider",
                        "url": "#using-the-root-provider",
                        "items": []
                    }
                ]
            },
            {
                "title": "API Reference",
                "url": "#api-reference",
                "items": []
            },
            {
                "title": "Accessibility",
                "url": "#accessibility",
                "items": []
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:i}=arguments[0];function _createMdxContent(o){const t={a:\"a\",blockquote:\"blockquote\",code:\"code\",h2:\"h2\",h3:\"h3\",p:\"p\",span:\"span\",...o.components},{Anatomy:a,ComponentPreview:l,ComponentTypes:c,Example:r}=t;return a||_missingMdxReference(\"Anatomy\",!0),l||_missingMdxReference(\"ComponentPreview\",!0),c||_missingMdxReference(\"ComponentTypes\",!0),r||_missingMdxReference(\"Example\",!0),i(e,{children:[n(l,{id:\"Splitter\"}),\"\\n\",i(t.h2,{id:\"anatomy\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#anatomy\",children:n(t.span,{className:\"icon icon-link\"})}),\"Anatomy\"]}),\"\\n\",n(t.p,{children:\"To set up the splitter correctly, you'll need to understand its anatomy and how we name its parts.\"}),\"\\n\",i(t.blockquote,{children:[\"\\n\",i(t.p,{children:[\"Each part includes a \",n(t.code,{children:\"data-part\"}),\" attribute to help identify them in the DOM.\"]}),\"\\n\"]}),\"\\n\",n(a,{id:\"splitter\"}),\"\\n\",i(t.h2,{id:\"examples\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#examples\",children:n(t.span,{className:\"icon icon-link\"})}),\"Examples\"]}),\"\\n\",i(t.p,{children:[\"Learn how to use the \",n(t.code,{children:\"Splitter\"}),\" component in your project. Let's take a look at the most basic example:\"]}),\"\\n\",n(r,{id:\"basic\"}),\"\\n\",i(t.h3,{id:\"using-render-props\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-render-props\",children:n(t.span,{className:\"icon icon-link\"})}),\"Using Render Props\"]}),\"\\n\",n(t.p,{children:\"The Splitter component allows you to pass a function as a child to gain direct access to its API. This provides more\\ncontrol and allows you to modify the size of the panels programmatically:\"}),\"\\n\",n(r,{id:\"render-prop\"}),\"\\n\",i(t.h3,{id:\"handling-events\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#handling-events\",children:n(t.span,{className:\"icon icon-link\"})}),\"Handling Events\"]}),\"\\n\",i(t.p,{children:[\"Splitter also provides \",n(t.code,{children:\"onResizeStart\"}),\", \",n(t.code,{children:\"onResize\"}),\", and \",n(t.code,{children:\"onResizeEnd\"}),\" events which can be useful to perform some actions\\nduring the start and end of the resizing process:\"]}),\"\\n\",n(r,{id:\"events\"}),\"\\n\",i(t.h3,{id:\"vertical-splitter\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#vertical-splitter\",children:n(t.span,{className:\"icon icon-link\"})}),\"Vertical Splitter\"]}),\"\\n\",i(t.p,{children:[\"By default, the Splitter component is horizontal. If you need a vertical splitter, use the \",n(t.code,{children:\"orientation\"}),\" prop:\"]}),\"\\n\",n(r,{id:\"vertical\"}),\"\\n\",i(t.h3,{id:\"collapsible-panels\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#collapsible-panels\",children:n(t.span,{className:\"icon icon-link\"})}),\"Collapsible Panels\"]}),\"\\n\",i(t.p,{children:[\"To make a panel collapsible, set the \",n(t.code,{children:\"collapsible\"}),\" prop to \",n(t.code,{children:\"true\"}),\" on the panel you want to make collapsible.\\nAdditionally, you can use the \",n(t.code,{children:\"collapsedSize\"}),\" prop to set the size of the panel when it's collapsed.\"]}),\"\\n\",i(t.blockquote,{children:[\"\\n\",n(t.p,{children:\"This can be useful for building sidebar layouts.\"}),\"\\n\"]}),\"\\n\",n(r,{id:\"collapsible\"}),\"\\n\",i(t.h3,{id:\"multiple-panels\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#multiple-panels\",children:n(t.span,{className:\"icon icon-link\"})}),\"Multiple Panels\"]}),\"\\n\",i(t.p,{children:[\"Here's an example of how to use the \",n(t.code,{children:\"Splitter\"}),\" component with multiple panels.\"]}),\"\\n\",n(r,{id:\"multiple-panels\"}),\"\\n\",i(t.h3,{id:\"using-the-root-provider\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-the-root-provider\",children:n(t.span,{className:\"icon icon-link\"})}),\"Using the Root Provider\"]}),\"\\n\",i(t.p,{children:[\"The \",n(t.code,{children:\"RootProvider\"}),\" component provides a context for the splitter. It accepts the value of the \",n(t.code,{children:\"useSplitter\"}),\" hook. You\\ncan leverage it to access the component state and methods from outside the splitter.\"]}),\"\\n\",n(r,{id:\"root-provider\"}),\"\\n\",i(t.blockquote,{children:[\"\\n\",i(t.p,{children:[\"If you're using the \",n(t.code,{children:\"RootProvider\"}),\" component, you don't need to use the \",n(t.code,{children:\"Root\"}),\" component.\"]}),\"\\n\"]}),\"\\n\",i(t.h2,{id:\"api-reference\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#api-reference\",children:n(t.span,{className:\"icon icon-link\"})}),\"API Reference\"]}),\"\\n\",n(c,{id:\"splitter\"}),\"\\n\",i(t.h2,{id:\"accessibility\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#accessibility\",children:n(t.span,{className:\"icon icon-link\"})}),\"Accessibility\"]}),\"\\n\",i(t.p,{children:[\"Complies with the \",n(t.a,{href:\"https://www.w3.org/WAI/ARIA/apg/patterns/windowsplitter/\",children:\"Window Splitter WAI-ARIA design pattern\"}),\".\"]})]})}return{default:function(e={}){const{wrapper:i}=e.components||{};return i?n(i,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};function _missingMdxReference(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "<ComponentPreview id=\"Splitter\" />\n\n## Anatomy\n\nTo set up the splitter correctly, you'll need to understand its anatomy and how we name its parts.\n\n> Each part includes a `data-part` attribute to help identify them in the DOM.\n\n<Anatomy id=\"splitter\" />\n\n## Examples\n\nLearn how to use the `Splitter` component in your project. Let's take a look at the most basic example:\n\n<Example id=\"basic\" />\n\n### Using Render Props\n\nThe Splitter component allows you to pass a function as a child to gain direct access to its API. This provides more\ncontrol and allows you to modify the size of the panels programmatically:\n\n<Example id=\"render-prop\" />\n\n### Handling Events\n\nSplitter also provides `onResizeStart`, `onResize`, and `onResizeEnd` events which can be useful to perform some actions\nduring the start and end of the resizing process:\n\n<Example id=\"events\" />\n\n### Vertical Splitter\n\nBy default, the Splitter component is horizontal. If you need a vertical splitter, use the `orientation` prop:\n\n<Example id=\"vertical\" />\n\n### Collapsible Panels\n\nTo make a panel collapsible, set the `collapsible` prop to `true` on the panel you want to make collapsible.\nAdditionally, you can use the `collapsedSize` prop to set the size of the panel when it's collapsed.\n\n> This can be useful for building sidebar layouts.\n\n<Example id=\"collapsible\" />\n\n### Multiple Panels\n\nHere's an example of how to use the `Splitter` component with multiple panels.\n\n<Example id=\"multiple-panels\" />\n\n### Using the Root Provider\n\nThe `RootProvider` component provides a context for the splitter. It accepts the value of the `useSplitter` hook. You\ncan leverage it to access the component state and methods from outside the splitter.\n\n<Example id=\"root-provider\" />\n\n> If you're using the `RootProvider` component, you don't need to use the `Root` component.\n\n## API Reference\n\n<ComponentTypes id=\"splitter\" />\n\n## Accessibility\n\nComplies with the [Window Splitter WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/windowsplitter/).",
        "slug": "components/splitter",
        "category": "components"
    },
    {
        "id": "steps",
        "title": "Steps",
        "description": "Used to guide users through a series of steps in a process",
        "metadata": {
            "readingTime": 1,
            "wordCount": 109
        },
        "content": "<componentpreview id=\"Steps\">\n<h2>Usage</h2>\n<p>The <code>Steps</code> component is used to guide users through a series of steps in a process.</p>\n<ul>\n<li>Supports horizontal and vertical orientations.</li>\n<li>Support for changing the active step with the keyboard and pointer.</li>\n<li>Support for linear and non-linear steps.</li>\n</ul>\n<pre><code class=\"language-jsx\">import { Steps } from '@ark-ui/react/steps'\n</code></pre>\n<h2>Examples</h2>\n<h3>Basic</h3>\n<p>Here's a basic example of the <code>Steps</code> component.</p>\n<example component=\"steps\" id=\"basic\">\n<h3>Using the Root Provider</h3>\n<p>The <code>RootProvider</code> component provides a context for the steps. It accepts the value of the <code>useSteps</code> hook. You can\nleverage it to access the component state and methods from outside the steps.</p>\n<example id=\"root-provider\">\n<blockquote>\n<p>If you're using the <code>RootProvider</code> component, you don't need to use the <code>Root</code> component.</p>\n</blockquote>\n<h2>API Reference</h2>\n<componenttypes id=\"steps\"></componenttypes></example></example></componentpreview>",
        "framework": "*",
        "toc": [
            {
                "title": "Usage",
                "url": "#usage",
                "items": []
            },
            {
                "title": "Examples",
                "url": "#examples",
                "items": [
                    {
                        "title": "Basic",
                        "url": "#basic",
                        "items": []
                    },
                    {
                        "title": "Using the Root Provider",
                        "url": "#using-the-root-provider",
                        "items": []
                    }
                ]
            },
            {
                "title": "API Reference",
                "url": "#api-reference",
                "items": []
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:o}=arguments[0];function _createMdxContent(i){const r={a:\"a\",blockquote:\"blockquote\",code:\"code\",h2:\"h2\",h3:\"h3\",li:\"li\",p:\"p\",pre:\"pre\",span:\"span\",ul:\"ul\",...i.components},{ComponentPreview:c,ComponentTypes:s,Example:t}=r;return c||_missingMdxReference(\"ComponentPreview\",!0),s||_missingMdxReference(\"ComponentTypes\",!0),t||_missingMdxReference(\"Example\",!0),o(e,{children:[n(c,{id:\"Steps\"}),\"\\n\",o(r.h2,{id:\"usage\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#usage\",children:n(r.span,{className:\"icon icon-link\"})}),\"Usage\"]}),\"\\n\",o(r.p,{children:[\"The \",n(r.code,{children:\"Steps\"}),\" component is used to guide users through a series of steps in a process.\"]}),\"\\n\",o(r.ul,{children:[\"\\n\",n(r.li,{children:\"Supports horizontal and vertical orientations.\"}),\"\\n\",n(r.li,{children:\"Support for changing the active step with the keyboard and pointer.\"}),\"\\n\",n(r.li,{children:\"Support for linear and non-linear steps.\"}),\"\\n\"]}),\"\\n\",n(r.pre,{children:n(r.code,{className:\"language-jsx\",children:\"import { Steps } from '@ark-ui/react/steps'\\n\"})}),\"\\n\",o(r.h2,{id:\"examples\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#examples\",children:n(r.span,{className:\"icon icon-link\"})}),\"Examples\"]}),\"\\n\",o(r.h3,{id:\"basic\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#basic\",children:n(r.span,{className:\"icon icon-link\"})}),\"Basic\"]}),\"\\n\",o(r.p,{children:[\"Here's a basic example of the \",n(r.code,{children:\"Steps\"}),\" component.\"]}),\"\\n\",n(t,{component:\"steps\",id:\"basic\"}),\"\\n\",o(r.h3,{id:\"using-the-root-provider\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-the-root-provider\",children:n(r.span,{className:\"icon icon-link\"})}),\"Using the Root Provider\"]}),\"\\n\",o(r.p,{children:[\"The \",n(r.code,{children:\"RootProvider\"}),\" component provides a context for the steps. It accepts the value of the \",n(r.code,{children:\"useSteps\"}),\" hook. You can\\nleverage it to access the component state and methods from outside the steps.\"]}),\"\\n\",n(t,{id:\"root-provider\"}),\"\\n\",o(r.blockquote,{children:[\"\\n\",o(r.p,{children:[\"If you're using the \",n(r.code,{children:\"RootProvider\"}),\" component, you don't need to use the \",n(r.code,{children:\"Root\"}),\" component.\"]}),\"\\n\"]}),\"\\n\",o(r.h2,{id:\"api-reference\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#api-reference\",children:n(r.span,{className:\"icon icon-link\"})}),\"API Reference\"]}),\"\\n\",n(s,{id:\"steps\"})]})}return{default:function(e={}){const{wrapper:o}=e.components||{};return o?n(o,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};function _missingMdxReference(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "<ComponentPreview id=\"Steps\" />\n\n## Usage\n\nThe `Steps` component is used to guide users through a series of steps in a process.\n\n- Supports horizontal and vertical orientations.\n- Support for changing the active step with the keyboard and pointer.\n- Support for linear and non-linear steps.\n\n```jsx\nimport { Steps } from '@ark-ui/react/steps'\n```\n\n## Examples\n\n### Basic\n\nHere's a basic example of the `Steps` component.\n\n<Example component=\"steps\" id=\"basic\" />\n\n### Using the Root Provider\n\nThe `RootProvider` component provides a context for the steps. It accepts the value of the `useSteps` hook. You can\nleverage it to access the component state and methods from outside the steps.\n\n<Example id=\"root-provider\" />\n\n> If you're using the `RootProvider` component, you don't need to use the `Root` component.\n\n## API Reference\n\n<ComponentTypes id=\"steps\" />",
        "slug": "components/steps",
        "category": "components"
    },
    {
        "id": "switch",
        "title": "Switch",
        "description": "A control element that allows for a binary selection.",
        "metadata": {
            "readingTime": 1,
            "wordCount": 284
        },
        "content": "<componentpreview id=\"Switch\">\n<h2>Anatomy</h2>\n<p>To set up the switch correctly, you'll need to understand its anatomy and how we name its parts.</p>\n<blockquote>\n<p>Each part includes a <code>data-part</code> attribute to help identify them in the DOM.</p>\n</blockquote>\n<anatomy id=\"switch\">\n<h3>Design impact on the asChild property</h3>\n<p>The <code>Switch.Root</code> element of the switch is a <code>label</code> element. This is because the switch is a form control and should be\nassociated with a label to provide context and meaning to the user. Otherwise, the HTML and accessibility structure will\nbe invalid.</p>\n<blockquote>\n<p>If you need to use the <code>asChild</code> property, make sure that the <code>label</code> element is the direct child of the <code>Switch.Root</code>\ncomponent.</p>\n</blockquote>\n<h2>Examples</h2>\n<p>Learn how to use the <code>Switch</code> component in your project. Let's take a look at the most basic example:</p>\n<example id=\"basic\">\n<h3>Controlled Switch</h3>\n<p>For a controlled Switch component, the state of the toggle is managed using the checked prop, and updates when the\n<code>onCheckedChange</code> event handler is called:</p>\n<example id=\"controlled\">\n<h3>Render Prop Usage</h3>\n<p>The Switch component also allows for a render prop, granting direct access to its internal state. This enables you to\ndynamically adjust and customize aspects of the component based on its current state:</p>\n<example id=\"render-prop\">\n<h3>Using the Field Component</h3>\n<p>The <code>Field</code> component helps manage form-related state and accessibility attributes of a switch. It includes handling\nARIA labels, helper text, and error text to ensure proper accessibility.</p>\n<example id=\"with-field\">\n<h3>Using the Root Provider</h3>\n<p>The <code>RootProvider</code> component provides a context for the switch. It accepts the value of the <code>useSwitch</code> hook. You can\nleverage it to access the component state and methods from outside the switch.</p>\n<example id=\"root-provider\">\n<blockquote>\n<p>If you're using the <code>RootProvider</code> component, you don't need to use the <code>Root</code> component.</p>\n</blockquote>\n<h2>API Reference</h2>\n<componenttypes id=\"switch\">\n<h2>Accessibility</h2>\n<p>Complies with the <a href=\"https://www.w3.org/WAI/ARIA/apg/patterns/switch/\">Switch WAI-ARIA design pattern</a>.</p>\n<h3>Keyboard Support</h3>\n<keybindingstable id=\"switch\"></keybindingstable></componenttypes></example></example></example></example></example></anatomy></componentpreview>",
        "framework": "*",
        "toc": [
            {
                "title": "Anatomy",
                "url": "#anatomy",
                "items": [
                    {
                        "title": "Design impact on the asChild property",
                        "url": "#design-impact-on-the-aschild-property",
                        "items": []
                    }
                ]
            },
            {
                "title": "Examples",
                "url": "#examples",
                "items": [
                    {
                        "title": "Controlled Switch",
                        "url": "#controlled-switch",
                        "items": []
                    },
                    {
                        "title": "Render Prop Usage",
                        "url": "#render-prop-usage",
                        "items": []
                    },
                    {
                        "title": "Using the Field Component",
                        "url": "#using-the-field-component",
                        "items": []
                    },
                    {
                        "title": "Using the Root Provider",
                        "url": "#using-the-root-provider",
                        "items": []
                    }
                ]
            },
            {
                "title": "API Reference",
                "url": "#api-reference",
                "items": []
            },
            {
                "title": "Accessibility",
                "url": "#accessibility",
                "items": [
                    {
                        "title": "Keyboard Support",
                        "url": "#keyboard-support",
                        "items": []
                    }
                ]
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:i}=arguments[0];function _createMdxContent(t){const o={a:\"a\",blockquote:\"blockquote\",code:\"code\",h2:\"h2\",h3:\"h3\",p:\"p\",span:\"span\",...t.components},{Anatomy:c,ComponentPreview:a,ComponentTypes:r,Example:s,KeyBindingsTable:h}=o;return c||_missingMdxReference(\"Anatomy\",!0),a||_missingMdxReference(\"ComponentPreview\",!0),r||_missingMdxReference(\"ComponentTypes\",!0),s||_missingMdxReference(\"Example\",!0),h||_missingMdxReference(\"KeyBindingsTable\",!0),i(e,{children:[n(a,{id:\"Switch\"}),\"\\n\",i(o.h2,{id:\"anatomy\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#anatomy\",children:n(o.span,{className:\"icon icon-link\"})}),\"Anatomy\"]}),\"\\n\",n(o.p,{children:\"To set up the switch correctly, you'll need to understand its anatomy and how we name its parts.\"}),\"\\n\",i(o.blockquote,{children:[\"\\n\",i(o.p,{children:[\"Each part includes a \",n(o.code,{children:\"data-part\"}),\" attribute to help identify them in the DOM.\"]}),\"\\n\"]}),\"\\n\",n(c,{id:\"switch\"}),\"\\n\",i(o.h3,{id:\"design-impact-on-the-aschild-property\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#design-impact-on-the-aschild-property\",children:n(o.span,{className:\"icon icon-link\"})}),\"Design impact on the asChild property\"]}),\"\\n\",i(o.p,{children:[\"The \",n(o.code,{children:\"Switch.Root\"}),\" element of the switch is a \",n(o.code,{children:\"label\"}),\" element. This is because the switch is a form control and should be\\nassociated with a label to provide context and meaning to the user. Otherwise, the HTML and accessibility structure will\\nbe invalid.\"]}),\"\\n\",i(o.blockquote,{children:[\"\\n\",i(o.p,{children:[\"If you need to use the \",n(o.code,{children:\"asChild\"}),\" property, make sure that the \",n(o.code,{children:\"label\"}),\" element is the direct child of the \",n(o.code,{children:\"Switch.Root\"}),\"\\ncomponent.\"]}),\"\\n\"]}),\"\\n\",i(o.h2,{id:\"examples\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#examples\",children:n(o.span,{className:\"icon icon-link\"})}),\"Examples\"]}),\"\\n\",i(o.p,{children:[\"Learn how to use the \",n(o.code,{children:\"Switch\"}),\" component in your project. Let's take a look at the most basic example:\"]}),\"\\n\",n(s,{id:\"basic\"}),\"\\n\",i(o.h3,{id:\"controlled-switch\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#controlled-switch\",children:n(o.span,{className:\"icon icon-link\"})}),\"Controlled Switch\"]}),\"\\n\",i(o.p,{children:[\"For a controlled Switch component, the state of the toggle is managed using the checked prop, and updates when the\\n\",n(o.code,{children:\"onCheckedChange\"}),\" event handler is called:\"]}),\"\\n\",n(s,{id:\"controlled\"}),\"\\n\",i(o.h3,{id:\"render-prop-usage\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#render-prop-usage\",children:n(o.span,{className:\"icon icon-link\"})}),\"Render Prop Usage\"]}),\"\\n\",n(o.p,{children:\"The Switch component also allows for a render prop, granting direct access to its internal state. This enables you to\\ndynamically adjust and customize aspects of the component based on its current state:\"}),\"\\n\",n(s,{id:\"render-prop\"}),\"\\n\",i(o.h3,{id:\"using-the-field-component\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-the-field-component\",children:n(o.span,{className:\"icon icon-link\"})}),\"Using the Field Component\"]}),\"\\n\",i(o.p,{children:[\"The \",n(o.code,{children:\"Field\"}),\" component helps manage form-related state and accessibility attributes of a switch. It includes handling\\nARIA labels, helper text, and error text to ensure proper accessibility.\"]}),\"\\n\",n(s,{id:\"with-field\"}),\"\\n\",i(o.h3,{id:\"using-the-root-provider\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-the-root-provider\",children:n(o.span,{className:\"icon icon-link\"})}),\"Using the Root Provider\"]}),\"\\n\",i(o.p,{children:[\"The \",n(o.code,{children:\"RootProvider\"}),\" component provides a context for the switch. It accepts the value of the \",n(o.code,{children:\"useSwitch\"}),\" hook. You can\\nleverage it to access the component state and methods from outside the switch.\"]}),\"\\n\",n(s,{id:\"root-provider\"}),\"\\n\",i(o.blockquote,{children:[\"\\n\",i(o.p,{children:[\"If you're using the \",n(o.code,{children:\"RootProvider\"}),\" component, you don't need to use the \",n(o.code,{children:\"Root\"}),\" component.\"]}),\"\\n\"]}),\"\\n\",i(o.h2,{id:\"api-reference\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#api-reference\",children:n(o.span,{className:\"icon icon-link\"})}),\"API Reference\"]}),\"\\n\",n(r,{id:\"switch\"}),\"\\n\",i(o.h2,{id:\"accessibility\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#accessibility\",children:n(o.span,{className:\"icon icon-link\"})}),\"Accessibility\"]}),\"\\n\",i(o.p,{children:[\"Complies with the \",n(o.a,{href:\"https://www.w3.org/WAI/ARIA/apg/patterns/switch/\",children:\"Switch WAI-ARIA design pattern\"}),\".\"]}),\"\\n\",i(o.h3,{id:\"keyboard-support\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#keyboard-support\",children:n(o.span,{className:\"icon icon-link\"})}),\"Keyboard Support\"]}),\"\\n\",n(h,{id:\"switch\"})]})}return{default:function(e={}){const{wrapper:i}=e.components||{};return i?n(i,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};function _missingMdxReference(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "<ComponentPreview id=\"Switch\" />\n\n## Anatomy\n\nTo set up the switch correctly, you'll need to understand its anatomy and how we name its parts.\n\n> Each part includes a `data-part` attribute to help identify them in the DOM.\n\n<Anatomy id=\"switch\" />\n\n### Design impact on the asChild property\n\nThe `Switch.Root` element of the switch is a `label` element. This is because the switch is a form control and should be\nassociated with a label to provide context and meaning to the user. Otherwise, the HTML and accessibility structure will\nbe invalid.\n\n> If you need to use the `asChild` property, make sure that the `label` element is the direct child of the `Switch.Root`\n> component.\n\n## Examples\n\nLearn how to use the `Switch` component in your project. Let's take a look at the most basic example:\n\n<Example id=\"basic\" />\n\n### Controlled Switch\n\nFor a controlled Switch component, the state of the toggle is managed using the checked prop, and updates when the\n`onCheckedChange` event handler is called:\n\n<Example id=\"controlled\" />\n\n### Render Prop Usage\n\nThe Switch component also allows for a render prop, granting direct access to its internal state. This enables you to\ndynamically adjust and customize aspects of the component based on its current state:\n\n<Example id=\"render-prop\" />\n\n### Using the Field Component\n\nThe `Field` component helps manage form-related state and accessibility attributes of a switch. It includes handling\nARIA labels, helper text, and error text to ensure proper accessibility.\n\n<Example id=\"with-field\" />\n\n### Using the Root Provider\n\nThe `RootProvider` component provides a context for the switch. It accepts the value of the `useSwitch` hook. You can\nleverage it to access the component state and methods from outside the switch.\n\n<Example id=\"root-provider\" />\n\n> If you're using the `RootProvider` component, you don't need to use the `Root` component.\n\n## API Reference\n\n<ComponentTypes id=\"switch\" />\n\n## Accessibility\n\nComplies with the [Switch WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/switch/).\n\n### Keyboard Support\n\n<KeyBindingsTable id=\"switch\" />",
        "slug": "components/switch",
        "category": "components"
    },
    {
        "id": "tabs",
        "title": "Tabs",
        "description": "Flexible navigation tool with various modes and features.",
        "metadata": {
            "readingTime": 2,
            "wordCount": 491
        },
        "content": "<componentpreview id=\"Tabs\">\n<h2>Anatomy</h2>\n<p>To set up the tabs correctly, you'll need to understand its anatomy and how we name its parts.</p>\n<blockquote>\n<p>Each part includes a <code>data-part</code> attribute to help identify them in the DOM.</p>\n</blockquote>\n<anatomy id=\"tabs\">\n<h2>Examples</h2>\n<p>Learn how to use the <code>Tabs</code> component in your project. Let's take a look at the most basic example:</p>\n<example id=\"basic\">\n<h3>Initial Tab</h3>\n<p>To set a default tab on initial render, use the <code>defaultValue</code> prop:</p>\n<example id=\"initial-tab\">\n<h3>Tab Indicator</h3>\n<p>To provide a visual cue for the selected tab, use the <code>Tabs.Indicator</code> component:</p>\n<example id=\"indicator\">\n<h3>Lazy Mounting</h3>\n<p>Lazy mounting is a feature that allows the content of a tab to be rendered only when the tab is first activated. This is\nuseful for performance optimization, especially when tab content is large or complex. To enable lazy mounting, use the\n<code>lazyMount</code> prop on the <code>Tabs.Content</code> component.</p>\n<p>In addition, the <code>unmountOnExit</code> prop can be used in conjunction with <code>lazyMount</code> to unmount the tab content when the\ntab is deactivated, freeing up resources. The next time the tab is activated, its content will be re-rendered.</p>\n<example id=\"lazy-mount\">\n<h3>Disabled Tab</h3>\n<p>To disable a tab, simply pass the <code>disabled</code> prop to the <code>Tabs.Trigger</code> component:</p>\n<example id=\"disabled-tab\">\n<h3>Controlled Tabs</h3>\n<p>To create a controlled Tabs component, manage the current selected tab using the <code>value</code> prop and update it when the\n<code>onValueChange</code> event handler is called:</p>\n<example id=\"controlled\">\n<h3>Router Controlled Tabs</h3>\n<p>When using frameworks like Next.js, Remix, or React Router, controlling the active tabs based on the URL can be useful.</p>\n<p>To achieve this, you need to do two things:</p>\n<ul>\n<li>Set the <code>value</code> prop to the current URL path.</li>\n<li>Listen to the <code>onValueChange</code> event and update the URL path.</li>\n</ul>\n<p>Here's an example using Remix Router</p>\n<pre><code class=\"language-tsx\">import { Tabs } from '@ark-ui/react/tabs'\nimport { useLocation, useNavigate, Link } from '@remix-run/react'\n\nexport default function App() {\n  const { pathname } = useLocation()\n  const navigate = useNavigate()\n  const lastPathFragment = pathname.substring(pathname.lastIndexOf('/') + 1)\n  const activeTab = lastPathFragment.length > 0 ? lastPathFragment : 'homepage'\n\n  return (\n    &#x3C;Tabs.Root\n      value={activeTab}\n      onValueChange={({ value }) => {\n        navigate(`/${value === 'home' ? '' : value}`)\n      }}\n    >\n      &#x3C;Tabs.List>\n        &#x3C;Tabs.Trigger asChild value=\"home\">\n          &#x3C;Link to=\"\">Home&#x3C;/Link>\n        &#x3C;/Tabs.Trigger>\n        &#x3C;Tabs.Trigger asChild value=\"page-1\">\n          &#x3C;Link to=\"page-1\">Page 1&#x3C;/Link>\n        &#x3C;/Tabs.Trigger>\n        &#x3C;Tabs.Trigger asChild value=\"page-2\">\n          &#x3C;Link to=\"page-2\">Page 2&#x3C;/Link>\n        &#x3C;/Tabs.Trigger>\n      &#x3C;/Tabs.List>\n    &#x3C;/Tabs.Root>\n  )\n}\n</code></pre>\n<h3>Vertical Tabs</h3>\n<p>The default orientation of the tabs is <code>horizontal</code>. To change the orientation, set the <code>orientation</code> prop to\n<code>vertical</code>.</p>\n<example id=\"vertical\">\n<h3>Manual Activation</h3>\n<p>By default, the tab can be selected when it receives focus from either the keyboard or pointer interaction. This is\ncalled automatic tab activation.</p>\n<p>In contrast, manual tab activation means the tab is selected with the</p>\n<p><kbd>Enter</kbd> key or by clicking on the tab.</p>\n<example id=\"manual\">\n<h3>Using the Root Provider</h3>\n<p>The <code>RootProvider</code> component provides a context for the tabs. It accepts the value of the <code>useTabs</code> hook. You can\nleverage it to access the component state and methods from outside the tabs.</p>\n<example id=\"root-provider\">\n<blockquote>\n<p>If you're using the <code>RootProvider</code> component, you don't need to use the <code>Root</code> component.</p>\n</blockquote>\n<h2>API Reference</h2>\n<componenttypes id=\"tabs\">\n<h2>Accessibility</h2>\n<p>Complies with the <a href=\"https://www.w3.org/WAI/ARIA/apg/patterns/tabs/\">Tabs WAI-ARIA design pattern</a>.</p>\n<h3>Keyboard Support</h3>\n<keybindingstable id=\"tabs\"></keybindingstable></componenttypes></example></example></example></example></example></example></example></example></example></anatomy></componentpreview>",
        "framework": "*",
        "toc": [
            {
                "title": "Anatomy",
                "url": "#anatomy",
                "items": []
            },
            {
                "title": "Examples",
                "url": "#examples",
                "items": [
                    {
                        "title": "Initial Tab",
                        "url": "#initial-tab",
                        "items": []
                    },
                    {
                        "title": "Tab Indicator",
                        "url": "#tab-indicator",
                        "items": []
                    },
                    {
                        "title": "Lazy Mounting",
                        "url": "#lazy-mounting",
                        "items": []
                    },
                    {
                        "title": "Disabled Tab",
                        "url": "#disabled-tab",
                        "items": []
                    },
                    {
                        "title": "Controlled Tabs",
                        "url": "#controlled-tabs",
                        "items": []
                    },
                    {
                        "title": "Router Controlled Tabs",
                        "url": "#router-controlled-tabs",
                        "items": []
                    },
                    {
                        "title": "Vertical Tabs",
                        "url": "#vertical-tabs",
                        "items": []
                    },
                    {
                        "title": "Manual Activation",
                        "url": "#manual-activation",
                        "items": []
                    },
                    {
                        "title": "Using the Root Provider",
                        "url": "#using-the-root-provider",
                        "items": []
                    }
                ]
            },
            {
                "title": "API Reference",
                "url": "#api-reference",
                "items": []
            },
            {
                "title": "Accessibility",
                "url": "#accessibility",
                "items": [
                    {
                        "title": "Keyboard Support",
                        "url": "#keyboard-support",
                        "items": []
                    }
                ]
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:a}=arguments[0];function _createMdxContent(i){const t={a:\"a\",blockquote:\"blockquote\",code:\"code\",h2:\"h2\",h3:\"h3\",li:\"li\",p:\"p\",pre:\"pre\",span:\"span\",ul:\"ul\",...i.components},{Anatomy:o,ComponentPreview:c,ComponentTypes:r,Example:l,KeyBindingsTable:s}=t;return o||_missingMdxReference(\"Anatomy\",!0),c||_missingMdxReference(\"ComponentPreview\",!0),r||_missingMdxReference(\"ComponentTypes\",!0),l||_missingMdxReference(\"Example\",!0),s||_missingMdxReference(\"KeyBindingsTable\",!0),a(e,{children:[n(c,{id:\"Tabs\"}),\"\\n\",a(t.h2,{id:\"anatomy\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#anatomy\",children:n(t.span,{className:\"icon icon-link\"})}),\"Anatomy\"]}),\"\\n\",n(t.p,{children:\"To set up the tabs correctly, you'll need to understand its anatomy and how we name its parts.\"}),\"\\n\",a(t.blockquote,{children:[\"\\n\",a(t.p,{children:[\"Each part includes a \",n(t.code,{children:\"data-part\"}),\" attribute to help identify them in the DOM.\"]}),\"\\n\"]}),\"\\n\",n(o,{id:\"tabs\"}),\"\\n\",a(t.h2,{id:\"examples\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#examples\",children:n(t.span,{className:\"icon icon-link\"})}),\"Examples\"]}),\"\\n\",a(t.p,{children:[\"Learn how to use the \",n(t.code,{children:\"Tabs\"}),\" component in your project. Let's take a look at the most basic example:\"]}),\"\\n\",n(l,{id:\"basic\"}),\"\\n\",a(t.h3,{id:\"initial-tab\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#initial-tab\",children:n(t.span,{className:\"icon icon-link\"})}),\"Initial Tab\"]}),\"\\n\",a(t.p,{children:[\"To set a default tab on initial render, use the \",n(t.code,{children:\"defaultValue\"}),\" prop:\"]}),\"\\n\",n(l,{id:\"initial-tab\"}),\"\\n\",a(t.h3,{id:\"tab-indicator\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#tab-indicator\",children:n(t.span,{className:\"icon icon-link\"})}),\"Tab Indicator\"]}),\"\\n\",a(t.p,{children:[\"To provide a visual cue for the selected tab, use the \",n(t.code,{children:\"Tabs.Indicator\"}),\" component:\"]}),\"\\n\",n(l,{id:\"indicator\"}),\"\\n\",a(t.h3,{id:\"lazy-mounting\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#lazy-mounting\",children:n(t.span,{className:\"icon icon-link\"})}),\"Lazy Mounting\"]}),\"\\n\",a(t.p,{children:[\"Lazy mounting is a feature that allows the content of a tab to be rendered only when the tab is first activated. This is\\nuseful for performance optimization, especially when tab content is large or complex. To enable lazy mounting, use the\\n\",n(t.code,{children:\"lazyMount\"}),\" prop on the \",n(t.code,{children:\"Tabs.Content\"}),\" component.\"]}),\"\\n\",a(t.p,{children:[\"In addition, the \",n(t.code,{children:\"unmountOnExit\"}),\" prop can be used in conjunction with \",n(t.code,{children:\"lazyMount\"}),\" to unmount the tab content when the\\ntab is deactivated, freeing up resources. The next time the tab is activated, its content will be re-rendered.\"]}),\"\\n\",n(l,{id:\"lazy-mount\"}),\"\\n\",a(t.h3,{id:\"disabled-tab\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#disabled-tab\",children:n(t.span,{className:\"icon icon-link\"})}),\"Disabled Tab\"]}),\"\\n\",a(t.p,{children:[\"To disable a tab, simply pass the \",n(t.code,{children:\"disabled\"}),\" prop to the \",n(t.code,{children:\"Tabs.Trigger\"}),\" component:\"]}),\"\\n\",n(l,{id:\"disabled-tab\"}),\"\\n\",a(t.h3,{id:\"controlled-tabs\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#controlled-tabs\",children:n(t.span,{className:\"icon icon-link\"})}),\"Controlled Tabs\"]}),\"\\n\",a(t.p,{children:[\"To create a controlled Tabs component, manage the current selected tab using the \",n(t.code,{children:\"value\"}),\" prop and update it when the\\n\",n(t.code,{children:\"onValueChange\"}),\" event handler is called:\"]}),\"\\n\",n(l,{id:\"controlled\"}),\"\\n\",a(t.h3,{id:\"router-controlled-tabs\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#router-controlled-tabs\",children:n(t.span,{className:\"icon icon-link\"})}),\"Router Controlled Tabs\"]}),\"\\n\",n(t.p,{children:\"When using frameworks like Next.js, Remix, or React Router, controlling the active tabs based on the URL can be useful.\"}),\"\\n\",n(t.p,{children:\"To achieve this, you need to do two things:\"}),\"\\n\",a(t.ul,{children:[\"\\n\",a(t.li,{children:[\"Set the \",n(t.code,{children:\"value\"}),\" prop to the current URL path.\"]}),\"\\n\",a(t.li,{children:[\"Listen to the \",n(t.code,{children:\"onValueChange\"}),\" event and update the URL path.\"]}),\"\\n\"]}),\"\\n\",n(t.p,{children:\"Here's an example using Remix Router\"}),\"\\n\",n(t.pre,{children:n(t.code,{className:\"language-tsx\",children:\"import { Tabs } from '@ark-ui/react/tabs'\\nimport { useLocation, useNavigate, Link } from '@remix-run/react'\\n\\nexport default function App() {\\n  const { pathname } = useLocation()\\n  const navigate = useNavigate()\\n  const lastPathFragment = pathname.substring(pathname.lastIndexOf('/') + 1)\\n  const activeTab = lastPathFragment.length > 0 ? lastPathFragment : 'homepage'\\n\\n  return (\\n    <Tabs.Root\\n      value={activeTab}\\n      onValueChange={({ value }) => {\\n        navigate(`/${value === 'home' ? '' : value}`)\\n      }}\\n    >\\n      <Tabs.List>\\n        <Tabs.Trigger asChild value=\\\"home\\\">\\n          <Link to=\\\"\\\">Home</Link>\\n        </Tabs.Trigger>\\n        <Tabs.Trigger asChild value=\\\"page-1\\\">\\n          <Link to=\\\"page-1\\\">Page 1</Link>\\n        </Tabs.Trigger>\\n        <Tabs.Trigger asChild value=\\\"page-2\\\">\\n          <Link to=\\\"page-2\\\">Page 2</Link>\\n        </Tabs.Trigger>\\n      </Tabs.List>\\n    </Tabs.Root>\\n  )\\n}\\n\"})}),\"\\n\",a(t.h3,{id:\"vertical-tabs\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#vertical-tabs\",children:n(t.span,{className:\"icon icon-link\"})}),\"Vertical Tabs\"]}),\"\\n\",a(t.p,{children:[\"The default orientation of the tabs is \",n(t.code,{children:\"horizontal\"}),\". To change the orientation, set the \",n(t.code,{children:\"orientation\"}),\" prop to\\n\",n(t.code,{children:\"vertical\"}),\".\"]}),\"\\n\",n(l,{id:\"vertical\"}),\"\\n\",a(t.h3,{id:\"manual-activation\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#manual-activation\",children:n(t.span,{className:\"icon icon-link\"})}),\"Manual Activation\"]}),\"\\n\",n(t.p,{children:\"By default, the tab can be selected when it receives focus from either the keyboard or pointer interaction. This is\\ncalled automatic tab activation.\"}),\"\\n\",n(t.p,{children:\"In contrast, manual tab activation means the tab is selected with the\"}),\"\\n\",a(t.p,{children:[n(\"kbd\",{children:\"Enter\"}),\" key or by clicking on the tab.\"]}),\"\\n\",n(l,{id:\"manual\"}),\"\\n\",a(t.h3,{id:\"using-the-root-provider\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-the-root-provider\",children:n(t.span,{className:\"icon icon-link\"})}),\"Using the Root Provider\"]}),\"\\n\",a(t.p,{children:[\"The \",n(t.code,{children:\"RootProvider\"}),\" component provides a context for the tabs. It accepts the value of the \",n(t.code,{children:\"useTabs\"}),\" hook. You can\\nleverage it to access the component state and methods from outside the tabs.\"]}),\"\\n\",n(l,{id:\"root-provider\"}),\"\\n\",a(t.blockquote,{children:[\"\\n\",a(t.p,{children:[\"If you're using the \",n(t.code,{children:\"RootProvider\"}),\" component, you don't need to use the \",n(t.code,{children:\"Root\"}),\" component.\"]}),\"\\n\"]}),\"\\n\",a(t.h2,{id:\"api-reference\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#api-reference\",children:n(t.span,{className:\"icon icon-link\"})}),\"API Reference\"]}),\"\\n\",n(r,{id:\"tabs\"}),\"\\n\",a(t.h2,{id:\"accessibility\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#accessibility\",children:n(t.span,{className:\"icon icon-link\"})}),\"Accessibility\"]}),\"\\n\",a(t.p,{children:[\"Complies with the \",n(t.a,{href:\"https://www.w3.org/WAI/ARIA/apg/patterns/tabs/\",children:\"Tabs WAI-ARIA design pattern\"}),\".\"]}),\"\\n\",a(t.h3,{id:\"keyboard-support\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#keyboard-support\",children:n(t.span,{className:\"icon icon-link\"})}),\"Keyboard Support\"]}),\"\\n\",n(s,{id:\"tabs\"})]})}return{default:function(e={}){const{wrapper:a}=e.components||{};return a?n(a,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};function _missingMdxReference(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "<ComponentPreview id=\"Tabs\" />\n\n## Anatomy\n\nTo set up the tabs correctly, you'll need to understand its anatomy and how we name its parts.\n\n> Each part includes a `data-part` attribute to help identify them in the DOM.\n\n<Anatomy id=\"tabs\" />\n\n## Examples\n\nLearn how to use the `Tabs` component in your project. Let's take a look at the most basic example:\n\n<Example id=\"basic\" />\n\n### Initial Tab\n\nTo set a default tab on initial render, use the `defaultValue` prop:\n\n<Example id=\"initial-tab\" />\n\n### Tab Indicator\n\nTo provide a visual cue for the selected tab, use the `Tabs.Indicator` component:\n\n<Example id=\"indicator\" />\n\n### Lazy Mounting\n\nLazy mounting is a feature that allows the content of a tab to be rendered only when the tab is first activated. This is\nuseful for performance optimization, especially when tab content is large or complex. To enable lazy mounting, use the\n`lazyMount` prop on the `Tabs.Content` component.\n\nIn addition, the `unmountOnExit` prop can be used in conjunction with `lazyMount` to unmount the tab content when the\ntab is deactivated, freeing up resources. The next time the tab is activated, its content will be re-rendered.\n\n<Example id=\"lazy-mount\" />\n\n### Disabled Tab\n\nTo disable a tab, simply pass the `disabled` prop to the `Tabs.Trigger` component:\n\n<Example id=\"disabled-tab\" />\n\n### Controlled Tabs\n\nTo create a controlled Tabs component, manage the current selected tab using the `value` prop and update it when the\n`onValueChange` event handler is called:\n\n<Example id=\"controlled\" />\n\n### Router Controlled Tabs\n\nWhen using frameworks like Next.js, Remix, or React Router, controlling the active tabs based on the URL can be useful.\n\nTo achieve this, you need to do two things:\n\n- Set the `value` prop to the current URL path.\n- Listen to the `onValueChange` event and update the URL path.\n\nHere's an example using Remix Router\n\n```tsx\nimport { Tabs } from '@ark-ui/react/tabs'\nimport { useLocation, useNavigate, Link } from '@remix-run/react'\n\nexport default function App() {\n  const { pathname } = useLocation()\n  const navigate = useNavigate()\n  const lastPathFragment = pathname.substring(pathname.lastIndexOf('/') + 1)\n  const activeTab = lastPathFragment.length > 0 ? lastPathFragment : 'homepage'\n\n  return (\n    <Tabs.Root\n      value={activeTab}\n      onValueChange={({ value }) => {\n        navigate(`/${value === 'home' ? '' : value}`)\n      }}\n    >\n      <Tabs.List>\n        <Tabs.Trigger asChild value=\"home\">\n          <Link to=\"\">Home</Link>\n        </Tabs.Trigger>\n        <Tabs.Trigger asChild value=\"page-1\">\n          <Link to=\"page-1\">Page 1</Link>\n        </Tabs.Trigger>\n        <Tabs.Trigger asChild value=\"page-2\">\n          <Link to=\"page-2\">Page 2</Link>\n        </Tabs.Trigger>\n      </Tabs.List>\n    </Tabs.Root>\n  )\n}\n```\n\n### Vertical Tabs\n\nThe default orientation of the tabs is `horizontal`. To change the orientation, set the `orientation` prop to\n`vertical`.\n\n<Example id=\"vertical\" />\n\n### Manual Activation\n\nBy default, the tab can be selected when it receives focus from either the keyboard or pointer interaction. This is\ncalled automatic tab activation.\n\nIn contrast, manual tab activation means the tab is selected with the\n\n<kbd>Enter</kbd> key or by clicking on the tab.\n\n<Example id=\"manual\" />\n\n### Using the Root Provider\n\nThe `RootProvider` component provides a context for the tabs. It accepts the value of the `useTabs` hook. You can\nleverage it to access the component state and methods from outside the tabs.\n\n<Example id=\"root-provider\" />\n\n> If you're using the `RootProvider` component, you don't need to use the `Root` component.\n\n## API Reference\n\n<ComponentTypes id=\"tabs\" />\n\n## Accessibility\n\nComplies with the [Tabs WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/).\n\n### Keyboard Support\n\n<KeyBindingsTable id=\"tabs\" />",
        "slug": "components/tabs",
        "category": "components"
    },
    {
        "id": "tags-input",
        "title": "Tags Input",
        "description": "A component that allows users to add tags to an input field.",
        "metadata": {
            "readingTime": 2,
            "wordCount": 485
        },
        "content": "<componentpreview id=\"TagsInput\">\n<h2>Anatomy</h2>\n<p>To set up the tags input correctly, you'll need to understand its anatomy and how we name its parts.</p>\n<blockquote>\n<p>Each part includes a <code>data-part</code> attribute to help identify them in the DOM.</p>\n</blockquote>\n<anatomy id=\"tags-input\">\n<h2>Examples</h2>\n<p>Learn how to use the <code>TagsInput</code> component in your project. Let's take a look at the most basic example:</p>\n<example id=\"basic\">\n<h3>Navigating and Editing tags</h3>\n<p>When the input has an empty value or the caret is at the start position, the tags can be selected by using the arrow\nleft and arrow right keys. When \"visual\" focus in on any tag:</p>\n<ul>\n<li>Pressing <kbd>Enter</kbd> or double-clicking on the tag will put it in edit mode, allowing the user change its value\nand press <kbd>Enter</kbd> to commit the changes.</li>\n<li>Pressing <kbd>Delete</kbd> or <kbd>Backspace</kbd> will delete the tag that has <em>visual</em> focus.</li>\n</ul>\n<h3>Setting the initial tags</h3>\n<p>To set the initial tag values, set the <code>defaultValue</code> prop.</p>\n<example id=\"initial-value\">\n<h3>Limiting the number of tags</h3>\n<p>To limit the number of tags within the component, you can set the <code>max</code> property to the limit you want. The default\nvalue is <code>Infinity</code>.</p>\n<p>When the tag reaches the limit, new tags cannot be added except the <code>allowOverflow</code> prop is set to <code>true</code>.</p>\n<example id=\"max-with-overflow\">\n<h3>Validating Tags</h3>\n<p>Before a tag is added, the <code>validate</code> function is called to determine whether to accept or reject a tag.</p>\n<p>A common use-case for validating tags is preventing duplicates or validating the data type.</p>\n<example id=\"validated\">\n<h3>Blur behavior</h3>\n<p>When the tags input is blurred, you can configure the action the component should take by passing the <code>blurBehavior</code>\nprop.</p>\n<ul>\n<li><code>add</code> — Adds the tag to the list of tags.</li>\n<li><code>clear</code> — Clears the tags input value.</li>\n</ul>\n<example id=\"blur-behavior\">\n<h3>Paste behavior</h3>\n<p>To add a tag when a arbitrary value is pasted in the input element, pass the <code>addOnPaste</code> prop.</p>\n<p>When a value is pasted, the component will:</p>\n<ul>\n<li>check if the value is a valid tag based on the <code>validate</code> option</li>\n<li>split the value by the <code>delimiter</code> option passed</li>\n</ul>\n<example id=\"paste-behavior\">\n<h3>Disable tag editing</h3>\n<p>by default the tags can be edited by double-clicking on the tag or focusing on them and pressing</p>\n<p><kbd>Enter</kbd>. To disable this behavior, pass <code>editable={false}</code></p>\n<example id=\"disabled-editing\">\n<h3>Events</h3>\n<p>During the lifetime of the tags input interaction, here's a list of events we emit:</p>\n<ul>\n<li><code>onValueChange</code> — invoked when the tag value changes.</li>\n<li><code>onHighlightChange</code> — invoked when a tag has visual focus.</li>\n<li><code>onValueInvalid</code> — invoked when the max tag count is reached or the <code>validate</code> function returns <code>false</code>.</li>\n</ul>\n<example id=\"on-event\">\n<h3>Using the Field Component</h3>\n<p>The <code>Field</code> component helps manage form-related state and accessibility attributes of a tags input. It includes handling\nARIA labels, helper text, and error text to ensure proper accessibility.</p>\n<example id=\"with-field\">\n<h3>Using the Root Provider</h3>\n<p>The <code>RootProvider</code> component provides a context for the tags-input. It accepts the value of the <code>useTags-input</code> hook.\nYou can leverage it to access the component state and methods from outside the tags-input.</p>\n<example id=\"root-provider\">\n<blockquote>\n<p>If you're using the <code>RootProvider</code> component, you don't need to use the <code>Root</code> component.</p>\n</blockquote>\n<h2>API Reference</h2>\n<componenttypes id=\"tags-input\">\n<h2>Accessibility</h2>\n<h3>Keyboard Support</h3>\n<keybindingstable id=\"tags-input\"></keybindingstable></componenttypes></example></example></example></example></example></example></example></example></example></example></anatomy></componentpreview>",
        "framework": "*",
        "toc": [
            {
                "title": "Anatomy",
                "url": "#anatomy",
                "items": []
            },
            {
                "title": "Examples",
                "url": "#examples",
                "items": [
                    {
                        "title": "Navigating and Editing tags",
                        "url": "#navigating-and-editing-tags",
                        "items": []
                    },
                    {
                        "title": "Setting the initial tags",
                        "url": "#setting-the-initial-tags",
                        "items": []
                    },
                    {
                        "title": "Limiting the number of tags",
                        "url": "#limiting-the-number-of-tags",
                        "items": []
                    },
                    {
                        "title": "Validating Tags",
                        "url": "#validating-tags",
                        "items": []
                    },
                    {
                        "title": "Blur behavior",
                        "url": "#blur-behavior",
                        "items": []
                    },
                    {
                        "title": "Paste behavior",
                        "url": "#paste-behavior",
                        "items": []
                    },
                    {
                        "title": "Disable tag editing",
                        "url": "#disable-tag-editing",
                        "items": []
                    },
                    {
                        "title": "Events",
                        "url": "#events",
                        "items": []
                    },
                    {
                        "title": "Using the Field Component",
                        "url": "#using-the-field-component",
                        "items": []
                    },
                    {
                        "title": "Using the Root Provider",
                        "url": "#using-the-root-provider",
                        "items": []
                    }
                ]
            },
            {
                "title": "API Reference",
                "url": "#api-reference",
                "items": []
            },
            {
                "title": "Accessibility",
                "url": "#accessibility",
                "items": [
                    {
                        "title": "Keyboard Support",
                        "url": "#keyboard-support",
                        "items": []
                    }
                ]
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:i}=arguments[0];function _createMdxContent(a){const t={a:\"a\",blockquote:\"blockquote\",code:\"code\",em:\"em\",h2:\"h2\",h3:\"h3\",li:\"li\",p:\"p\",span:\"span\",ul:\"ul\",...a.components},{Anatomy:o,ComponentPreview:l,ComponentTypes:c,Example:s,KeyBindingsTable:r}=t;return o||_missingMdxReference(\"Anatomy\",!0),l||_missingMdxReference(\"ComponentPreview\",!0),c||_missingMdxReference(\"ComponentTypes\",!0),s||_missingMdxReference(\"Example\",!0),r||_missingMdxReference(\"KeyBindingsTable\",!0),i(e,{children:[n(l,{id:\"TagsInput\"}),\"\\n\",i(t.h2,{id:\"anatomy\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#anatomy\",children:n(t.span,{className:\"icon icon-link\"})}),\"Anatomy\"]}),\"\\n\",n(t.p,{children:\"To set up the tags input correctly, you'll need to understand its anatomy and how we name its parts.\"}),\"\\n\",i(t.blockquote,{children:[\"\\n\",i(t.p,{children:[\"Each part includes a \",n(t.code,{children:\"data-part\"}),\" attribute to help identify them in the DOM.\"]}),\"\\n\"]}),\"\\n\",n(o,{id:\"tags-input\"}),\"\\n\",i(t.h2,{id:\"examples\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#examples\",children:n(t.span,{className:\"icon icon-link\"})}),\"Examples\"]}),\"\\n\",i(t.p,{children:[\"Learn how to use the \",n(t.code,{children:\"TagsInput\"}),\" component in your project. Let's take a look at the most basic example:\"]}),\"\\n\",n(s,{id:\"basic\"}),\"\\n\",i(t.h3,{id:\"navigating-and-editing-tags\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#navigating-and-editing-tags\",children:n(t.span,{className:\"icon icon-link\"})}),\"Navigating and Editing tags\"]}),\"\\n\",n(t.p,{children:'When the input has an empty value or the caret is at the start position, the tags can be selected by using the arrow\\nleft and arrow right keys. When \"visual\" focus in on any tag:'}),\"\\n\",i(t.ul,{children:[\"\\n\",i(t.li,{children:[\"Pressing \",n(\"kbd\",{children:\"Enter\"}),\" or double-clicking on the tag will put it in edit mode, allowing the user change its value\\nand press \",n(\"kbd\",{children:\"Enter\"}),\" to commit the changes.\"]}),\"\\n\",i(t.li,{children:[\"Pressing \",n(\"kbd\",{children:\"Delete\"}),\" or \",n(\"kbd\",{children:\"Backspace\"}),\" will delete the tag that has \",n(t.em,{children:\"visual\"}),\" focus.\"]}),\"\\n\"]}),\"\\n\",i(t.h3,{id:\"setting-the-initial-tags\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#setting-the-initial-tags\",children:n(t.span,{className:\"icon icon-link\"})}),\"Setting the initial tags\"]}),\"\\n\",i(t.p,{children:[\"To set the initial tag values, set the \",n(t.code,{children:\"defaultValue\"}),\" prop.\"]}),\"\\n\",n(s,{id:\"initial-value\"}),\"\\n\",i(t.h3,{id:\"limiting-the-number-of-tags\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#limiting-the-number-of-tags\",children:n(t.span,{className:\"icon icon-link\"})}),\"Limiting the number of tags\"]}),\"\\n\",i(t.p,{children:[\"To limit the number of tags within the component, you can set the \",n(t.code,{children:\"max\"}),\" property to the limit you want. The default\\nvalue is \",n(t.code,{children:\"Infinity\"}),\".\"]}),\"\\n\",i(t.p,{children:[\"When the tag reaches the limit, new tags cannot be added except the \",n(t.code,{children:\"allowOverflow\"}),\" prop is set to \",n(t.code,{children:\"true\"}),\".\"]}),\"\\n\",n(s,{id:\"max-with-overflow\"}),\"\\n\",i(t.h3,{id:\"validating-tags\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#validating-tags\",children:n(t.span,{className:\"icon icon-link\"})}),\"Validating Tags\"]}),\"\\n\",i(t.p,{children:[\"Before a tag is added, the \",n(t.code,{children:\"validate\"}),\" function is called to determine whether to accept or reject a tag.\"]}),\"\\n\",n(t.p,{children:\"A common use-case for validating tags is preventing duplicates or validating the data type.\"}),\"\\n\",n(s,{id:\"validated\"}),\"\\n\",i(t.h3,{id:\"blur-behavior\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#blur-behavior\",children:n(t.span,{className:\"icon icon-link\"})}),\"Blur behavior\"]}),\"\\n\",i(t.p,{children:[\"When the tags input is blurred, you can configure the action the component should take by passing the \",n(t.code,{children:\"blurBehavior\"}),\"\\nprop.\"]}),\"\\n\",i(t.ul,{children:[\"\\n\",i(t.li,{children:[n(t.code,{children:\"add\"}),\" — Adds the tag to the list of tags.\"]}),\"\\n\",i(t.li,{children:[n(t.code,{children:\"clear\"}),\" — Clears the tags input value.\"]}),\"\\n\"]}),\"\\n\",n(s,{id:\"blur-behavior\"}),\"\\n\",i(t.h3,{id:\"paste-behavior\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#paste-behavior\",children:n(t.span,{className:\"icon icon-link\"})}),\"Paste behavior\"]}),\"\\n\",i(t.p,{children:[\"To add a tag when a arbitrary value is pasted in the input element, pass the \",n(t.code,{children:\"addOnPaste\"}),\" prop.\"]}),\"\\n\",n(t.p,{children:\"When a value is pasted, the component will:\"}),\"\\n\",i(t.ul,{children:[\"\\n\",i(t.li,{children:[\"check if the value is a valid tag based on the \",n(t.code,{children:\"validate\"}),\" option\"]}),\"\\n\",i(t.li,{children:[\"split the value by the \",n(t.code,{children:\"delimiter\"}),\" option passed\"]}),\"\\n\"]}),\"\\n\",n(s,{id:\"paste-behavior\"}),\"\\n\",i(t.h3,{id:\"disable-tag-editing\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#disable-tag-editing\",children:n(t.span,{className:\"icon icon-link\"})}),\"Disable tag editing\"]}),\"\\n\",n(t.p,{children:\"by default the tags can be edited by double-clicking on the tag or focusing on them and pressing\"}),\"\\n\",i(t.p,{children:[n(\"kbd\",{children:\"Enter\"}),\". To disable this behavior, pass \",n(t.code,{children:\"editable={false}\"})]}),\"\\n\",n(s,{id:\"disabled-editing\"}),\"\\n\",i(t.h3,{id:\"events\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#events\",children:n(t.span,{className:\"icon icon-link\"})}),\"Events\"]}),\"\\n\",n(t.p,{children:\"During the lifetime of the tags input interaction, here's a list of events we emit:\"}),\"\\n\",i(t.ul,{children:[\"\\n\",i(t.li,{children:[n(t.code,{children:\"onValueChange\"}),\" — invoked when the tag value changes.\"]}),\"\\n\",i(t.li,{children:[n(t.code,{children:\"onHighlightChange\"}),\" — invoked when a tag has visual focus.\"]}),\"\\n\",i(t.li,{children:[n(t.code,{children:\"onValueInvalid\"}),\" — invoked when the max tag count is reached or the \",n(t.code,{children:\"validate\"}),\" function returns \",n(t.code,{children:\"false\"}),\".\"]}),\"\\n\"]}),\"\\n\",n(s,{id:\"on-event\"}),\"\\n\",i(t.h3,{id:\"using-the-field-component\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-the-field-component\",children:n(t.span,{className:\"icon icon-link\"})}),\"Using the Field Component\"]}),\"\\n\",i(t.p,{children:[\"The \",n(t.code,{children:\"Field\"}),\" component helps manage form-related state and accessibility attributes of a tags input. It includes handling\\nARIA labels, helper text, and error text to ensure proper accessibility.\"]}),\"\\n\",n(s,{id:\"with-field\"}),\"\\n\",i(t.h3,{id:\"using-the-root-provider\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-the-root-provider\",children:n(t.span,{className:\"icon icon-link\"})}),\"Using the Root Provider\"]}),\"\\n\",i(t.p,{children:[\"The \",n(t.code,{children:\"RootProvider\"}),\" component provides a context for the tags-input. It accepts the value of the \",n(t.code,{children:\"useTags-input\"}),\" hook.\\nYou can leverage it to access the component state and methods from outside the tags-input.\"]}),\"\\n\",n(s,{id:\"root-provider\"}),\"\\n\",i(t.blockquote,{children:[\"\\n\",i(t.p,{children:[\"If you're using the \",n(t.code,{children:\"RootProvider\"}),\" component, you don't need to use the \",n(t.code,{children:\"Root\"}),\" component.\"]}),\"\\n\"]}),\"\\n\",i(t.h2,{id:\"api-reference\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#api-reference\",children:n(t.span,{className:\"icon icon-link\"})}),\"API Reference\"]}),\"\\n\",n(c,{id:\"tags-input\"}),\"\\n\",i(t.h2,{id:\"accessibility\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#accessibility\",children:n(t.span,{className:\"icon icon-link\"})}),\"Accessibility\"]}),\"\\n\",i(t.h3,{id:\"keyboard-support\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#keyboard-support\",children:n(t.span,{className:\"icon icon-link\"})}),\"Keyboard Support\"]}),\"\\n\",n(r,{id:\"tags-input\"})]})}return{default:function(e={}){const{wrapper:i}=e.components||{};return i?n(i,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};function _missingMdxReference(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "<ComponentPreview id=\"TagsInput\" />\n\n## Anatomy\n\nTo set up the tags input correctly, you'll need to understand its anatomy and how we name its parts.\n\n> Each part includes a `data-part` attribute to help identify them in the DOM.\n\n<Anatomy id=\"tags-input\" />\n\n## Examples\n\nLearn how to use the `TagsInput` component in your project. Let's take a look at the most basic example:\n\n<Example id=\"basic\" />\n\n### Navigating and Editing tags\n\nWhen the input has an empty value or the caret is at the start position, the tags can be selected by using the arrow\nleft and arrow right keys. When \"visual\" focus in on any tag:\n\n- Pressing <kbd>Enter</kbd> or double-clicking on the tag will put it in edit mode, allowing the user change its value\n  and press <kbd>Enter</kbd> to commit the changes.\n- Pressing <kbd>Delete</kbd> or <kbd>Backspace</kbd> will delete the tag that has _visual_ focus.\n\n### Setting the initial tags\n\nTo set the initial tag values, set the `defaultValue` prop.\n\n<Example id=\"initial-value\" />\n\n### Limiting the number of tags\n\nTo limit the number of tags within the component, you can set the `max` property to the limit you want. The default\nvalue is `Infinity`.\n\nWhen the tag reaches the limit, new tags cannot be added except the `allowOverflow` prop is set to `true`.\n\n<Example id=\"max-with-overflow\" />\n\n### Validating Tags\n\nBefore a tag is added, the `validate` function is called to determine whether to accept or reject a tag.\n\nA common use-case for validating tags is preventing duplicates or validating the data type.\n\n<Example id=\"validated\" />\n\n### Blur behavior\n\nWhen the tags input is blurred, you can configure the action the component should take by passing the `blurBehavior`\nprop.\n\n- `add` — Adds the tag to the list of tags.\n- `clear` — Clears the tags input value.\n\n<Example id=\"blur-behavior\" />\n\n### Paste behavior\n\nTo add a tag when a arbitrary value is pasted in the input element, pass the `addOnPaste` prop.\n\nWhen a value is pasted, the component will:\n\n- check if the value is a valid tag based on the `validate` option\n- split the value by the `delimiter` option passed\n\n<Example id=\"paste-behavior\" />\n\n### Disable tag editing\n\nby default the tags can be edited by double-clicking on the tag or focusing on them and pressing\n\n<kbd>Enter</kbd>. To disable this behavior, pass `editable={false}`\n\n<Example id=\"disabled-editing\" />\n\n### Events\n\nDuring the lifetime of the tags input interaction, here's a list of events we emit:\n\n- `onValueChange` — invoked when the tag value changes.\n- `onHighlightChange` — invoked when a tag has visual focus.\n- `onValueInvalid` — invoked when the max tag count is reached or the `validate` function returns `false`.\n\n<Example id=\"on-event\" />\n\n### Using the Field Component\n\nThe `Field` component helps manage form-related state and accessibility attributes of a tags input. It includes handling\nARIA labels, helper text, and error text to ensure proper accessibility.\n\n<Example id=\"with-field\" />\n\n### Using the Root Provider\n\nThe `RootProvider` component provides a context for the tags-input. It accepts the value of the `useTags-input` hook.\nYou can leverage it to access the component state and methods from outside the tags-input.\n\n<Example id=\"root-provider\" />\n\n> If you're using the `RootProvider` component, you don't need to use the `Root` component.\n\n## API Reference\n\n<ComponentTypes id=\"tags-input\" />\n\n## Accessibility\n\n### Keyboard Support\n\n<KeyBindingsTable id=\"tags-input\" />",
        "slug": "components/tags-input",
        "category": "components"
    },
    {
        "id": "timer",
        "title": "Timer",
        "description": "Used to record the time elapsed from zero or since a specified target time.",
        "metadata": {
            "readingTime": 1,
            "wordCount": 134
        },
        "content": "<componentpreview id=\"Timer\">\n<h2>Examples</h2>\n<p>Learn how to use the <code>Timer</code> component in your project. Let's take a look at the most basic example:</p>\n<example id=\"basic\">\n<h3>Countdown Timer</h3>\n<p>You can create a countdown timer by setting the <code>targetMs</code> prop to a future timestamp:</p>\n<example id=\"countdown\">\n<h3>Timer Events</h3>\n<p>The Timer component provides events that you can listen to for various timer-related actions.</p>\n<ul>\n<li>The <code>onComplete</code> event is triggered when the timer reaches its target time.</li>\n<li>The <code>onTick</code> event is called on each timer update, providing details about the current timer state.</li>\n</ul>\n<example id=\"events\">\n<h3>Using the Root Provider</h3>\n<p>The <code>RootProvider</code> component provides a context for the timer. It accepts the value of the <code>useTimer</code> hook. You can\nleverage it to access the component state and methods from outside the timer.</p>\n<example id=\"root-provider\">\n<blockquote>\n<p>If you're using the <code>RootProvider</code> component, you don't need to use the <code>Root</code> component.</p>\n</blockquote>\n<h2>API Reference</h2>\n<componenttypes id=\"timer\"></componenttypes></example></example></example></example></componentpreview>",
        "framework": "*",
        "toc": [
            {
                "title": "Examples",
                "url": "#examples",
                "items": [
                    {
                        "title": "Countdown Timer",
                        "url": "#countdown-timer",
                        "items": []
                    },
                    {
                        "title": "Timer Events",
                        "url": "#timer-events",
                        "items": []
                    },
                    {
                        "title": "Using the Root Provider",
                        "url": "#using-the-root-provider",
                        "items": []
                    }
                ]
            },
            {
                "title": "API Reference",
                "url": "#api-reference",
                "items": []
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:o}=arguments[0];function _createMdxContent(i){const t={a:\"a\",blockquote:\"blockquote\",code:\"code\",h2:\"h2\",h3:\"h3\",li:\"li\",p:\"p\",span:\"span\",ul:\"ul\",...i.components},{ComponentPreview:r,ComponentTypes:c,Example:a}=t;return r||_missingMdxReference(\"ComponentPreview\",!0),c||_missingMdxReference(\"ComponentTypes\",!0),a||_missingMdxReference(\"Example\",!0),o(e,{children:[n(r,{id:\"Timer\"}),\"\\n\",o(t.h2,{id:\"examples\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#examples\",children:n(t.span,{className:\"icon icon-link\"})}),\"Examples\"]}),\"\\n\",o(t.p,{children:[\"Learn how to use the \",n(t.code,{children:\"Timer\"}),\" component in your project. Let's take a look at the most basic example:\"]}),\"\\n\",n(a,{id:\"basic\"}),\"\\n\",o(t.h3,{id:\"countdown-timer\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#countdown-timer\",children:n(t.span,{className:\"icon icon-link\"})}),\"Countdown Timer\"]}),\"\\n\",o(t.p,{children:[\"You can create a countdown timer by setting the \",n(t.code,{children:\"targetMs\"}),\" prop to a future timestamp:\"]}),\"\\n\",n(a,{id:\"countdown\"}),\"\\n\",o(t.h3,{id:\"timer-events\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#timer-events\",children:n(t.span,{className:\"icon icon-link\"})}),\"Timer Events\"]}),\"\\n\",n(t.p,{children:\"The Timer component provides events that you can listen to for various timer-related actions.\"}),\"\\n\",o(t.ul,{children:[\"\\n\",o(t.li,{children:[\"The \",n(t.code,{children:\"onComplete\"}),\" event is triggered when the timer reaches its target time.\"]}),\"\\n\",o(t.li,{children:[\"The \",n(t.code,{children:\"onTick\"}),\" event is called on each timer update, providing details about the current timer state.\"]}),\"\\n\"]}),\"\\n\",n(a,{id:\"events\"}),\"\\n\",o(t.h3,{id:\"using-the-root-provider\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-the-root-provider\",children:n(t.span,{className:\"icon icon-link\"})}),\"Using the Root Provider\"]}),\"\\n\",o(t.p,{children:[\"The \",n(t.code,{children:\"RootProvider\"}),\" component provides a context for the timer. It accepts the value of the \",n(t.code,{children:\"useTimer\"}),\" hook. You can\\nleverage it to access the component state and methods from outside the timer.\"]}),\"\\n\",n(a,{id:\"root-provider\"}),\"\\n\",o(t.blockquote,{children:[\"\\n\",o(t.p,{children:[\"If you're using the \",n(t.code,{children:\"RootProvider\"}),\" component, you don't need to use the \",n(t.code,{children:\"Root\"}),\" component.\"]}),\"\\n\"]}),\"\\n\",o(t.h2,{id:\"api-reference\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#api-reference\",children:n(t.span,{className:\"icon icon-link\"})}),\"API Reference\"]}),\"\\n\",n(c,{id:\"timer\"})]})}return{default:function(e={}){const{wrapper:o}=e.components||{};return o?n(o,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};function _missingMdxReference(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "<ComponentPreview id=\"Timer\" />\n\n## Examples\n\nLearn how to use the `Timer` component in your project. Let's take a look at the most basic example:\n\n<Example id=\"basic\" />\n\n### Countdown Timer\n\nYou can create a countdown timer by setting the `targetMs` prop to a future timestamp:\n\n<Example id=\"countdown\" />\n\n### Timer Events\n\nThe Timer component provides events that you can listen to for various timer-related actions.\n\n- The `onComplete` event is triggered when the timer reaches its target time.\n- The `onTick` event is called on each timer update, providing details about the current timer state.\n\n<Example id=\"events\" />\n\n### Using the Root Provider\n\nThe `RootProvider` component provides a context for the timer. It accepts the value of the `useTimer` hook. You can\nleverage it to access the component state and methods from outside the timer.\n\n<Example id=\"root-provider\" />\n\n> If you're using the `RootProvider` component, you don't need to use the `Root` component.\n\n## API Reference\n\n<ComponentTypes id=\"timer\" />",
        "slug": "components/timer",
        "category": "components"
    },
    {
        "id": "toast",
        "title": "Toast",
        "description": "A message that appears on the screen to provide feedback on an action.",
        "metadata": {
            "readingTime": 1,
            "wordCount": 114
        },
        "content": "<componentpreview id=\"Toast\">\n<h2>Anatomy</h2>\n<p>To set up the toast correctly, you'll need to understand its anatomy and how we name its parts.</p>\n<blockquote>\n<p>Each part includes a <code>data-part</code> attribute to help identify them in the DOM.</p>\n</blockquote>\n<anatomy id=\"toast\">\n<h2>Setup</h2>\n<p>To use the Toast component, create the toast engine using the <code>createToaster</code> function.</p>\n<p>This function manages the placement and grouping of toasts, and provides a <code>toast</code> object needed to create toast\nnotification.</p>\n<pre><code class=\"language-ts\">const toaster = createToaster({\n  placement: 'bottom-end',\n  overlap: true,\n  gap: 24,\n})\n</code></pre>\n<h2>Examples</h2>\n<p>Here's an example of creating a toast using the <code>toast.create</code> method.</p>\n<example id=\"basic\">\n<h3>Update Toast</h3>\n<p>To update a toast, use the <code>toast.update</code> method.</p>\n<example id=\"update\">\n<h3>Action</h3>\n<p>To add an action to a toast, use the <code>toast.action</code> property.</p>\n<example id=\"action\">\n<h2>API Reference</h2>\n<componenttypes id=\"toast\"></componenttypes></example></example></example></anatomy></componentpreview>",
        "framework": "*",
        "toc": [
            {
                "title": "Anatomy",
                "url": "#anatomy",
                "items": []
            },
            {
                "title": "Setup",
                "url": "#setup",
                "items": []
            },
            {
                "title": "Examples",
                "url": "#examples",
                "items": [
                    {
                        "title": "Update Toast",
                        "url": "#update-toast",
                        "items": []
                    },
                    {
                        "title": "Action",
                        "url": "#action",
                        "items": []
                    }
                ]
            },
            {
                "title": "API Reference",
                "url": "#api-reference",
                "items": []
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:a}=arguments[0];function _createMdxContent(t){const o={a:\"a\",blockquote:\"blockquote\",code:\"code\",h2:\"h2\",h3:\"h3\",p:\"p\",pre:\"pre\",span:\"span\",...t.components},{Anatomy:i,ComponentPreview:c,ComponentTypes:s,Example:r}=o;return i||_missingMdxReference(\"Anatomy\",!0),c||_missingMdxReference(\"ComponentPreview\",!0),s||_missingMdxReference(\"ComponentTypes\",!0),r||_missingMdxReference(\"Example\",!0),a(e,{children:[n(c,{id:\"Toast\"}),\"\\n\",a(o.h2,{id:\"anatomy\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#anatomy\",children:n(o.span,{className:\"icon icon-link\"})}),\"Anatomy\"]}),\"\\n\",n(o.p,{children:\"To set up the toast correctly, you'll need to understand its anatomy and how we name its parts.\"}),\"\\n\",a(o.blockquote,{children:[\"\\n\",a(o.p,{children:[\"Each part includes a \",n(o.code,{children:\"data-part\"}),\" attribute to help identify them in the DOM.\"]}),\"\\n\"]}),\"\\n\",n(i,{id:\"toast\"}),\"\\n\",a(o.h2,{id:\"setup\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#setup\",children:n(o.span,{className:\"icon icon-link\"})}),\"Setup\"]}),\"\\n\",a(o.p,{children:[\"To use the Toast component, create the toast engine using the \",n(o.code,{children:\"createToaster\"}),\" function.\"]}),\"\\n\",a(o.p,{children:[\"This function manages the placement and grouping of toasts, and provides a \",n(o.code,{children:\"toast\"}),\" object needed to create toast\\nnotification.\"]}),\"\\n\",n(o.pre,{children:n(o.code,{className:\"language-ts\",children:\"const toaster = createToaster({\\n  placement: 'bottom-end',\\n  overlap: true,\\n  gap: 24,\\n})\\n\"})}),\"\\n\",a(o.h2,{id:\"examples\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#examples\",children:n(o.span,{className:\"icon icon-link\"})}),\"Examples\"]}),\"\\n\",a(o.p,{children:[\"Here's an example of creating a toast using the \",n(o.code,{children:\"toast.create\"}),\" method.\"]}),\"\\n\",n(r,{id:\"basic\"}),\"\\n\",a(o.h3,{id:\"update-toast\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#update-toast\",children:n(o.span,{className:\"icon icon-link\"})}),\"Update Toast\"]}),\"\\n\",a(o.p,{children:[\"To update a toast, use the \",n(o.code,{children:\"toast.update\"}),\" method.\"]}),\"\\n\",n(r,{id:\"update\"}),\"\\n\",a(o.h3,{id:\"action\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#action\",children:n(o.span,{className:\"icon icon-link\"})}),\"Action\"]}),\"\\n\",a(o.p,{children:[\"To add an action to a toast, use the \",n(o.code,{children:\"toast.action\"}),\" property.\"]}),\"\\n\",n(r,{id:\"action\"}),\"\\n\",a(o.h2,{id:\"api-reference\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#api-reference\",children:n(o.span,{className:\"icon icon-link\"})}),\"API Reference\"]}),\"\\n\",n(s,{id:\"toast\"})]})}return{default:function(e={}){const{wrapper:a}=e.components||{};return a?n(a,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};function _missingMdxReference(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "<ComponentPreview id=\"Toast\" />\n\n## Anatomy\n\nTo set up the toast correctly, you'll need to understand its anatomy and how we name its parts.\n\n> Each part includes a `data-part` attribute to help identify them in the DOM.\n\n<Anatomy id=\"toast\" />\n\n## Setup\n\nTo use the Toast component, create the toast engine using the `createToaster` function.\n\nThis function manages the placement and grouping of toasts, and provides a `toast` object needed to create toast\nnotification.\n\n```ts\nconst toaster = createToaster({\n  placement: 'bottom-end',\n  overlap: true,\n  gap: 24,\n})\n```\n\n## Examples\n\nHere's an example of creating a toast using the `toast.create` method.\n\n<Example id=\"basic\" />\n\n### Update Toast\n\nTo update a toast, use the `toast.update` method.\n\n<Example id=\"update\" />\n\n### Action\n\nTo add an action to a toast, use the `toast.action` property.\n\n<Example id=\"action\" />\n\n## API Reference\n\n<ComponentTypes id=\"toast\" />",
        "slug": "components/toast",
        "category": "components"
    },
    {
        "id": "toggle-group",
        "title": "Toggle Group",
        "description": "A set of two-state buttons that can be toggled on or off.",
        "metadata": {
            "readingTime": 1,
            "wordCount": 136
        },
        "content": "<componentpreview id=\"ToggleGroup\">\n<h2>Anatomy</h2>\n<p>To set up the toggle group correctly, you'll need to understand its anatomy and how we name its parts.</p>\n<blockquote>\n<p>Each part includes a <code>data-part</code> attribute to help identify them in the DOM.</p>\n</blockquote>\n<anatomy id=\"toggle-group\">\n<h2>Examples</h2>\n<p>Learn how to use the <code>ToggleGroup</code> component in your project. Let's take a look at the most basic example:</p>\n<example id=\"basic\">\n<h3>Multiple Selection</h3>\n<p>Demonstrates how to enable <code>multiple</code> selection within the group.</p>\n<example id=\"multiple\">\n<h3>Initial Value</h3>\n<p>Shows how to set an initial value in the toggle group.</p>\n<example id=\"initial-value\">\n<h3>Using the Root Provider</h3>\n<p>The <code>RootProvider</code> component provides a context for the toggle-group. It accepts the value of the <code>useToggle-group</code>\nhook. You can leverage it to access the component state and methods from outside the toggle-group.</p>\n<example id=\"root-provider\">\n<blockquote>\n<p>If you're using the <code>RootProvider</code> component, you don't need to use the <code>Root</code> component.</p>\n</blockquote>\n<h2>API Reference</h2>\n<componenttypes id=\"toggle-group\">\n<h2>Accessibility</h2>\n<h3>Keyboard Support</h3>\n<keybindingstable id=\"toggle-group\"></keybindingstable></componenttypes></example></example></example></example></anatomy></componentpreview>",
        "framework": "*",
        "toc": [
            {
                "title": "Anatomy",
                "url": "#anatomy",
                "items": []
            },
            {
                "title": "Examples",
                "url": "#examples",
                "items": [
                    {
                        "title": "Multiple Selection",
                        "url": "#multiple-selection",
                        "items": []
                    },
                    {
                        "title": "Initial Value",
                        "url": "#initial-value",
                        "items": []
                    },
                    {
                        "title": "Using the Root Provider",
                        "url": "#using-the-root-provider",
                        "items": []
                    }
                ]
            },
            {
                "title": "API Reference",
                "url": "#api-reference",
                "items": []
            },
            {
                "title": "Accessibility",
                "url": "#accessibility",
                "items": [
                    {
                        "title": "Keyboard Support",
                        "url": "#keyboard-support",
                        "items": []
                    }
                ]
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:i}=arguments[0];function _createMdxContent(o){const a={a:\"a\",blockquote:\"blockquote\",code:\"code\",h2:\"h2\",h3:\"h3\",p:\"p\",span:\"span\",...o.components},{Anatomy:t,ComponentPreview:c,ComponentTypes:r,Example:l,KeyBindingsTable:s}=a;return t||_missingMdxReference(\"Anatomy\",!0),c||_missingMdxReference(\"ComponentPreview\",!0),r||_missingMdxReference(\"ComponentTypes\",!0),l||_missingMdxReference(\"Example\",!0),s||_missingMdxReference(\"KeyBindingsTable\",!0),i(e,{children:[n(c,{id:\"ToggleGroup\"}),\"\\n\",i(a.h2,{id:\"anatomy\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#anatomy\",children:n(a.span,{className:\"icon icon-link\"})}),\"Anatomy\"]}),\"\\n\",n(a.p,{children:\"To set up the toggle group correctly, you'll need to understand its anatomy and how we name its parts.\"}),\"\\n\",i(a.blockquote,{children:[\"\\n\",i(a.p,{children:[\"Each part includes a \",n(a.code,{children:\"data-part\"}),\" attribute to help identify them in the DOM.\"]}),\"\\n\"]}),\"\\n\",n(t,{id:\"toggle-group\"}),\"\\n\",i(a.h2,{id:\"examples\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#examples\",children:n(a.span,{className:\"icon icon-link\"})}),\"Examples\"]}),\"\\n\",i(a.p,{children:[\"Learn how to use the \",n(a.code,{children:\"ToggleGroup\"}),\" component in your project. Let's take a look at the most basic example:\"]}),\"\\n\",n(l,{id:\"basic\"}),\"\\n\",i(a.h3,{id:\"multiple-selection\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#multiple-selection\",children:n(a.span,{className:\"icon icon-link\"})}),\"Multiple Selection\"]}),\"\\n\",i(a.p,{children:[\"Demonstrates how to enable \",n(a.code,{children:\"multiple\"}),\" selection within the group.\"]}),\"\\n\",n(l,{id:\"multiple\"}),\"\\n\",i(a.h3,{id:\"initial-value\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#initial-value\",children:n(a.span,{className:\"icon icon-link\"})}),\"Initial Value\"]}),\"\\n\",n(a.p,{children:\"Shows how to set an initial value in the toggle group.\"}),\"\\n\",n(l,{id:\"initial-value\"}),\"\\n\",i(a.h3,{id:\"using-the-root-provider\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-the-root-provider\",children:n(a.span,{className:\"icon icon-link\"})}),\"Using the Root Provider\"]}),\"\\n\",i(a.p,{children:[\"The \",n(a.code,{children:\"RootProvider\"}),\" component provides a context for the toggle-group. It accepts the value of the \",n(a.code,{children:\"useToggle-group\"}),\"\\nhook. You can leverage it to access the component state and methods from outside the toggle-group.\"]}),\"\\n\",n(l,{id:\"root-provider\"}),\"\\n\",i(a.blockquote,{children:[\"\\n\",i(a.p,{children:[\"If you're using the \",n(a.code,{children:\"RootProvider\"}),\" component, you don't need to use the \",n(a.code,{children:\"Root\"}),\" component.\"]}),\"\\n\"]}),\"\\n\",i(a.h2,{id:\"api-reference\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#api-reference\",children:n(a.span,{className:\"icon icon-link\"})}),\"API Reference\"]}),\"\\n\",n(r,{id:\"toggle-group\"}),\"\\n\",i(a.h2,{id:\"accessibility\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#accessibility\",children:n(a.span,{className:\"icon icon-link\"})}),\"Accessibility\"]}),\"\\n\",i(a.h3,{id:\"keyboard-support\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#keyboard-support\",children:n(a.span,{className:\"icon icon-link\"})}),\"Keyboard Support\"]}),\"\\n\",n(s,{id:\"toggle-group\"})]})}return{default:function(e={}){const{wrapper:i}=e.components||{};return i?n(i,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};function _missingMdxReference(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "<ComponentPreview id=\"ToggleGroup\" />\n\n## Anatomy\n\nTo set up the toggle group correctly, you'll need to understand its anatomy and how we name its parts.\n\n> Each part includes a `data-part` attribute to help identify them in the DOM.\n\n<Anatomy id=\"toggle-group\" />\n\n## Examples\n\nLearn how to use the `ToggleGroup` component in your project. Let's take a look at the most basic example:\n\n<Example id=\"basic\" />\n\n### Multiple Selection\n\nDemonstrates how to enable `multiple` selection within the group.\n\n<Example id=\"multiple\" />\n\n### Initial Value\n\nShows how to set an initial value in the toggle group.\n\n<Example id=\"initial-value\" />\n\n### Using the Root Provider\n\nThe `RootProvider` component provides a context for the toggle-group. It accepts the value of the `useToggle-group`\nhook. You can leverage it to access the component state and methods from outside the toggle-group.\n\n<Example id=\"root-provider\" />\n\n> If you're using the `RootProvider` component, you don't need to use the `Root` component.\n\n## API Reference\n\n<ComponentTypes id=\"toggle-group\" />\n\n## Accessibility\n\n### Keyboard Support\n\n<KeyBindingsTable id=\"toggle-group\" />",
        "slug": "components/toggle-group",
        "category": "components"
    },
    {
        "id": "toggle",
        "title": "Toggle",
        "description": "A two-state button that can be toggled on or off.",
        "metadata": {
            "readingTime": 1,
            "wordCount": 52
        },
        "content": "<componentpreview id=\"Toggle\">\n<h2>Examples</h2>\n<p>Here's a basic example of how to use the <code>Toggle</code> component:</p>\n<example id=\"basic\">\n<h3>Controlled</h3>\n<p>Use the <code>pressed</code> and <code>onPressedChange</code> props to control the toggle's state.</p>\n<example id=\"controlled\">\n<h3>Disabled</h3>\n<p>Use the <code>disabled</code> prop to disable the toggle.</p>\n<example id=\"disabled\">\n<h3>Indicator</h3>\n<p>Use the <code>Toggle.Indicator</code> component to render different indicators based on the state of the toggle.</p>\n<example id=\"indicator\">\n<h2>API Reference</h2>\n<componenttypes id=\"toggle\"></componenttypes></example></example></example></example></componentpreview>",
        "framework": "*",
        "toc": [
            {
                "title": "Examples",
                "url": "#examples",
                "items": [
                    {
                        "title": "Controlled",
                        "url": "#controlled",
                        "items": []
                    },
                    {
                        "title": "Disabled",
                        "url": "#disabled",
                        "items": []
                    },
                    {
                        "title": "Indicator",
                        "url": "#indicator",
                        "items": []
                    }
                ]
            },
            {
                "title": "API Reference",
                "url": "#api-reference",
                "items": []
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:i}=arguments[0];function _createMdxContent(o){const a={a:\"a\",code:\"code\",h2:\"h2\",h3:\"h3\",p:\"p\",span:\"span\",...o.components},{ComponentPreview:c,ComponentTypes:r,Example:s}=a;return c||_missingMdxReference(\"ComponentPreview\",!0),r||_missingMdxReference(\"ComponentTypes\",!0),s||_missingMdxReference(\"Example\",!0),i(e,{children:[n(c,{id:\"Toggle\"}),\"\\n\",i(a.h2,{id:\"examples\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#examples\",children:n(a.span,{className:\"icon icon-link\"})}),\"Examples\"]}),\"\\n\",i(a.p,{children:[\"Here's a basic example of how to use the \",n(a.code,{children:\"Toggle\"}),\" component:\"]}),\"\\n\",n(s,{id:\"basic\"}),\"\\n\",i(a.h3,{id:\"controlled\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#controlled\",children:n(a.span,{className:\"icon icon-link\"})}),\"Controlled\"]}),\"\\n\",i(a.p,{children:[\"Use the \",n(a.code,{children:\"pressed\"}),\" and \",n(a.code,{children:\"onPressedChange\"}),\" props to control the toggle's state.\"]}),\"\\n\",n(s,{id:\"controlled\"}),\"\\n\",i(a.h3,{id:\"disabled\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#disabled\",children:n(a.span,{className:\"icon icon-link\"})}),\"Disabled\"]}),\"\\n\",i(a.p,{children:[\"Use the \",n(a.code,{children:\"disabled\"}),\" prop to disable the toggle.\"]}),\"\\n\",n(s,{id:\"disabled\"}),\"\\n\",i(a.h3,{id:\"indicator\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#indicator\",children:n(a.span,{className:\"icon icon-link\"})}),\"Indicator\"]}),\"\\n\",i(a.p,{children:[\"Use the \",n(a.code,{children:\"Toggle.Indicator\"}),\" component to render different indicators based on the state of the toggle.\"]}),\"\\n\",n(s,{id:\"indicator\"}),\"\\n\",i(a.h2,{id:\"api-reference\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#api-reference\",children:n(a.span,{className:\"icon icon-link\"})}),\"API Reference\"]}),\"\\n\",n(r,{id:\"toggle\"})]})}return{default:function(e={}){const{wrapper:i}=e.components||{};return i?n(i,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};function _missingMdxReference(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "<ComponentPreview id=\"Toggle\" />\n\n## Examples\n\nHere's a basic example of how to use the `Toggle` component:\n\n<Example id=\"basic\" />\n\n### Controlled\n\nUse the `pressed` and `onPressedChange` props to control the toggle's state.\n\n<Example id=\"controlled\" />\n\n### Disabled\n\nUse the `disabled` prop to disable the toggle.\n\n<Example id=\"disabled\" />\n\n### Indicator\n\nUse the `Toggle.Indicator` component to render different indicators based on the state of the toggle.\n\n<Example id=\"indicator\" />\n\n## API Reference\n\n<ComponentTypes id=\"toggle\" />",
        "slug": "components/toggle",
        "category": "components"
    },
    {
        "id": "tooltip",
        "title": "Tooltip",
        "description": "A label that provides information on hover or focus.",
        "metadata": {
            "readingTime": 1,
            "wordCount": 219
        },
        "content": "<componentpreview id=\"Tooltip\">\n<h2>Anatomy</h2>\n<p>To set up the tooltip correctly, you'll need to understand its anatomy and how we name its parts.</p>\n<blockquote>\n<p>Each part includes a <code>data-part</code> attribute to help identify them in the DOM.</p>\n</blockquote>\n<anatomy id=\"tooltip\">\n<h2>Examples</h2>\n<p>Learn how to use the <code>Tooltip</code> component in your project. Let's take a look at the most basic example:</p>\n<example id=\"basic\">\n<h3>Controlled Tooltip</h3>\n<p>To create a controlled Tooltip component, manage the state of whether the tooltip is open using the <code>open</code> prop:</p>\n<example id=\"controlled\">\n<h3>Using a Render Function</h3>\n<p>For more control over the Tooltip's functionality, you can use a function as a child, which provides access to the\nTooltip API:</p>\n<example id=\"render-fn\">\n<h3>Adding an Arrow</h3>\n<p>To display an arrow pointing to the trigger from the tooltip, use the <code>Tooltip.Arrow</code> and <code>Tooltip.ArrowTip</code> components:</p>\n<example id=\"arrow\">\n<h3>Configuring Delay Timings</h3>\n<p>To configure the delay timings for the Tooltip, use the <code>closeDelay</code> and <code>openDelay</code> props:</p>\n<example id=\"timings\">\n<h3>Custom Positioning</h3>\n<p>To customize the position of the Tooltip relative to the trigger, use the <code>positioning</code> prop:</p>\n<example id=\"positioning\">\n<h3>Using the Root Provider</h3>\n<p>The <code>RootProvider</code> component provides a context for the tooltip. It accepts the value of the <code>useTooltip</code> hook. You can\nleverage it to access the component state and methods from outside the tooltip.</p>\n<example id=\"root-provider\">\n<blockquote>\n<p>If you're using the <code>RootProvider</code> component, you don't need to use the <code>Root</code> component.</p>\n</blockquote>\n<h2>API Reference</h2>\n<componenttypes id=\"tooltip\">\n<h2>Accessibility</h2>\n<p>Complies with the <a href=\"https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/\">Tooltip WAI-ARIA design pattern</a>.</p>\n<h3>Keyboard Support</h3>\n<keybindingstable id=\"tooltip\"></keybindingstable></componenttypes></example></example></example></example></example></example></example></anatomy></componentpreview>",
        "framework": "*",
        "toc": [
            {
                "title": "Anatomy",
                "url": "#anatomy",
                "items": []
            },
            {
                "title": "Examples",
                "url": "#examples",
                "items": [
                    {
                        "title": "Controlled Tooltip",
                        "url": "#controlled-tooltip",
                        "items": []
                    },
                    {
                        "title": "Using a Render Function",
                        "url": "#using-a-render-function",
                        "items": []
                    },
                    {
                        "title": "Adding an Arrow",
                        "url": "#adding-an-arrow",
                        "items": []
                    },
                    {
                        "title": "Configuring Delay Timings",
                        "url": "#configuring-delay-timings",
                        "items": []
                    },
                    {
                        "title": "Custom Positioning",
                        "url": "#custom-positioning",
                        "items": []
                    },
                    {
                        "title": "Using the Root Provider",
                        "url": "#using-the-root-provider",
                        "items": []
                    }
                ]
            },
            {
                "title": "API Reference",
                "url": "#api-reference",
                "items": []
            },
            {
                "title": "Accessibility",
                "url": "#accessibility",
                "items": [
                    {
                        "title": "Keyboard Support",
                        "url": "#keyboard-support",
                        "items": []
                    }
                ]
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:o}=arguments[0];function _createMdxContent(i){const t={a:\"a\",blockquote:\"blockquote\",code:\"code\",h2:\"h2\",h3:\"h3\",p:\"p\",span:\"span\",...i.components},{Anatomy:a,ComponentPreview:c,ComponentTypes:r,Example:s,KeyBindingsTable:l}=t;return a||_missingMdxReference(\"Anatomy\",!0),c||_missingMdxReference(\"ComponentPreview\",!0),r||_missingMdxReference(\"ComponentTypes\",!0),s||_missingMdxReference(\"Example\",!0),l||_missingMdxReference(\"KeyBindingsTable\",!0),o(e,{children:[n(c,{id:\"Tooltip\"}),\"\\n\",o(t.h2,{id:\"anatomy\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#anatomy\",children:n(t.span,{className:\"icon icon-link\"})}),\"Anatomy\"]}),\"\\n\",n(t.p,{children:\"To set up the tooltip correctly, you'll need to understand its anatomy and how we name its parts.\"}),\"\\n\",o(t.blockquote,{children:[\"\\n\",o(t.p,{children:[\"Each part includes a \",n(t.code,{children:\"data-part\"}),\" attribute to help identify them in the DOM.\"]}),\"\\n\"]}),\"\\n\",n(a,{id:\"tooltip\"}),\"\\n\",o(t.h2,{id:\"examples\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#examples\",children:n(t.span,{className:\"icon icon-link\"})}),\"Examples\"]}),\"\\n\",o(t.p,{children:[\"Learn how to use the \",n(t.code,{children:\"Tooltip\"}),\" component in your project. Let's take a look at the most basic example:\"]}),\"\\n\",n(s,{id:\"basic\"}),\"\\n\",o(t.h3,{id:\"controlled-tooltip\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#controlled-tooltip\",children:n(t.span,{className:\"icon icon-link\"})}),\"Controlled Tooltip\"]}),\"\\n\",o(t.p,{children:[\"To create a controlled Tooltip component, manage the state of whether the tooltip is open using the \",n(t.code,{children:\"open\"}),\" prop:\"]}),\"\\n\",n(s,{id:\"controlled\"}),\"\\n\",o(t.h3,{id:\"using-a-render-function\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-a-render-function\",children:n(t.span,{className:\"icon icon-link\"})}),\"Using a Render Function\"]}),\"\\n\",n(t.p,{children:\"For more control over the Tooltip's functionality, you can use a function as a child, which provides access to the\\nTooltip API:\"}),\"\\n\",n(s,{id:\"render-fn\"}),\"\\n\",o(t.h3,{id:\"adding-an-arrow\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#adding-an-arrow\",children:n(t.span,{className:\"icon icon-link\"})}),\"Adding an Arrow\"]}),\"\\n\",o(t.p,{children:[\"To display an arrow pointing to the trigger from the tooltip, use the \",n(t.code,{children:\"Tooltip.Arrow\"}),\" and \",n(t.code,{children:\"Tooltip.ArrowTip\"}),\" components:\"]}),\"\\n\",n(s,{id:\"arrow\"}),\"\\n\",o(t.h3,{id:\"configuring-delay-timings\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#configuring-delay-timings\",children:n(t.span,{className:\"icon icon-link\"})}),\"Configuring Delay Timings\"]}),\"\\n\",o(t.p,{children:[\"To configure the delay timings for the Tooltip, use the \",n(t.code,{children:\"closeDelay\"}),\" and \",n(t.code,{children:\"openDelay\"}),\" props:\"]}),\"\\n\",n(s,{id:\"timings\"}),\"\\n\",o(t.h3,{id:\"custom-positioning\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#custom-positioning\",children:n(t.span,{className:\"icon icon-link\"})}),\"Custom Positioning\"]}),\"\\n\",o(t.p,{children:[\"To customize the position of the Tooltip relative to the trigger, use the \",n(t.code,{children:\"positioning\"}),\" prop:\"]}),\"\\n\",n(s,{id:\"positioning\"}),\"\\n\",o(t.h3,{id:\"using-the-root-provider\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-the-root-provider\",children:n(t.span,{className:\"icon icon-link\"})}),\"Using the Root Provider\"]}),\"\\n\",o(t.p,{children:[\"The \",n(t.code,{children:\"RootProvider\"}),\" component provides a context for the tooltip. It accepts the value of the \",n(t.code,{children:\"useTooltip\"}),\" hook. You can\\nleverage it to access the component state and methods from outside the tooltip.\"]}),\"\\n\",n(s,{id:\"root-provider\"}),\"\\n\",o(t.blockquote,{children:[\"\\n\",o(t.p,{children:[\"If you're using the \",n(t.code,{children:\"RootProvider\"}),\" component, you don't need to use the \",n(t.code,{children:\"Root\"}),\" component.\"]}),\"\\n\"]}),\"\\n\",o(t.h2,{id:\"api-reference\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#api-reference\",children:n(t.span,{className:\"icon icon-link\"})}),\"API Reference\"]}),\"\\n\",n(r,{id:\"tooltip\"}),\"\\n\",o(t.h2,{id:\"accessibility\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#accessibility\",children:n(t.span,{className:\"icon icon-link\"})}),\"Accessibility\"]}),\"\\n\",o(t.p,{children:[\"Complies with the \",n(t.a,{href:\"https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/\",children:\"Tooltip WAI-ARIA design pattern\"}),\".\"]}),\"\\n\",o(t.h3,{id:\"keyboard-support\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#keyboard-support\",children:n(t.span,{className:\"icon icon-link\"})}),\"Keyboard Support\"]}),\"\\n\",n(l,{id:\"tooltip\"})]})}return{default:function(e={}){const{wrapper:o}=e.components||{};return o?n(o,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};function _missingMdxReference(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "<ComponentPreview id=\"Tooltip\" />\n\n## Anatomy\n\nTo set up the tooltip correctly, you'll need to understand its anatomy and how we name its parts.\n\n> Each part includes a `data-part` attribute to help identify them in the DOM.\n\n<Anatomy id=\"tooltip\" />\n\n## Examples\n\nLearn how to use the `Tooltip` component in your project. Let's take a look at the most basic example:\n\n<Example id=\"basic\" />\n\n### Controlled Tooltip\n\nTo create a controlled Tooltip component, manage the state of whether the tooltip is open using the `open` prop:\n\n<Example id=\"controlled\" />\n\n### Using a Render Function\n\nFor more control over the Tooltip's functionality, you can use a function as a child, which provides access to the\nTooltip API:\n\n<Example id=\"render-fn\" />\n\n### Adding an Arrow\n\nTo display an arrow pointing to the trigger from the tooltip, use the `Tooltip.Arrow` and `Tooltip.ArrowTip` components:\n\n<Example id=\"arrow\" />\n\n### Configuring Delay Timings\n\nTo configure the delay timings for the Tooltip, use the `closeDelay` and `openDelay` props:\n\n<Example id=\"timings\" />\n\n### Custom Positioning\n\nTo customize the position of the Tooltip relative to the trigger, use the `positioning` prop:\n\n<Example id=\"positioning\" />\n\n### Using the Root Provider\n\nThe `RootProvider` component provides a context for the tooltip. It accepts the value of the `useTooltip` hook. You can\nleverage it to access the component state and methods from outside the tooltip.\n\n<Example id=\"root-provider\" />\n\n> If you're using the `RootProvider` component, you don't need to use the `Root` component.\n\n## API Reference\n\n<ComponentTypes id=\"tooltip\" />\n\n## Accessibility\n\nComplies with the [Tooltip WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/).\n\n### Keyboard Support\n\n<KeyBindingsTable id=\"tooltip\" />",
        "slug": "components/tooltip",
        "category": "components"
    },
    {
        "id": "tour",
        "title": "Tour",
        "description": "A guided tour that helps users understand the interface.",
        "metadata": {
            "readingTime": 2,
            "wordCount": 625
        },
        "content": "<componentpreview id=\"Tour\">\n<h2>Features</h2>\n<ul>\n<li>Support for different step types such as \"dialog\", \"floating\", \"tooltip\" or \"wait\"</li>\n<li>Support for customizable content per step</li>\n<li>Wait steps for waiting for a specific selector to appear on the page before showing the next step</li>\n<li>Flexible positioning of the tour dialog per step</li>\n<li>Progress tracking shows users their progress through the tour</li>\n</ul>\n<h2>Anatomy</h2>\n<p>To set up the tour correctly, it's essential to understand its anatomy and the naming of its parts.</p>\n<blockquote>\n<p>Each part includes a <code>data-part</code> attribute to help identify them in the DOM.</p>\n</blockquote>\n<anatomy id=\"tour\">\n<h2>Steps</h2>\n<h3>Using step types</h3>\n<p>The tour machine supports different types of steps, allowing you to create a diverse and interactive tour experience.\nThe available step types are defined in the <code>StepType</code> type:</p>\n<ul>\n<li>\n<p><code>tooltip</code>: Displays the step content as a tooltip, typically positioned near the target element.</p>\n</li>\n<li>\n<p><code>dialog</code>: Shows the step content in a modal dialog centered on screen, useful for starting or ending the tour. This\nusually don't have a <code>target</code> defined.</p>\n</li>\n<li>\n<p><code>floating</code>: Presents the step content as a floating element, which can be positioned flexibly on the screen. This\nusually don't have a <code>target</code> defined.</p>\n</li>\n<li>\n<p><code>wait</code>: A special type that waits for a specific condition before proceeding to the next step.</p>\n</li>\n</ul>\n<pre><code class=\"language-tsx\">const steps: TourStepDetails[] = [\n  {\n    id: 'step-1',\n    type: 'tooltip',\n    placement: 'top-start',\n    target: () => document.querySelector('#target-1'),\n    title: 'Tooltip Step',\n    description: 'This is a tooltip step',\n  },\n  {\n    id: 'step-2',\n    type: 'dialog',\n    title: 'Dialog Step',\n    description: 'This is a dialog step',\n  },\n  {\n    id: 'step-3',\n    type: 'floating',\n    placement: 'top-start',\n    title: 'Floating Step',\n    description: 'This is a floating step',\n  },\n  {\n    id: 'step-4',\n    type: 'wait',\n    title: 'Wait Step',\n    description: 'This is a wait step',\n    effect({ next }) {\n      // do something and go next\n      // you can also return a cleanup\n    },\n  },\n]\n</code></pre>\n<h3>Configuring actions</h3>\n<p>Every step supports a list of actions that are rendered in the step footer.Use the <code>actions</code> property to define each\naction.</p>\n<pre><code class=\"language-tsx\">const steps: TourStepDetails[] = [\n  {\n    id: 'step-1',\n    type: 'dialog',\n    title: 'Dialog Step',\n    description: 'This is a dialog step',\n    actions: [{ label: 'Show me a tour!', action: 'next' }],\n  },\n]\n</code></pre>\n<h3>Changing tooltip placement</h3>\n<p>Use the <code>placement</code> property to define the placement of the tooltip.</p>\n<pre><code class=\"language-tsx\" metastring=\"{5}\">const steps: TourStepDetails[] = [\n  {\n    id: 'step-1',\n    type: 'tooltip',\n    placement: 'top-start',\n    // ...\n  },\n]\n</code></pre>\n<h3>Hiding the arrow</h3>\n<p>Set <code>arrow: false</code> in the step property to hide the tooltip arrow. This is only useful for tooltip steps.</p>\n<pre><code class=\"language-tsx\" metastring=\"{5}\">const steps: TourStepDetails[] = [\n  {\n    id: 'step-1',\n    type: 'tooltip',\n    arrow: false,\n  },\n]\n</code></pre>\n<h3>Hiding the backdrop</h3>\n<p>Set <code>backdrop: false</code> in the step property to hide the backdrop. This applies to all step types except the <code>wait</code> step.</p>\n<pre><code class=\"language-tsx\" metastring=\"{5}\">const steps: TourStepDetails[] = [\n  {\n    id: 'step-1',\n    type: 'dialog',\n    backdrop: false,\n  },\n]\n</code></pre>\n<h3>Step Effects</h3>\n<p>Step effects are functions that are called before a step is opened. They are useful for adding custom logic to a step.</p>\n<p>This function provides the following methods:</p>\n<ul>\n<li><code>next()</code>: Call this method to move to the next step.</li>\n<li><code>show()</code>: Call this method to show the current step.</li>\n<li><code>update(details: StepDetails)</code>: Call this method to update the details of the current step (say, after data has been\nfetched).</li>\n</ul>\n<pre><code class=\"language-tsx\">const steps: TourStepDetails[] = [\n  {\n    id: 'step-1',\n    type: 'tooltip',\n    effect({ next, show, update }) {\n      fetchData().then((res) => {\n        // update the step details\n        update({ title: res.title })\n        // then show show the step\n        show()\n      })\n\n      return () => {\n        // cleanup fetch data\n      }\n    },\n  },\n]\n</code></pre>\n<h3>Wait Steps</h3>\n<p>Wait steps are useful when you need to wait for a specific condition before proceeding to the next step.</p>\n<p>Use the step <code>effect</code> function to perform an action and then call <code>next()</code> to move to the next step.</p>\n<blockquote>\n<p><strong>Note:</strong> You cannot call <code>show()</code> in a wait step.</p>\n</blockquote>\n<pre><code class=\"language-tsx\">const steps: TourStepDetails[] = [\n  {\n    id: 'step-1',\n    type: 'wait',\n    effect({ next }) {\n      const button = document.querySelector('#button')\n      const listener = () => next()\n      button.addEventListener('click', listener)\n      return () => button.removeEventListener('click', listener)\n    },\n  },\n]\n</code></pre>\n<h2>Styling guide</h2>\n<p>Ensure the <code>box-sizing</code> is set to <code>border-box</code> for the means of measuring the tour target.</p>\n<pre><code class=\"language-css\">* {\n  box-sizing: border-box;\n}\n</code></pre>\n<p>Ensure the <code>body</code> has a <code>position</code> of <code>relative</code>.</p>\n<pre><code class=\"language-css\">body {\n  position: relative;\n}\n</code></pre>\n<h2>API Reference</h2>\n<componenttypes id=\"tour\"></componenttypes></anatomy></componentpreview>",
        "framework": "*",
        "toc": [
            {
                "title": "Features",
                "url": "#features",
                "items": []
            },
            {
                "title": "Anatomy",
                "url": "#anatomy",
                "items": []
            },
            {
                "title": "Steps",
                "url": "#steps",
                "items": [
                    {
                        "title": "Using step types",
                        "url": "#using-step-types",
                        "items": []
                    },
                    {
                        "title": "Configuring actions",
                        "url": "#configuring-actions",
                        "items": []
                    },
                    {
                        "title": "Changing tooltip placement",
                        "url": "#changing-tooltip-placement",
                        "items": []
                    },
                    {
                        "title": "Hiding the arrow",
                        "url": "#hiding-the-arrow",
                        "items": []
                    },
                    {
                        "title": "Hiding the backdrop",
                        "url": "#hiding-the-backdrop",
                        "items": []
                    },
                    {
                        "title": "Step Effects",
                        "url": "#step-effects",
                        "items": []
                    },
                    {
                        "title": "Wait Steps",
                        "url": "#wait-steps",
                        "items": []
                    }
                ]
            },
            {
                "title": "Styling guide",
                "url": "#styling-guide",
                "items": []
            },
            {
                "title": "API Reference",
                "url": "#api-reference",
                "items": []
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:t}=arguments[0];function _createMdxContent(i){const o={a:\"a\",blockquote:\"blockquote\",code:\"code\",h2:\"h2\",h3:\"h3\",li:\"li\",p:\"p\",pre:\"pre\",span:\"span\",strong:\"strong\",ul:\"ul\",...i.components},{Anatomy:a,ComponentPreview:s,ComponentTypes:c}=o;return a||_missingMdxReference(\"Anatomy\",!0),s||_missingMdxReference(\"ComponentPreview\",!0),c||_missingMdxReference(\"ComponentTypes\",!0),t(e,{children:[n(s,{id:\"Tour\"}),\"\\n\",t(o.h2,{id:\"features\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#features\",children:n(o.span,{className:\"icon icon-link\"})}),\"Features\"]}),\"\\n\",t(o.ul,{children:[\"\\n\",n(o.li,{children:'Support for different step types such as \"dialog\", \"floating\", \"tooltip\" or \"wait\"'}),\"\\n\",n(o.li,{children:\"Support for customizable content per step\"}),\"\\n\",n(o.li,{children:\"Wait steps for waiting for a specific selector to appear on the page before showing the next step\"}),\"\\n\",n(o.li,{children:\"Flexible positioning of the tour dialog per step\"}),\"\\n\",n(o.li,{children:\"Progress tracking shows users their progress through the tour\"}),\"\\n\"]}),\"\\n\",t(o.h2,{id:\"anatomy\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#anatomy\",children:n(o.span,{className:\"icon icon-link\"})}),\"Anatomy\"]}),\"\\n\",n(o.p,{children:\"To set up the tour correctly, it's essential to understand its anatomy and the naming of its parts.\"}),\"\\n\",t(o.blockquote,{children:[\"\\n\",t(o.p,{children:[\"Each part includes a \",n(o.code,{children:\"data-part\"}),\" attribute to help identify them in the DOM.\"]}),\"\\n\"]}),\"\\n\",n(a,{id:\"tour\"}),\"\\n\",t(o.h2,{id:\"steps\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#steps\",children:n(o.span,{className:\"icon icon-link\"})}),\"Steps\"]}),\"\\n\",t(o.h3,{id:\"using-step-types\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-step-types\",children:n(o.span,{className:\"icon icon-link\"})}),\"Using step types\"]}),\"\\n\",t(o.p,{children:[\"The tour machine supports different types of steps, allowing you to create a diverse and interactive tour experience.\\nThe available step types are defined in the \",n(o.code,{children:\"StepType\"}),\" type:\"]}),\"\\n\",t(o.ul,{children:[\"\\n\",t(o.li,{children:[\"\\n\",t(o.p,{children:[n(o.code,{children:\"tooltip\"}),\": Displays the step content as a tooltip, typically positioned near the target element.\"]}),\"\\n\"]}),\"\\n\",t(o.li,{children:[\"\\n\",t(o.p,{children:[n(o.code,{children:\"dialog\"}),\": Shows the step content in a modal dialog centered on screen, useful for starting or ending the tour. This\\nusually don't have a \",n(o.code,{children:\"target\"}),\" defined.\"]}),\"\\n\"]}),\"\\n\",t(o.li,{children:[\"\\n\",t(o.p,{children:[n(o.code,{children:\"floating\"}),\": Presents the step content as a floating element, which can be positioned flexibly on the screen. This\\nusually don't have a \",n(o.code,{children:\"target\"}),\" defined.\"]}),\"\\n\"]}),\"\\n\",t(o.li,{children:[\"\\n\",t(o.p,{children:[n(o.code,{children:\"wait\"}),\": A special type that waits for a specific condition before proceeding to the next step.\"]}),\"\\n\"]}),\"\\n\"]}),\"\\n\",n(o.pre,{children:n(o.code,{className:\"language-tsx\",children:\"const steps: TourStepDetails[] = [\\n  {\\n    id: 'step-1',\\n    type: 'tooltip',\\n    placement: 'top-start',\\n    target: () => document.querySelector('#target-1'),\\n    title: 'Tooltip Step',\\n    description: 'This is a tooltip step',\\n  },\\n  {\\n    id: 'step-2',\\n    type: 'dialog',\\n    title: 'Dialog Step',\\n    description: 'This is a dialog step',\\n  },\\n  {\\n    id: 'step-3',\\n    type: 'floating',\\n    placement: 'top-start',\\n    title: 'Floating Step',\\n    description: 'This is a floating step',\\n  },\\n  {\\n    id: 'step-4',\\n    type: 'wait',\\n    title: 'Wait Step',\\n    description: 'This is a wait step',\\n    effect({ next }) {\\n      // do something and go next\\n      // you can also return a cleanup\\n    },\\n  },\\n]\\n\"})}),\"\\n\",t(o.h3,{id:\"configuring-actions\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#configuring-actions\",children:n(o.span,{className:\"icon icon-link\"})}),\"Configuring actions\"]}),\"\\n\",t(o.p,{children:[\"Every step supports a list of actions that are rendered in the step footer.Use the \",n(o.code,{children:\"actions\"}),\" property to define each\\naction.\"]}),\"\\n\",n(o.pre,{children:n(o.code,{className:\"language-tsx\",children:\"const steps: TourStepDetails[] = [\\n  {\\n    id: 'step-1',\\n    type: 'dialog',\\n    title: 'Dialog Step',\\n    description: 'This is a dialog step',\\n    actions: [{ label: 'Show me a tour!', action: 'next' }],\\n  },\\n]\\n\"})}),\"\\n\",t(o.h3,{id:\"changing-tooltip-placement\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#changing-tooltip-placement\",children:n(o.span,{className:\"icon icon-link\"})}),\"Changing tooltip placement\"]}),\"\\n\",t(o.p,{children:[\"Use the \",n(o.code,{children:\"placement\"}),\" property to define the placement of the tooltip.\"]}),\"\\n\",n(o.pre,{children:n(o.code,{className:\"language-tsx\",children:\"const steps: TourStepDetails[] = [\\n  {\\n    id: 'step-1',\\n    type: 'tooltip',\\n    placement: 'top-start',\\n    // ...\\n  },\\n]\\n\"})}),\"\\n\",t(o.h3,{id:\"hiding-the-arrow\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#hiding-the-arrow\",children:n(o.span,{className:\"icon icon-link\"})}),\"Hiding the arrow\"]}),\"\\n\",t(o.p,{children:[\"Set \",n(o.code,{children:\"arrow: false\"}),\" in the step property to hide the tooltip arrow. This is only useful for tooltip steps.\"]}),\"\\n\",n(o.pre,{children:n(o.code,{className:\"language-tsx\",children:\"const steps: TourStepDetails[] = [\\n  {\\n    id: 'step-1',\\n    type: 'tooltip',\\n    arrow: false,\\n  },\\n]\\n\"})}),\"\\n\",t(o.h3,{id:\"hiding-the-backdrop\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#hiding-the-backdrop\",children:n(o.span,{className:\"icon icon-link\"})}),\"Hiding the backdrop\"]}),\"\\n\",t(o.p,{children:[\"Set \",n(o.code,{children:\"backdrop: false\"}),\" in the step property to hide the backdrop. This applies to all step types except the \",n(o.code,{children:\"wait\"}),\" step.\"]}),\"\\n\",n(o.pre,{children:n(o.code,{className:\"language-tsx\",children:\"const steps: TourStepDetails[] = [\\n  {\\n    id: 'step-1',\\n    type: 'dialog',\\n    backdrop: false,\\n  },\\n]\\n\"})}),\"\\n\",t(o.h3,{id:\"step-effects\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#step-effects\",children:n(o.span,{className:\"icon icon-link\"})}),\"Step Effects\"]}),\"\\n\",n(o.p,{children:\"Step effects are functions that are called before a step is opened. They are useful for adding custom logic to a step.\"}),\"\\n\",n(o.p,{children:\"This function provides the following methods:\"}),\"\\n\",t(o.ul,{children:[\"\\n\",t(o.li,{children:[n(o.code,{children:\"next()\"}),\": Call this method to move to the next step.\"]}),\"\\n\",t(o.li,{children:[n(o.code,{children:\"show()\"}),\": Call this method to show the current step.\"]}),\"\\n\",t(o.li,{children:[n(o.code,{children:\"update(details: StepDetails)\"}),\": Call this method to update the details of the current step (say, after data has been\\nfetched).\"]}),\"\\n\"]}),\"\\n\",n(o.pre,{children:n(o.code,{className:\"language-tsx\",children:\"const steps: TourStepDetails[] = [\\n  {\\n    id: 'step-1',\\n    type: 'tooltip',\\n    effect({ next, show, update }) {\\n      fetchData().then((res) => {\\n        // update the step details\\n        update({ title: res.title })\\n        // then show show the step\\n        show()\\n      })\\n\\n      return () => {\\n        // cleanup fetch data\\n      }\\n    },\\n  },\\n]\\n\"})}),\"\\n\",t(o.h3,{id:\"wait-steps\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#wait-steps\",children:n(o.span,{className:\"icon icon-link\"})}),\"Wait Steps\"]}),\"\\n\",n(o.p,{children:\"Wait steps are useful when you need to wait for a specific condition before proceeding to the next step.\"}),\"\\n\",t(o.p,{children:[\"Use the step \",n(o.code,{children:\"effect\"}),\" function to perform an action and then call \",n(o.code,{children:\"next()\"}),\" to move to the next step.\"]}),\"\\n\",t(o.blockquote,{children:[\"\\n\",t(o.p,{children:[n(o.strong,{children:\"Note:\"}),\" You cannot call \",n(o.code,{children:\"show()\"}),\" in a wait step.\"]}),\"\\n\"]}),\"\\n\",n(o.pre,{children:n(o.code,{className:\"language-tsx\",children:\"const steps: TourStepDetails[] = [\\n  {\\n    id: 'step-1',\\n    type: 'wait',\\n    effect({ next }) {\\n      const button = document.querySelector('#button')\\n      const listener = () => next()\\n      button.addEventListener('click', listener)\\n      return () => button.removeEventListener('click', listener)\\n    },\\n  },\\n]\\n\"})}),\"\\n\",t(o.h2,{id:\"styling-guide\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#styling-guide\",children:n(o.span,{className:\"icon icon-link\"})}),\"Styling guide\"]}),\"\\n\",t(o.p,{children:[\"Ensure the \",n(o.code,{children:\"box-sizing\"}),\" is set to \",n(o.code,{children:\"border-box\"}),\" for the means of measuring the tour target.\"]}),\"\\n\",n(o.pre,{children:n(o.code,{className:\"language-css\",children:\"* {\\n  box-sizing: border-box;\\n}\\n\"})}),\"\\n\",t(o.p,{children:[\"Ensure the \",n(o.code,{children:\"body\"}),\" has a \",n(o.code,{children:\"position\"}),\" of \",n(o.code,{children:\"relative\"}),\".\"]}),\"\\n\",n(o.pre,{children:n(o.code,{className:\"language-css\",children:\"body {\\n  position: relative;\\n}\\n\"})}),\"\\n\",t(o.h2,{id:\"api-reference\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#api-reference\",children:n(o.span,{className:\"icon icon-link\"})}),\"API Reference\"]}),\"\\n\",n(c,{id:\"tour\"})]})}return{default:function(e={}){const{wrapper:t}=e.components||{};return t?n(t,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};function _missingMdxReference(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "<ComponentPreview id=\"Tour\" />\n\n## Features\n\n- Support for different step types such as \"dialog\", \"floating\", \"tooltip\" or \"wait\"\n- Support for customizable content per step\n- Wait steps for waiting for a specific selector to appear on the page before showing the next step\n- Flexible positioning of the tour dialog per step\n- Progress tracking shows users their progress through the tour\n\n## Anatomy\n\nTo set up the tour correctly, it's essential to understand its anatomy and the naming of its parts.\n\n> Each part includes a `data-part` attribute to help identify them in the DOM.\n\n<Anatomy id=\"tour\" />\n\n## Steps\n\n### Using step types\n\nThe tour machine supports different types of steps, allowing you to create a diverse and interactive tour experience.\nThe available step types are defined in the `StepType` type:\n\n- `tooltip`: Displays the step content as a tooltip, typically positioned near the target element.\n\n- `dialog`: Shows the step content in a modal dialog centered on screen, useful for starting or ending the tour. This\n  usually don't have a `target` defined.\n\n- `floating`: Presents the step content as a floating element, which can be positioned flexibly on the screen. This\n  usually don't have a `target` defined.\n\n- `wait`: A special type that waits for a specific condition before proceeding to the next step.\n\n```tsx\nconst steps: TourStepDetails[] = [\n  {\n    id: 'step-1',\n    type: 'tooltip',\n    placement: 'top-start',\n    target: () => document.querySelector('#target-1'),\n    title: 'Tooltip Step',\n    description: 'This is a tooltip step',\n  },\n  {\n    id: 'step-2',\n    type: 'dialog',\n    title: 'Dialog Step',\n    description: 'This is a dialog step',\n  },\n  {\n    id: 'step-3',\n    type: 'floating',\n    placement: 'top-start',\n    title: 'Floating Step',\n    description: 'This is a floating step',\n  },\n  {\n    id: 'step-4',\n    type: 'wait',\n    title: 'Wait Step',\n    description: 'This is a wait step',\n    effect({ next }) {\n      // do something and go next\n      // you can also return a cleanup\n    },\n  },\n]\n```\n\n### Configuring actions\n\nEvery step supports a list of actions that are rendered in the step footer.Use the `actions` property to define each\naction.\n\n```tsx\nconst steps: TourStepDetails[] = [\n  {\n    id: 'step-1',\n    type: 'dialog',\n    title: 'Dialog Step',\n    description: 'This is a dialog step',\n    actions: [{ label: 'Show me a tour!', action: 'next' }],\n  },\n]\n```\n\n### Changing tooltip placement\n\nUse the `placement` property to define the placement of the tooltip.\n\n```tsx {5}\nconst steps: TourStepDetails[] = [\n  {\n    id: 'step-1',\n    type: 'tooltip',\n    placement: 'top-start',\n    // ...\n  },\n]\n```\n\n### Hiding the arrow\n\nSet `arrow: false` in the step property to hide the tooltip arrow. This is only useful for tooltip steps.\n\n```tsx {5}\nconst steps: TourStepDetails[] = [\n  {\n    id: 'step-1',\n    type: 'tooltip',\n    arrow: false,\n  },\n]\n```\n\n### Hiding the backdrop\n\nSet `backdrop: false` in the step property to hide the backdrop. This applies to all step types except the `wait` step.\n\n```tsx {5}\nconst steps: TourStepDetails[] = [\n  {\n    id: 'step-1',\n    type: 'dialog',\n    backdrop: false,\n  },\n]\n```\n\n### Step Effects\n\nStep effects are functions that are called before a step is opened. They are useful for adding custom logic to a step.\n\nThis function provides the following methods:\n\n- `next()`: Call this method to move to the next step.\n- `show()`: Call this method to show the current step.\n- `update(details: StepDetails)`: Call this method to update the details of the current step (say, after data has been\n  fetched).\n\n```tsx\nconst steps: TourStepDetails[] = [\n  {\n    id: 'step-1',\n    type: 'tooltip',\n    effect({ next, show, update }) {\n      fetchData().then((res) => {\n        // update the step details\n        update({ title: res.title })\n        // then show show the step\n        show()\n      })\n\n      return () => {\n        // cleanup fetch data\n      }\n    },\n  },\n]\n```\n\n### Wait Steps\n\nWait steps are useful when you need to wait for a specific condition before proceeding to the next step.\n\nUse the step `effect` function to perform an action and then call `next()` to move to the next step.\n\n> **Note:** You cannot call `show()` in a wait step.\n\n```tsx\nconst steps: TourStepDetails[] = [\n  {\n    id: 'step-1',\n    type: 'wait',\n    effect({ next }) {\n      const button = document.querySelector('#button')\n      const listener = () => next()\n      button.addEventListener('click', listener)\n      return () => button.removeEventListener('click', listener)\n    },\n  },\n]\n```\n\n## Styling guide\n\nEnsure the `box-sizing` is set to `border-box` for the means of measuring the tour target.\n\n```css\n* {\n  box-sizing: border-box;\n}\n```\n\nEnsure the `body` has a `position` of `relative`.\n\n```css\nbody {\n  position: relative;\n}\n```\n\n## API Reference\n\n<ComponentTypes id=\"tour\" />",
        "slug": "components/tour",
        "category": "components"
    },
    {
        "id": "tree-view",
        "title": "Tree View",
        "description": "A component that is used to show a tree hierarchy.",
        "metadata": {
            "readingTime": 1,
            "wordCount": 122
        },
        "content": "<componentpreview id=\"TreeView\">\n<h2>Anatomy</h2>\n<p>To set up the tree view component correctly, you'll need to understand its anatomy and how we name its parts.</p>\n<blockquote>\n<p>Each part includes a <code>data-part</code> attribute to help identify them in the DOM.</p>\n</blockquote>\n<anatomy id=\"tree-view\">\n<h2>Examples</h2>\n<p>Learn how to use the <code>TreeView</code> component in your project. Let's take a look at the most basic example:</p>\n<example id=\"basic\">\n<h3>Using the Root Provider</h3>\n<p>The <code>RootProvider</code> component provides a context for the tree-view. It accepts the value of the <code>useTree-view</code> hook. You\ncan leverage it to access the component state and methods from outside the tree-view.</p>\n<example id=\"root-provider\">\n<blockquote>\n<p>If you're using the <code>RootProvider</code> component, you don't need to use the <code>Root</code> component.</p>\n</blockquote>\n<h2>API Reference</h2>\n<componenttypes id=\"tree-view\">\n<h2>Accessibility</h2>\n<p>Complies with the <a href=\"https://www.w3.org/WAI/ARIA/apg/patterns/treeview/\">Tree View WAI-ARIA design pattern</a>.</p>\n<h3>Keyboard Support</h3>\n<keybindingstable id=\"tree-view\"></keybindingstable></componenttypes></example></example></anatomy></componentpreview>",
        "framework": "*",
        "status": "preview",
        "toc": [
            {
                "title": "Anatomy",
                "url": "#anatomy",
                "items": []
            },
            {
                "title": "Examples",
                "url": "#examples",
                "items": [
                    {
                        "title": "Using the Root Provider",
                        "url": "#using-the-root-provider",
                        "items": []
                    }
                ]
            },
            {
                "title": "API Reference",
                "url": "#api-reference",
                "items": []
            },
            {
                "title": "Accessibility",
                "url": "#accessibility",
                "items": [
                    {
                        "title": "Keyboard Support",
                        "url": "#keyboard-support",
                        "items": []
                    }
                ]
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:i}=arguments[0];function _createMdxContent(o){const t={a:\"a\",blockquote:\"blockquote\",code:\"code\",h2:\"h2\",h3:\"h3\",p:\"p\",span:\"span\",...o.components},{Anatomy:r,ComponentPreview:a,ComponentTypes:c,Example:s,KeyBindingsTable:d}=t;return r||_missingMdxReference(\"Anatomy\",!0),a||_missingMdxReference(\"ComponentPreview\",!0),c||_missingMdxReference(\"ComponentTypes\",!0),s||_missingMdxReference(\"Example\",!0),d||_missingMdxReference(\"KeyBindingsTable\",!0),i(e,{children:[n(a,{id:\"TreeView\"}),\"\\n\",i(t.h2,{id:\"anatomy\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#anatomy\",children:n(t.span,{className:\"icon icon-link\"})}),\"Anatomy\"]}),\"\\n\",n(t.p,{children:\"To set up the tree view component correctly, you'll need to understand its anatomy and how we name its parts.\"}),\"\\n\",i(t.blockquote,{children:[\"\\n\",i(t.p,{children:[\"Each part includes a \",n(t.code,{children:\"data-part\"}),\" attribute to help identify them in the DOM.\"]}),\"\\n\"]}),\"\\n\",n(r,{id:\"tree-view\"}),\"\\n\",i(t.h2,{id:\"examples\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#examples\",children:n(t.span,{className:\"icon icon-link\"})}),\"Examples\"]}),\"\\n\",i(t.p,{children:[\"Learn how to use the \",n(t.code,{children:\"TreeView\"}),\" component in your project. Let's take a look at the most basic example:\"]}),\"\\n\",n(s,{id:\"basic\"}),\"\\n\",i(t.h3,{id:\"using-the-root-provider\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#using-the-root-provider\",children:n(t.span,{className:\"icon icon-link\"})}),\"Using the Root Provider\"]}),\"\\n\",i(t.p,{children:[\"The \",n(t.code,{children:\"RootProvider\"}),\" component provides a context for the tree-view. It accepts the value of the \",n(t.code,{children:\"useTree-view\"}),\" hook. You\\ncan leverage it to access the component state and methods from outside the tree-view.\"]}),\"\\n\",n(s,{id:\"root-provider\"}),\"\\n\",i(t.blockquote,{children:[\"\\n\",i(t.p,{children:[\"If you're using the \",n(t.code,{children:\"RootProvider\"}),\" component, you don't need to use the \",n(t.code,{children:\"Root\"}),\" component.\"]}),\"\\n\"]}),\"\\n\",i(t.h2,{id:\"api-reference\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#api-reference\",children:n(t.span,{className:\"icon icon-link\"})}),\"API Reference\"]}),\"\\n\",n(c,{id:\"tree-view\"}),\"\\n\",i(t.h2,{id:\"accessibility\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#accessibility\",children:n(t.span,{className:\"icon icon-link\"})}),\"Accessibility\"]}),\"\\n\",i(t.p,{children:[\"Complies with the \",n(t.a,{href:\"https://www.w3.org/WAI/ARIA/apg/patterns/treeview/\",children:\"Tree View WAI-ARIA design pattern\"}),\".\"]}),\"\\n\",i(t.h3,{id:\"keyboard-support\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#keyboard-support\",children:n(t.span,{className:\"icon icon-link\"})}),\"Keyboard Support\"]}),\"\\n\",n(d,{id:\"tree-view\"})]})}return{default:function(e={}){const{wrapper:i}=e.components||{};return i?n(i,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};function _missingMdxReference(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "<ComponentPreview id=\"TreeView\" />\n\n## Anatomy\n\nTo set up the tree view component correctly, you'll need to understand its anatomy and how we name its parts.\n\n> Each part includes a `data-part` attribute to help identify them in the DOM.\n\n<Anatomy id=\"tree-view\" />\n\n## Examples\n\nLearn how to use the `TreeView` component in your project. Let's take a look at the most basic example:\n\n<Example id=\"basic\" />\n\n### Using the Root Provider\n\nThe `RootProvider` component provides a context for the tree-view. It accepts the value of the `useTree-view` hook. You\ncan leverage it to access the component state and methods from outside the tree-view.\n\n<Example id=\"root-provider\" />\n\n> If you're using the `RootProvider` component, you don't need to use the `Root` component.\n\n## API Reference\n\n<ComponentTypes id=\"tree-view\" />\n\n## Accessibility\n\nComplies with the [Tree View WAI-ARIA design pattern](https://www.w3.org/WAI/ARIA/apg/patterns/treeview/).\n\n### Keyboard Support\n\n<KeyBindingsTable id=\"tree-view\" />",
        "slug": "components/tree-view",
        "category": "components"
    },
    {
        "id": "animation",
        "title": "Animation",
        "description": "Animate your Ark UI Components with CSS keyframes or your favorite JavaScript animation library.",
        "metadata": {
            "readingTime": 1,
            "wordCount": 269
        },
        "content": "<p>Adding animation to Ark UI Components is as straightforward as with any other component, but keep in mind some\nconsiderations when working with exit animations with JavaScript animation libraries.</p>\n<h2>Animating with CSS</h2>\n<p>The most straightforward method to animate your elements is using CSS. You can animate both the mounting and unmounting\nphases with CSS. The latter is achievable because Ark UI Components postpones the unmounting while your animation runs.</p>\n<p>Below is a simple example of creating a fade-in and fade-out animation using CSS keyframes:</p>\n<pre><code class=\"language-css\">@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n</code></pre>\n<p>You can use these keyframes to animate any element during its lifecycle. For instance, to apply the <code>fadeIn</code> animation\nwhen your <code>Tooltip</code> enters the 'open' state, and <code>fadeOut</code> when it enters the 'closed' state, you could use the\nfollowing styles:</p>\n<pre><code class=\"language-css\">[data-scope='tooltip'][data-part='content'][data-state='open'] {\n  animation: fadeIn 300ms ease-out;\n}\n\n[data-scope='tooltip'][data-part='content'][data-state='closed'] {\n  animation: fadeOut 300ms ease-in;\n}\n</code></pre>\n<h2>Animating with JS Libraries</h2>\n<p>There's plenty of versatility when it comes to animating your Ark UI Elements with JavaScript libraries. Various\nlibraries such as GreenSock, anime.js, Framer Motion, and more can add a new level of interaction and feedback to your\nUI components.</p>\n<p>One significant advantage of using Ark UI Elements is the control you have over the unmounting phase of your components.\nThis is primarily facilitated through the <code>present</code> prop. The <code>present</code> prop allows the component to stay mounted even\nafter its enclosing condition has been falsified, allowing for exit animations to complete before the component is\nremoved from the DOM.</p>",
        "framework": "*",
        "toc": [
            {
                "title": "Animating with CSS",
                "url": "#animating-with-css",
                "items": []
            },
            {
                "title": "Animating with JS Libraries",
                "url": "#animating-with-js-libraries",
                "items": []
            }
        ],
        "code": "const{Fragment:n,jsx:e,jsxs:a}=arguments[0];function _createMdxContent(t){const i={a:\"a\",code:\"code\",h2:\"h2\",p:\"p\",pre:\"pre\",span:\"span\",...t.components};return a(n,{children:[e(i.p,{children:\"Adding animation to Ark UI Components is as straightforward as with any other component, but keep in mind some\\nconsiderations when working with exit animations with JavaScript animation libraries.\"}),\"\\n\",a(i.h2,{id:\"animating-with-css\",children:[e(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#animating-with-css\",children:e(i.span,{className:\"icon icon-link\"})}),\"Animating with CSS\"]}),\"\\n\",e(i.p,{children:\"The most straightforward method to animate your elements is using CSS. You can animate both the mounting and unmounting\\nphases with CSS. The latter is achievable because Ark UI Components postpones the unmounting while your animation runs.\"}),\"\\n\",e(i.p,{children:\"Below is a simple example of creating a fade-in and fade-out animation using CSS keyframes:\"}),\"\\n\",e(i.pre,{children:e(i.code,{className:\"language-css\",children:\"@keyframes fadeIn {\\n  from {\\n    opacity: 0;\\n  }\\n  to {\\n    opacity: 1;\\n  }\\n}\\n\\n@keyframes fadeOut {\\n  from {\\n    opacity: 1;\\n  }\\n  to {\\n    opacity: 0;\\n  }\\n}\\n\"})}),\"\\n\",a(i.p,{children:[\"You can use these keyframes to animate any element during its lifecycle. For instance, to apply the \",e(i.code,{children:\"fadeIn\"}),\" animation\\nwhen your \",e(i.code,{children:\"Tooltip\"}),\" enters the 'open' state, and \",e(i.code,{children:\"fadeOut\"}),\" when it enters the 'closed' state, you could use the\\nfollowing styles:\"]}),\"\\n\",e(i.pre,{children:e(i.code,{className:\"language-css\",children:\"[data-scope='tooltip'][data-part='content'][data-state='open'] {\\n  animation: fadeIn 300ms ease-out;\\n}\\n\\n[data-scope='tooltip'][data-part='content'][data-state='closed'] {\\n  animation: fadeOut 300ms ease-in;\\n}\\n\"})}),\"\\n\",a(i.h2,{id:\"animating-with-js-libraries\",children:[e(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#animating-with-js-libraries\",children:e(i.span,{className:\"icon icon-link\"})}),\"Animating with JS Libraries\"]}),\"\\n\",e(i.p,{children:\"There's plenty of versatility when it comes to animating your Ark UI Elements with JavaScript libraries. Various\\nlibraries such as GreenSock, anime.js, Framer Motion, and more can add a new level of interaction and feedback to your\\nUI components.\"}),\"\\n\",a(i.p,{children:[\"One significant advantage of using Ark UI Elements is the control you have over the unmounting phase of your components.\\nThis is primarily facilitated through the \",e(i.code,{children:\"present\"}),\" prop. The \",e(i.code,{children:\"present\"}),\" prop allows the component to stay mounted even\\nafter its enclosing condition has been falsified, allowing for exit animations to complete before the component is\\nremoved from the DOM.\"]})]})}return{default:function(n={}){const{wrapper:a}=n.components||{};return a?e(a,{...n,children:e(_createMdxContent,{...n})}):_createMdxContent(n)}};",
        "llm": "Adding animation to Ark UI Components is as straightforward as with any other component, but keep in mind some\nconsiderations when working with exit animations with JavaScript animation libraries.\n\n## Animating with CSS\n\nThe most straightforward method to animate your elements is using CSS. You can animate both the mounting and unmounting\nphases with CSS. The latter is achievable because Ark UI Components postpones the unmounting while your animation runs.\n\nBelow is a simple example of creating a fade-in and fade-out animation using CSS keyframes:\n\n```css\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n```\n\nYou can use these keyframes to animate any element during its lifecycle. For instance, to apply the `fadeIn` animation\nwhen your `Tooltip` enters the 'open' state, and `fadeOut` when it enters the 'closed' state, you could use the\nfollowing styles:\n\n```css\n[data-scope='tooltip'][data-part='content'][data-state='open'] {\n  animation: fadeIn 300ms ease-out;\n}\n\n[data-scope='tooltip'][data-part='content'][data-state='closed'] {\n  animation: fadeOut 300ms ease-in;\n}\n```\n\n## Animating with JS Libraries\n\nThere's plenty of versatility when it comes to animating your Ark UI Elements with JavaScript libraries. Various\nlibraries such as GreenSock, anime.js, Framer Motion, and more can add a new level of interaction and feedback to your\nUI components.\n\nOne significant advantage of using Ark UI Elements is the control you have over the unmounting phase of your components.\nThis is primarily facilitated through the `present` prop. The `present` prop allows the component to stay mounted even\nafter its enclosing condition has been falsified, allowing for exit animations to complete before the component is\nremoved from the DOM.",
        "slug": "guides/animation",
        "category": "guides"
    },
    {
        "id": "closed-components",
        "title": "Closed Components",
        "description": "Learn how to create reusable components using the example of an avatar",
        "metadata": {
            "readingTime": 1,
            "wordCount": 84
        },
        "content": "<h2>Motivation</h2>\n<p>Writing a few lines of code every time you need a simple <code>Avatar</code> is tedious. Creating a dedicated component\nencapsulates logic, simplifies the API, ensures consistent usage, and maintains clean code. This approach enhances\nreusability, making the component easier to maintain and test.</p>\n<p>Here's an example of an <code>Avatar</code> component that can be used consistently across your application:</p>\n<example id=\"closed\" component=\"avatar\">\n<h2>Usage</h2>\n<p>To use the <code>Avatar</code> component, pass the <code>name</code> and <code>src</code> props as shown below:</p>\n<pre><code class=\"language-jsx\">&#x3C;Avatar name=\"Christian\" src=\"https://avatars.githubusercontent.com/u/1846056?v=4\" />\n</code></pre></example>",
        "framework": "*",
        "toc": [
            {
                "title": "Motivation",
                "url": "#motivation",
                "items": []
            },
            {
                "title": "Usage",
                "url": "#usage",
                "items": []
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:a}=arguments[0];function _createMdxContent(t){const o={a:\"a\",code:\"code\",h2:\"h2\",p:\"p\",pre:\"pre\",span:\"span\",...t.components},{Example:i}=o;return i||function(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}(\"Example\",!0),a(e,{children:[a(o.h2,{id:\"motivation\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#motivation\",children:n(o.span,{className:\"icon icon-link\"})}),\"Motivation\"]}),\"\\n\",a(o.p,{children:[\"Writing a few lines of code every time you need a simple \",n(o.code,{children:\"Avatar\"}),\" is tedious. Creating a dedicated component\\nencapsulates logic, simplifies the API, ensures consistent usage, and maintains clean code. This approach enhances\\nreusability, making the component easier to maintain and test.\"]}),\"\\n\",a(o.p,{children:[\"Here's an example of an \",n(o.code,{children:\"Avatar\"}),\" component that can be used consistently across your application:\"]}),\"\\n\",n(i,{id:\"closed\",component:\"avatar\"}),\"\\n\",a(o.h2,{id:\"usage\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#usage\",children:n(o.span,{className:\"icon icon-link\"})}),\"Usage\"]}),\"\\n\",a(o.p,{children:[\"To use the \",n(o.code,{children:\"Avatar\"}),\" component, pass the \",n(o.code,{children:\"name\"}),\" and \",n(o.code,{children:\"src\"}),\" props as shown below:\"]}),\"\\n\",n(o.pre,{children:n(o.code,{className:\"language-jsx\",children:'<Avatar name=\"Christian\" src=\"https://avatars.githubusercontent.com/u/1846056?v=4\" />\\n'})})]})}return{default:function(e={}){const{wrapper:a}=e.components||{};return a?n(a,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};",
        "llm": "## Motivation\n\nWriting a few lines of code every time you need a simple `Avatar` is tedious. Creating a dedicated component\nencapsulates logic, simplifies the API, ensures consistent usage, and maintains clean code. This approach enhances\nreusability, making the component easier to maintain and test.\n\nHere's an example of an `Avatar` component that can be used consistently across your application:\n\n<Example id=\"closed\" component=\"avatar\" />\n\n## Usage\n\nTo use the `Avatar` component, pass the `name` and `src` props as shown below:\n\n```jsx\n<Avatar name=\"Christian\" src=\"https://avatars.githubusercontent.com/u/1846056?v=4\" />\n```",
        "slug": "guides/closed-components",
        "category": "guides"
    },
    {
        "id": "collection",
        "title": "Collection",
        "description": "Working with collections in Ark UI",
        "metadata": {
            "readingTime": 2,
            "wordCount": 405
        },
        "content": "<p>Collections are used to manage a collection of some kind, like menus, select, combobox, etc. They provide\nfunctionalities such as sorting, searching, getting next or previous items, converting items to values or strings,\nchecking if an item is disabled, and more.</p>\n<h2>List Collection</h2>\n<p>A list collection is a collection that is based on an array of items. It is created by passing an array of items to the\nconstructor.</p>\n<pre><code class=\"language-ts\">import { createListCollection } from '@ark-ui/react/collection'\n\nconst collection = createListCollection({\n  items: [\n    { label: 'Apple', value: 'apple' },\n    { label: 'Banana', value: 'banana' },\n  ],\n})\n\nconsole.log(collection.items) // [{ label: 'Apple', value: 'apple' }, { label: 'Banana', value: 'banana' }]\n</code></pre>\n<h3>Converting value to item</h3>\n<p>Use the <code>find</code> or <code>findMany</code> method to convert a value to an item.</p>\n<pre><code class=\"language-ts\">const item = collection.find('banana')\n\nconsole.log(item) // { label: \"Banana\", value: \"banana\" }\n\nconst items = collection.findMany(['apple', 'banana'])\n\nconsole.log(items) // [{ label: \"Apple\", value: \"apple\" }, { label: \"Banana\", value: \"banana\" }]\n</code></pre>\n<h3>Value Traversal</h3>\n<p>Use the <code>getNextValue</code> or <code>getPreviousValue</code> method to get the next or previous item based on a value.</p>\n<pre><code class=\"language-ts\">const nextValue = collection.getNextValue('apple')\n\nconsole.log(nextValue) // banana\n\nconst previousItem = collection.getPreviousValue('banana')\n\nconsole.log(previousItem) // apple\n</code></pre>\n<p>Likewise, use the <code>firstValue</code> or <code>lastValue</code> computed properties to get the first or last item.</p>\n<pre><code class=\"language-ts\">console.log(collection.firstValue) // apple\n\nconsole.log(collection.lastValue) // banana\n</code></pre>\n<h3>Check for value existence</h3>\n<p>Use the <code>has</code> method to check if a value exists in the collection.</p>\n<pre><code class=\"language-ts\">const hasValue = collection.has('apple')\n\nconsole.log(hasValue) // true\n</code></pre>\n<h3>Working with custom objects</h3>\n<p>If you are working with custom objects, you can pass a function to the <code>itemToString</code> and <code>itemToValue</code> options to\nspecify how to convert an item to a string and a value, respectively.</p>\n<blockquote>\n<p>By default, we look for the <code>label</code> and <code>value</code> properties in the item.</p>\n</blockquote>\n<pre><code class=\"language-ts\">import { createListCollection } from '@ark-ui/react/collection'\n\nconst collection = createListCollection({\n  items: [\n    { id: 1, name: 'apple' },\n    { id: 2, name: 'banana' },\n    { id: 3, name: 'cherry' },\n  ],\n  itemToString: (item) => item.name,\n  itemToValue: (item) => item.id,\n})\n</code></pre>\n<p>To mark an item as disabled, pass a function to the <code>isItemDisabled</code> option.</p>\n<blockquote>\n<p>By default, we look for the <code>disabled</code> property in the item.</p>\n</blockquote>\n<pre><code class=\"language-ts\">import { createListCollection } from '@ark-ui/react/collection'\n\nconst collection = createListCollection({\n  items: [\n    { id: 1, name: 'apple' },\n    { id: 2, name: 'banana' },\n    { id: 3, name: 'cherry' },\n  ],\n  isItemDisabled: (item) => item.id === 2,\n})\n</code></pre>\n<h3>Reorder items</h3>\n<p>Use the <code>reorder</code> method to reorder items by passing the starting index and the ending index of the item to be moved.</p>\n<pre><code class=\"language-ts\">const fromIndex = 1 // Banana\nconst toIndex = 0 // Apple\ncollection.reorder(fromIndex, toIndex)\n\nconsole.log(collection.items) // [{ label: \"Banana\", value: \"banana\" }, { label: \"Apple\", value: \"apple\" }]\n</code></pre>",
        "framework": "*",
        "toc": [
            {
                "title": "List Collection",
                "url": "#list-collection",
                "items": [
                    {
                        "title": "Converting value to item",
                        "url": "#converting-value-to-item",
                        "items": []
                    },
                    {
                        "title": "Value Traversal",
                        "url": "#value-traversal",
                        "items": []
                    },
                    {
                        "title": "Check for value existence",
                        "url": "#check-for-value-existence",
                        "items": []
                    },
                    {
                        "title": "Working with custom objects",
                        "url": "#working-with-custom-objects",
                        "items": []
                    },
                    {
                        "title": "Reorder items",
                        "url": "#reorder-items",
                        "items": []
                    }
                ]
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:a}=arguments[0];function _createMdxContent(o){const l={a:\"a\",blockquote:\"blockquote\",code:\"code\",h2:\"h2\",h3:\"h3\",p:\"p\",pre:\"pre\",span:\"span\",...o.components};return a(e,{children:[n(l.p,{children:\"Collections are used to manage a collection of some kind, like menus, select, combobox, etc. They provide\\nfunctionalities such as sorting, searching, getting next or previous items, converting items to values or strings,\\nchecking if an item is disabled, and more.\"}),\"\\n\",a(l.h2,{id:\"list-collection\",children:[n(l.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#list-collection\",children:n(l.span,{className:\"icon icon-link\"})}),\"List Collection\"]}),\"\\n\",n(l.p,{children:\"A list collection is a collection that is based on an array of items. It is created by passing an array of items to the\\nconstructor.\"}),\"\\n\",n(l.pre,{children:n(l.code,{className:\"language-ts\",children:\"import { createListCollection } from '@ark-ui/react/collection'\\n\\nconst collection = createListCollection({\\n  items: [\\n    { label: 'Apple', value: 'apple' },\\n    { label: 'Banana', value: 'banana' },\\n  ],\\n})\\n\\nconsole.log(collection.items) // [{ label: 'Apple', value: 'apple' }, { label: 'Banana', value: 'banana' }]\\n\"})}),\"\\n\",a(l.h3,{id:\"converting-value-to-item\",children:[n(l.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#converting-value-to-item\",children:n(l.span,{className:\"icon icon-link\"})}),\"Converting value to item\"]}),\"\\n\",a(l.p,{children:[\"Use the \",n(l.code,{children:\"find\"}),\" or \",n(l.code,{children:\"findMany\"}),\" method to convert a value to an item.\"]}),\"\\n\",n(l.pre,{children:n(l.code,{className:\"language-ts\",children:'const item = collection.find(\\'banana\\')\\n\\nconsole.log(item) // { label: \"Banana\", value: \"banana\" }\\n\\nconst items = collection.findMany([\\'apple\\', \\'banana\\'])\\n\\nconsole.log(items) // [{ label: \"Apple\", value: \"apple\" }, { label: \"Banana\", value: \"banana\" }]\\n'})}),\"\\n\",a(l.h3,{id:\"value-traversal\",children:[n(l.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#value-traversal\",children:n(l.span,{className:\"icon icon-link\"})}),\"Value Traversal\"]}),\"\\n\",a(l.p,{children:[\"Use the \",n(l.code,{children:\"getNextValue\"}),\" or \",n(l.code,{children:\"getPreviousValue\"}),\" method to get the next or previous item based on a value.\"]}),\"\\n\",n(l.pre,{children:n(l.code,{className:\"language-ts\",children:\"const nextValue = collection.getNextValue('apple')\\n\\nconsole.log(nextValue) // banana\\n\\nconst previousItem = collection.getPreviousValue('banana')\\n\\nconsole.log(previousItem) // apple\\n\"})}),\"\\n\",a(l.p,{children:[\"Likewise, use the \",n(l.code,{children:\"firstValue\"}),\" or \",n(l.code,{children:\"lastValue\"}),\" computed properties to get the first or last item.\"]}),\"\\n\",n(l.pre,{children:n(l.code,{className:\"language-ts\",children:\"console.log(collection.firstValue) // apple\\n\\nconsole.log(collection.lastValue) // banana\\n\"})}),\"\\n\",a(l.h3,{id:\"check-for-value-existence\",children:[n(l.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#check-for-value-existence\",children:n(l.span,{className:\"icon icon-link\"})}),\"Check for value existence\"]}),\"\\n\",a(l.p,{children:[\"Use the \",n(l.code,{children:\"has\"}),\" method to check if a value exists in the collection.\"]}),\"\\n\",n(l.pre,{children:n(l.code,{className:\"language-ts\",children:\"const hasValue = collection.has('apple')\\n\\nconsole.log(hasValue) // true\\n\"})}),\"\\n\",a(l.h3,{id:\"working-with-custom-objects\",children:[n(l.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#working-with-custom-objects\",children:n(l.span,{className:\"icon icon-link\"})}),\"Working with custom objects\"]}),\"\\n\",a(l.p,{children:[\"If you are working with custom objects, you can pass a function to the \",n(l.code,{children:\"itemToString\"}),\" and \",n(l.code,{children:\"itemToValue\"}),\" options to\\nspecify how to convert an item to a string and a value, respectively.\"]}),\"\\n\",a(l.blockquote,{children:[\"\\n\",a(l.p,{children:[\"By default, we look for the \",n(l.code,{children:\"label\"}),\" and \",n(l.code,{children:\"value\"}),\" properties in the item.\"]}),\"\\n\"]}),\"\\n\",n(l.pre,{children:n(l.code,{className:\"language-ts\",children:\"import { createListCollection } from '@ark-ui/react/collection'\\n\\nconst collection = createListCollection({\\n  items: [\\n    { id: 1, name: 'apple' },\\n    { id: 2, name: 'banana' },\\n    { id: 3, name: 'cherry' },\\n  ],\\n  itemToString: (item) => item.name,\\n  itemToValue: (item) => item.id,\\n})\\n\"})}),\"\\n\",a(l.p,{children:[\"To mark an item as disabled, pass a function to the \",n(l.code,{children:\"isItemDisabled\"}),\" option.\"]}),\"\\n\",a(l.blockquote,{children:[\"\\n\",a(l.p,{children:[\"By default, we look for the \",n(l.code,{children:\"disabled\"}),\" property in the item.\"]}),\"\\n\"]}),\"\\n\",n(l.pre,{children:n(l.code,{className:\"language-ts\",children:\"import { createListCollection } from '@ark-ui/react/collection'\\n\\nconst collection = createListCollection({\\n  items: [\\n    { id: 1, name: 'apple' },\\n    { id: 2, name: 'banana' },\\n    { id: 3, name: 'cherry' },\\n  ],\\n  isItemDisabled: (item) => item.id === 2,\\n})\\n\"})}),\"\\n\",a(l.h3,{id:\"reorder-items\",children:[n(l.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#reorder-items\",children:n(l.span,{className:\"icon icon-link\"})}),\"Reorder items\"]}),\"\\n\",a(l.p,{children:[\"Use the \",n(l.code,{children:\"reorder\"}),\" method to reorder items by passing the starting index and the ending index of the item to be moved.\"]}),\"\\n\",n(l.pre,{children:n(l.code,{className:\"language-ts\",children:'const fromIndex = 1 // Banana\\nconst toIndex = 0 // Apple\\ncollection.reorder(fromIndex, toIndex)\\n\\nconsole.log(collection.items) // [{ label: \"Banana\", value: \"banana\" }, { label: \"Apple\", value: \"apple\" }]\\n'})})]})}return{default:function(e={}){const{wrapper:a}=e.components||{};return a?n(a,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};",
        "llm": "Collections are used to manage a collection of some kind, like menus, select, combobox, etc. They provide\nfunctionalities such as sorting, searching, getting next or previous items, converting items to values or strings,\nchecking if an item is disabled, and more.\n\n## List Collection\n\nA list collection is a collection that is based on an array of items. It is created by passing an array of items to the\nconstructor.\n\n```ts\nimport { createListCollection } from '@ark-ui/react/collection'\n\nconst collection = createListCollection({\n  items: [\n    { label: 'Apple', value: 'apple' },\n    { label: 'Banana', value: 'banana' },\n  ],\n})\n\nconsole.log(collection.items) // [{ label: 'Apple', value: 'apple' }, { label: 'Banana', value: 'banana' }]\n```\n\n### Converting value to item\n\nUse the `find` or `findMany` method to convert a value to an item.\n\n```ts\nconst item = collection.find('banana')\n\nconsole.log(item) // { label: \"Banana\", value: \"banana\" }\n\nconst items = collection.findMany(['apple', 'banana'])\n\nconsole.log(items) // [{ label: \"Apple\", value: \"apple\" }, { label: \"Banana\", value: \"banana\" }]\n```\n\n### Value Traversal\n\nUse the `getNextValue` or `getPreviousValue` method to get the next or previous item based on a value.\n\n```ts\nconst nextValue = collection.getNextValue('apple')\n\nconsole.log(nextValue) // banana\n\nconst previousItem = collection.getPreviousValue('banana')\n\nconsole.log(previousItem) // apple\n```\n\nLikewise, use the `firstValue` or `lastValue` computed properties to get the first or last item.\n\n```ts\nconsole.log(collection.firstValue) // apple\n\nconsole.log(collection.lastValue) // banana\n```\n\n### Check for value existence\n\nUse the `has` method to check if a value exists in the collection.\n\n```ts\nconst hasValue = collection.has('apple')\n\nconsole.log(hasValue) // true\n```\n\n### Working with custom objects\n\nIf you are working with custom objects, you can pass a function to the `itemToString` and `itemToValue` options to\nspecify how to convert an item to a string and a value, respectively.\n\n> By default, we look for the `label` and `value` properties in the item.\n\n```ts\nimport { createListCollection } from '@ark-ui/react/collection'\n\nconst collection = createListCollection({\n  items: [\n    { id: 1, name: 'apple' },\n    { id: 2, name: 'banana' },\n    { id: 3, name: 'cherry' },\n  ],\n  itemToString: (item) => item.name,\n  itemToValue: (item) => item.id,\n})\n```\n\nTo mark an item as disabled, pass a function to the `isItemDisabled` option.\n\n> By default, we look for the `disabled` property in the item.\n\n```ts\nimport { createListCollection } from '@ark-ui/react/collection'\n\nconst collection = createListCollection({\n  items: [\n    { id: 1, name: 'apple' },\n    { id: 2, name: 'banana' },\n    { id: 3, name: 'cherry' },\n  ],\n  isItemDisabled: (item) => item.id === 2,\n})\n```\n\n### Reorder items\n\nUse the `reorder` method to reorder items by passing the starting index and the ending index of the item to be moved.\n\n```ts\nconst fromIndex = 1 // Banana\nconst toIndex = 0 // Apple\ncollection.reorder(fromIndex, toIndex)\n\nconsole.log(collection.items) // [{ label: \"Banana\", value: \"banana\" }, { label: \"Apple\", value: \"apple\" }]\n```",
        "slug": "guides/collection",
        "category": "guides"
    },
    {
        "id": "component-state",
        "title": "Component State",
        "description": "Learn how to manage component state using Context and Provider components.",
        "metadata": {
            "readingTime": 1,
            "wordCount": 78
        },
        "content": "<h2>Context Components</h2>\n<p>Context components expose state and functions to child components. In this example, <code>Avatar.Fallback</code> renders based on\n<code>loaded</code> state.</p>\n<example id=\"context\" component=\"avatar\">\n<blockquote>\n<p><strong>Good to know (RSC)</strong>: Due to the usage of render prop, you might need to add the <code>'use client'</code> directive at the top\nof your file when using React Server Components.</p>\n</blockquote>\n<h2>Provider Components</h2>\n<p>Provider components can help coordinate state and behavior between multiple components, enabling interactions that\naren't possible with <code>Context</code> components alone.</p>\n<example id=\"root-provider\" component=\"accordion\">\n<p>See more in <a href=\"/react/examples/popover-selection\">Examples</a>.</p></example></example>",
        "framework": "*",
        "toc": [
            {
                "title": "Context Components",
                "url": "#context-components",
                "items": []
            },
            {
                "title": "Provider Components",
                "url": "#provider-components",
                "items": []
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:o}=arguments[0];function _createMdxContent(t){const c={a:\"a\",blockquote:\"blockquote\",code:\"code\",h2:\"h2\",p:\"p\",span:\"span\",strong:\"strong\",...t.components},{Example:r}=c;return r||function(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}(\"Example\",!0),o(e,{children:[o(c.h2,{id:\"context-components\",children:[n(c.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#context-components\",children:n(c.span,{className:\"icon icon-link\"})}),\"Context Components\"]}),\"\\n\",o(c.p,{children:[\"Context components expose state and functions to child components. In this example, \",n(c.code,{children:\"Avatar.Fallback\"}),\" renders based on\\n\",n(c.code,{children:\"loaded\"}),\" state.\"]}),\"\\n\",n(r,{id:\"context\",component:\"avatar\"}),\"\\n\",o(c.blockquote,{children:[\"\\n\",o(c.p,{children:[n(c.strong,{children:\"Good to know (RSC)\"}),\": Due to the usage of render prop, you might need to add the \",n(c.code,{children:\"'use client'\"}),\" directive at the top\\nof your file when using React Server Components.\"]}),\"\\n\"]}),\"\\n\",o(c.h2,{id:\"provider-components\",children:[n(c.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#provider-components\",children:n(c.span,{className:\"icon icon-link\"})}),\"Provider Components\"]}),\"\\n\",o(c.p,{children:[\"Provider components can help coordinate state and behavior between multiple components, enabling interactions that\\naren't possible with \",n(c.code,{children:\"Context\"}),\" components alone.\"]}),\"\\n\",n(r,{id:\"root-provider\",component:\"accordion\"}),\"\\n\",o(c.p,{children:[\"See more in \",n(c.a,{href:\"/react/examples/popover-selection\",children:\"Examples\"}),\".\"]})]})}return{default:function(e={}){const{wrapper:o}=e.components||{};return o?n(o,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};",
        "llm": "## Context Components\n\nContext components expose state and functions to child components. In this example, `Avatar.Fallback` renders based on\n`loaded` state.\n\n<Example id=\"context\" component=\"avatar\" />\n\n> **Good to know (RSC)**: Due to the usage of render prop, you might need to add the `'use client'` directive at the top\n> of your file when using React Server Components.\n\n## Provider Components\n\nProvider components can help coordinate state and behavior between multiple components, enabling interactions that\naren't possible with `Context` components alone.\n\n<Example id=\"root-provider\" component=\"accordion\" />\n\nSee more in [Examples](/react/examples/popover-selection).",
        "slug": "guides/component-state",
        "category": "guides"
    },
    {
        "id": "composition",
        "title": "Composition",
        "description": "Learn how to compose default components with custom elements",
        "metadata": {
            "readingTime": 1,
            "wordCount": 176
        },
        "content": "<h2>The asChild Prop</h2>\n<p>In Ark UI, the <code>asChild</code> prop lets you integrate custom components, ensuring consistent styling and behavior while\npromoting flexibility and reusability. All Ark components that render a DOM element accept the <code>asChild</code> prop.</p>\n<p>Here's an example using <code>asChild</code> to integrate a custom <code>Button</code> component within a <code>Popover</code>:</p>\n<example id=\"as-child\" component=\"popover\">\n<p>In this example, the <code>asChild</code> prop allows the <code>Button</code> to be used as the trigger for the <code>Popover</code>, inheriting its\nbehaviors from Popover.Trigger.</p>\n<h2>The Ark Factory</h2>\n<p>You can use the <code>ark</code> factory to create your own elements that work just like Ark UI components.</p>\n<example id=\"factory\" component=\"popover\">\n<p>This will produce the following HTML:</p>\n<pre><code class=\"language-html\">&#x3C;span id=\"child\" class=\"parent child\" style=\"background: red; color: blue;\">Ark UI&#x3C;/span>\n</code></pre>\n<h2>Limitations</h2>\n<p>When using the <code>asChild</code> prop, ensure you pass only a single child element. Passing multiple children may cause\nrendering issues.</p>\n<p>Certain components, such as <code>Checkbox.Root</code> or <code>RadioGroup.Item</code>, have specific requirements for their child elements.\nFor instance, they may require a label element as a child. If you change the underlying element type, ensure it remains\naccessible and functional.</p></example></example>",
        "framework": "*",
        "toc": [
            {
                "title": "The asChild Prop",
                "url": "#the-aschild-prop",
                "items": []
            },
            {
                "title": "The Ark Factory",
                "url": "#the-ark-factory",
                "items": []
            },
            {
                "title": "Limitations",
                "url": "#limitations",
                "items": []
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:i}=arguments[0];function _createMdxContent(o){const r={a:\"a\",code:\"code\",h2:\"h2\",p:\"p\",pre:\"pre\",span:\"span\",...o.components},{Example:t}=r;return t||function(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}(\"Example\",!0),i(e,{children:[i(r.h2,{id:\"the-aschild-prop\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#the-aschild-prop\",children:n(r.span,{className:\"icon icon-link\"})}),\"The asChild Prop\"]}),\"\\n\",i(r.p,{children:[\"In Ark UI, the \",n(r.code,{children:\"asChild\"}),\" prop lets you integrate custom components, ensuring consistent styling and behavior while\\npromoting flexibility and reusability. All Ark components that render a DOM element accept the \",n(r.code,{children:\"asChild\"}),\" prop.\"]}),\"\\n\",i(r.p,{children:[\"Here's an example using \",n(r.code,{children:\"asChild\"}),\" to integrate a custom \",n(r.code,{children:\"Button\"}),\" component within a \",n(r.code,{children:\"Popover\"}),\":\"]}),\"\\n\",n(t,{id:\"as-child\",component:\"popover\"}),\"\\n\",i(r.p,{children:[\"In this example, the \",n(r.code,{children:\"asChild\"}),\" prop allows the \",n(r.code,{children:\"Button\"}),\" to be used as the trigger for the \",n(r.code,{children:\"Popover\"}),\", inheriting its\\nbehaviors from Popover.Trigger.\"]}),\"\\n\",i(r.h2,{id:\"the-ark-factory\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#the-ark-factory\",children:n(r.span,{className:\"icon icon-link\"})}),\"The Ark Factory\"]}),\"\\n\",i(r.p,{children:[\"You can use the \",n(r.code,{children:\"ark\"}),\" factory to create your own elements that work just like Ark UI components.\"]}),\"\\n\",n(t,{id:\"factory\",component:\"popover\"}),\"\\n\",n(r.p,{children:\"This will produce the following HTML:\"}),\"\\n\",n(r.pre,{children:n(r.code,{className:\"language-html\",children:'<span id=\"child\" class=\"parent child\" style=\"background: red; color: blue;\">Ark UI</span>\\n'})}),\"\\n\",i(r.h2,{id:\"limitations\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#limitations\",children:n(r.span,{className:\"icon icon-link\"})}),\"Limitations\"]}),\"\\n\",i(r.p,{children:[\"When using the \",n(r.code,{children:\"asChild\"}),\" prop, ensure you pass only a single child element. Passing multiple children may cause\\nrendering issues.\"]}),\"\\n\",i(r.p,{children:[\"Certain components, such as \",n(r.code,{children:\"Checkbox.Root\"}),\" or \",n(r.code,{children:\"RadioGroup.Item\"}),\", have specific requirements for their child elements.\\nFor instance, they may require a label element as a child. If you change the underlying element type, ensure it remains\\naccessible and functional.\"]})]})}return{default:function(e={}){const{wrapper:i}=e.components||{};return i?n(i,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};",
        "llm": "## The asChild Prop\n\nIn Ark UI, the `asChild` prop lets you integrate custom components, ensuring consistent styling and behavior while\npromoting flexibility and reusability. All Ark components that render a DOM element accept the `asChild` prop.\n\nHere's an example using `asChild` to integrate a custom `Button` component within a `Popover`:\n\n<Example id=\"as-child\" component=\"popover\" />\n\nIn this example, the `asChild` prop allows the `Button` to be used as the trigger for the `Popover`, inheriting its\nbehaviors from Popover.Trigger.\n\n## The Ark Factory\n\nYou can use the `ark` factory to create your own elements that work just like Ark UI components.\n\n<Example id=\"factory\" component=\"popover\" />\n\nThis will produce the following HTML:\n\n```html\n<span id=\"child\" class=\"parent child\" style=\"background: red; color: blue;\">Ark UI</span>\n```\n\n## Limitations\n\nWhen using the `asChild` prop, ensure you pass only a single child element. Passing multiple children may cause\nrendering issues.\n\nCertain components, such as `Checkbox.Root` or `RadioGroup.Item`, have specific requirements for their child elements.\nFor instance, they may require a label element as a child. If you change the underlying element type, ensure it remains\naccessible and functional.",
        "slug": "guides/composition",
        "category": "guides"
    },
    {
        "id": "styling",
        "title": "Styling",
        "description": "Learn how to style Ark UI components.",
        "metadata": {
            "readingTime": 2,
            "wordCount": 471
        },
        "content": "<h2>Overview</h2>\n<p>Ark UI is a headless component library that works with any styling solution. It provides functional styles for elements\nlike popovers for positioning, while leaving presentation styles up to you. Some components also expose CSS variables\nthat can be used for styling or animations.</p>\n<blockquote>\n<p><strong>Tip:</strong> Looking for a ready-to-use solution? Checkout <a href=\"https://park-ui.com\">Park UI</a> for a collection of pre-designed\nstyles based on Ark UI components.</p>\n</blockquote>\n<h3>Data Attributes</h3>\n<p>Ark UI components use <code>data-scope</code> and <code>data-part</code> attributes to target specific elements within a component.\nInteractive components often include <code>data-*</code> attributes to indicate their state. For example, here's what an open\naccordion item looks like:</p>\n<pre><code class=\"language-html\">&#x3C;div data-scope=\"accordion\" data-part=\"item\" data-state=\"open\">&#x3C;/div>\n</code></pre>\n<p>For more details on each component's data attributes, refer to their respective documentation.</p>\n<h2>Styling with CSS</h2>\n<p>When styling components with CSS, you can target the data attributes assigned to each component part for easy\ncustomization.</p>\n<h3>Styling a Part</h3>\n<p>To style a specific component part, target its <code>data-scope</code> and <code>data-part</code> attributes:</p>\n<pre><code class=\"language-css\">[data-scope='accordion'][data-part='item'] {\n  border-bottom: 1px solid #e5e5e5;\n}\n</code></pre>\n<h3>Styling a State</h3>\n<p>To style a component based on its state, use the <code>data-state</code> attribute:</p>\n<pre><code class=\"language-css\">[data-scope='accordion'][data-part='item'][data-state='open'] {\n  background-color: #f5f5f5;\n}\n</code></pre>\n<blockquote>\n<p><strong>Tip:</strong> If you prefer using classes instead of data attributes, utilize the <code>class</code> or <code>className</code> prop to add custom\nclasses to Ark UI components.</p>\n</blockquote>\n<h2>Styling with Panda CSS</h2>\n<p><a href=\"https://panda-css.com\">Panda CSS</a> is a build-time CSS-in-JS framework that integrates seamlessly with Ark UI, providing\nan efficient styling solution.</p>\n<h3>Styling a part</h3>\n<p>Panda offers various ways to write styles, but in the context of Ark UI, we recommend using the <code>defineSlotRecipe</code>\nfunction to style a component with its different parts and variants.</p>\n<pre><code class=\"language-ts\">import { accordionAnatomy } from '@ark-ui/anatomy'\nimport { defineSlotRecipe } from '@pandacss/dev'\n\nexport const accordionStyles = defineSlotRecipe({\n  className: 'accordion',\n  slots: accordionAnatomy.keys(),\n  base: {\n    item: {\n      borderBottom: '1px solid #e5e5e5',\n    },\n  },\n  defaultVariants: {},\n  variants: {},\n})\n</code></pre>\n<h3>Styling a state</h3>\n<p>To style a component based on its state, you can use built in\n<a href=\"https://panda-css.com/docs/customization/conditions\">conditions</a> in Panda CSS.</p>\n<pre><code class=\"language-ts\">import { accordionAnatomy } from '@ark-ui/anatomy'\nimport { defineSlotRecipe } from '@pandacss/dev'\n\nexport const accordionStyles = defineSlotRecipe({\n  className: 'accordion',\n  slots: accordionAnatomy.keys(),\n  base: {\n    item: {\n      borderBottom: '1px solid {colors.gray.300}',\n      _open: {\n        // [!code highlight]\n        backgroundColor: 'gray.100',\n      },\n    },\n  },\n  defaultVariants: {},\n  variants: {},\n})\n</code></pre>\n<h2>Styling with Tailwind CSS</h2>\n<p><a href=\"https://tailwindcss.com/\">Tailwind CSS</a> is a utility-first CSS framework providing a flexible way to style your\ncomponents.</p>\n<h3>Styling a Part</h3>\n<p>To style a part, apply classes directly to the parts using either <code>class</code> or <code>className</code>, depending on the JavaScript\nframework.</p>\n<pre><code class=\"language-jsx\">&#x3C;Accordion.Root>\n  &#x3C;Accordion.Item className=\"border-b border-gray-300\">{/* … */}&#x3C;/Accordion.Item>\n&#x3C;/Accordion.Root>\n</code></pre>\n<h3>Styling a State</h3>\n<p>Leverage Tailwind CSS's variant selector to style a component based on its data-state attribute.</p>\n<pre><code class=\"language-jsx\">&#x3C;Accordion.Root>\n  &#x3C;Accordion.Item className=\"border-b border-gray-300 data-[state=open]:bg-gray-100\">{/* … */}&#x3C;/Accordion.Item>\n&#x3C;/Accordion.Root>\n</code></pre>",
        "framework": "*",
        "toc": [
            {
                "title": "Overview",
                "url": "#overview",
                "items": [
                    {
                        "title": "Data Attributes",
                        "url": "#data-attributes",
                        "items": []
                    }
                ]
            },
            {
                "title": "Styling with CSS",
                "url": "#styling-with-css",
                "items": [
                    {
                        "title": "Styling a Part",
                        "url": "#styling-a-part",
                        "items": []
                    },
                    {
                        "title": "Styling a State",
                        "url": "#styling-a-state",
                        "items": []
                    }
                ]
            },
            {
                "title": "Styling with Panda CSS",
                "url": "#styling-with-panda-css",
                "items": [
                    {
                        "title": "Styling a part",
                        "url": "#styling-a-part-1",
                        "items": []
                    },
                    {
                        "title": "Styling a state",
                        "url": "#styling-a-state-1",
                        "items": []
                    }
                ]
            },
            {
                "title": "Styling with Tailwind CSS",
                "url": "#styling-with-tailwind-css",
                "items": [
                    {
                        "title": "Styling a Part",
                        "url": "#styling-a-part-2",
                        "items": []
                    },
                    {
                        "title": "Styling a State",
                        "url": "#styling-a-state-2",
                        "items": []
                    }
                ]
            }
        ],
        "code": "const{Fragment:n,jsx:e,jsxs:a}=arguments[0];function _createMdxContent(t){const i={a:\"a\",blockquote:\"blockquote\",code:\"code\",h2:\"h2\",h3:\"h3\",p:\"p\",pre:\"pre\",span:\"span\",strong:\"strong\",...t.components};return a(n,{children:[a(i.h2,{id:\"overview\",children:[e(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#overview\",children:e(i.span,{className:\"icon icon-link\"})}),\"Overview\"]}),\"\\n\",e(i.p,{children:\"Ark UI is a headless component library that works with any styling solution. It provides functional styles for elements\\nlike popovers for positioning, while leaving presentation styles up to you. Some components also expose CSS variables\\nthat can be used for styling or animations.\"}),\"\\n\",a(i.blockquote,{children:[\"\\n\",a(i.p,{children:[e(i.strong,{children:\"Tip:\"}),\" Looking for a ready-to-use solution? Checkout \",e(i.a,{href:\"https://park-ui.com\",children:\"Park UI\"}),\" for a collection of pre-designed\\nstyles based on Ark UI components.\"]}),\"\\n\"]}),\"\\n\",a(i.h3,{id:\"data-attributes\",children:[e(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#data-attributes\",children:e(i.span,{className:\"icon icon-link\"})}),\"Data Attributes\"]}),\"\\n\",a(i.p,{children:[\"Ark UI components use \",e(i.code,{children:\"data-scope\"}),\" and \",e(i.code,{children:\"data-part\"}),\" attributes to target specific elements within a component.\\nInteractive components often include \",e(i.code,{children:\"data-*\"}),\" attributes to indicate their state. For example, here's what an open\\naccordion item looks like:\"]}),\"\\n\",e(i.pre,{children:e(i.code,{className:\"language-html\",children:'<div data-scope=\"accordion\" data-part=\"item\" data-state=\"open\"></div>\\n'})}),\"\\n\",e(i.p,{children:\"For more details on each component's data attributes, refer to their respective documentation.\"}),\"\\n\",a(i.h2,{id:\"styling-with-css\",children:[e(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#styling-with-css\",children:e(i.span,{className:\"icon icon-link\"})}),\"Styling with CSS\"]}),\"\\n\",e(i.p,{children:\"When styling components with CSS, you can target the data attributes assigned to each component part for easy\\ncustomization.\"}),\"\\n\",a(i.h3,{id:\"styling-a-part\",children:[e(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#styling-a-part\",children:e(i.span,{className:\"icon icon-link\"})}),\"Styling a Part\"]}),\"\\n\",a(i.p,{children:[\"To style a specific component part, target its \",e(i.code,{children:\"data-scope\"}),\" and \",e(i.code,{children:\"data-part\"}),\" attributes:\"]}),\"\\n\",e(i.pre,{children:e(i.code,{className:\"language-css\",children:\"[data-scope='accordion'][data-part='item'] {\\n  border-bottom: 1px solid #e5e5e5;\\n}\\n\"})}),\"\\n\",a(i.h3,{id:\"styling-a-state\",children:[e(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#styling-a-state\",children:e(i.span,{className:\"icon icon-link\"})}),\"Styling a State\"]}),\"\\n\",a(i.p,{children:[\"To style a component based on its state, use the \",e(i.code,{children:\"data-state\"}),\" attribute:\"]}),\"\\n\",e(i.pre,{children:e(i.code,{className:\"language-css\",children:\"[data-scope='accordion'][data-part='item'][data-state='open'] {\\n  background-color: #f5f5f5;\\n}\\n\"})}),\"\\n\",a(i.blockquote,{children:[\"\\n\",a(i.p,{children:[e(i.strong,{children:\"Tip:\"}),\" If you prefer using classes instead of data attributes, utilize the \",e(i.code,{children:\"class\"}),\" or \",e(i.code,{children:\"className\"}),\" prop to add custom\\nclasses to Ark UI components.\"]}),\"\\n\"]}),\"\\n\",a(i.h2,{id:\"styling-with-panda-css\",children:[e(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#styling-with-panda-css\",children:e(i.span,{className:\"icon icon-link\"})}),\"Styling with Panda CSS\"]}),\"\\n\",a(i.p,{children:[e(i.a,{href:\"https://panda-css.com\",children:\"Panda CSS\"}),\" is a build-time CSS-in-JS framework that integrates seamlessly with Ark UI, providing\\nan efficient styling solution.\"]}),\"\\n\",a(i.h3,{id:\"styling-a-part-1\",children:[e(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#styling-a-part-1\",children:e(i.span,{className:\"icon icon-link\"})}),\"Styling a part\"]}),\"\\n\",a(i.p,{children:[\"Panda offers various ways to write styles, but in the context of Ark UI, we recommend using the \",e(i.code,{children:\"defineSlotRecipe\"}),\"\\nfunction to style a component with its different parts and variants.\"]}),\"\\n\",e(i.pre,{children:e(i.code,{className:\"language-ts\",children:\"import { accordionAnatomy } from '@ark-ui/anatomy'\\nimport { defineSlotRecipe } from '@pandacss/dev'\\n\\nexport const accordionStyles = defineSlotRecipe({\\n  className: 'accordion',\\n  slots: accordionAnatomy.keys(),\\n  base: {\\n    item: {\\n      borderBottom: '1px solid #e5e5e5',\\n    },\\n  },\\n  defaultVariants: {},\\n  variants: {},\\n})\\n\"})}),\"\\n\",a(i.h3,{id:\"styling-a-state-1\",children:[e(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#styling-a-state-1\",children:e(i.span,{className:\"icon icon-link\"})}),\"Styling a state\"]}),\"\\n\",a(i.p,{children:[\"To style a component based on its state, you can use built in\\n\",e(i.a,{href:\"https://panda-css.com/docs/customization/conditions\",children:\"conditions\"}),\" in Panda CSS.\"]}),\"\\n\",e(i.pre,{children:e(i.code,{className:\"language-ts\",children:\"import { accordionAnatomy } from '@ark-ui/anatomy'\\nimport { defineSlotRecipe } from '@pandacss/dev'\\n\\nexport const accordionStyles = defineSlotRecipe({\\n  className: 'accordion',\\n  slots: accordionAnatomy.keys(),\\n  base: {\\n    item: {\\n      borderBottom: '1px solid {colors.gray.300}',\\n      _open: {\\n        // [!code highlight]\\n        backgroundColor: 'gray.100',\\n      },\\n    },\\n  },\\n  defaultVariants: {},\\n  variants: {},\\n})\\n\"})}),\"\\n\",a(i.h2,{id:\"styling-with-tailwind-css\",children:[e(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#styling-with-tailwind-css\",children:e(i.span,{className:\"icon icon-link\"})}),\"Styling with Tailwind CSS\"]}),\"\\n\",a(i.p,{children:[e(i.a,{href:\"https://tailwindcss.com/\",children:\"Tailwind CSS\"}),\" is a utility-first CSS framework providing a flexible way to style your\\ncomponents.\"]}),\"\\n\",a(i.h3,{id:\"styling-a-part-2\",children:[e(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#styling-a-part-2\",children:e(i.span,{className:\"icon icon-link\"})}),\"Styling a Part\"]}),\"\\n\",a(i.p,{children:[\"To style a part, apply classes directly to the parts using either \",e(i.code,{children:\"class\"}),\" or \",e(i.code,{children:\"className\"}),\", depending on the JavaScript\\nframework.\"]}),\"\\n\",e(i.pre,{children:e(i.code,{className:\"language-jsx\",children:'<Accordion.Root>\\n  <Accordion.Item className=\"border-b border-gray-300\">{/* … */}</Accordion.Item>\\n</Accordion.Root>\\n'})}),\"\\n\",a(i.h3,{id:\"styling-a-state-2\",children:[e(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#styling-a-state-2\",children:e(i.span,{className:\"icon icon-link\"})}),\"Styling a State\"]}),\"\\n\",e(i.p,{children:\"Leverage Tailwind CSS's variant selector to style a component based on its data-state attribute.\"}),\"\\n\",e(i.pre,{children:e(i.code,{className:\"language-jsx\",children:'<Accordion.Root>\\n  <Accordion.Item className=\"border-b border-gray-300 data-[state=open]:bg-gray-100\">{/* … */}</Accordion.Item>\\n</Accordion.Root>\\n'})})]})}return{default:function(n={}){const{wrapper:a}=n.components||{};return a?e(a,{...n,children:e(_createMdxContent,{...n})}):_createMdxContent(n)}};",
        "llm": "## Overview\n\nArk UI is a headless component library that works with any styling solution. It provides functional styles for elements\nlike popovers for positioning, while leaving presentation styles up to you. Some components also expose CSS variables\nthat can be used for styling or animations.\n\n> **Tip:** Looking for a ready-to-use solution? Checkout [Park UI](https://park-ui.com) for a collection of pre-designed\n> styles based on Ark UI components.\n\n### Data Attributes\n\nArk UI components use `data-scope` and `data-part` attributes to target specific elements within a component.\nInteractive components often include `data-*` attributes to indicate their state. For example, here's what an open\naccordion item looks like:\n\n```html\n<div data-scope=\"accordion\" data-part=\"item\" data-state=\"open\"></div>\n```\n\nFor more details on each component's data attributes, refer to their respective documentation.\n\n## Styling with CSS\n\nWhen styling components with CSS, you can target the data attributes assigned to each component part for easy\ncustomization.\n\n### Styling a Part\n\nTo style a specific component part, target its `data-scope` and `data-part` attributes:\n\n```css\n[data-scope='accordion'][data-part='item'] {\n  border-bottom: 1px solid #e5e5e5;\n}\n```\n\n### Styling a State\n\nTo style a component based on its state, use the `data-state` attribute:\n\n```css\n[data-scope='accordion'][data-part='item'][data-state='open'] {\n  background-color: #f5f5f5;\n}\n```\n\n> **Tip:** If you prefer using classes instead of data attributes, utilize the `class` or `className` prop to add custom\n> classes to Ark UI components.\n\n## Styling with Panda CSS\n\n[Panda CSS](https://panda-css.com) is a build-time CSS-in-JS framework that integrates seamlessly with Ark UI, providing\nan efficient styling solution.\n\n### Styling a part\n\nPanda offers various ways to write styles, but in the context of Ark UI, we recommend using the `defineSlotRecipe`\nfunction to style a component with its different parts and variants.\n\n```ts\nimport { accordionAnatomy } from '@ark-ui/anatomy'\nimport { defineSlotRecipe } from '@pandacss/dev'\n\nexport const accordionStyles = defineSlotRecipe({\n  className: 'accordion',\n  slots: accordionAnatomy.keys(),\n  base: {\n    item: {\n      borderBottom: '1px solid #e5e5e5',\n    },\n  },\n  defaultVariants: {},\n  variants: {},\n})\n```\n\n### Styling a state\n\nTo style a component based on its state, you can use built in\n[conditions](https://panda-css.com/docs/customization/conditions) in Panda CSS.\n\n```ts\nimport { accordionAnatomy } from '@ark-ui/anatomy'\nimport { defineSlotRecipe } from '@pandacss/dev'\n\nexport const accordionStyles = defineSlotRecipe({\n  className: 'accordion',\n  slots: accordionAnatomy.keys(),\n  base: {\n    item: {\n      borderBottom: '1px solid {colors.gray.300}',\n      _open: {\n        // [!code highlight]\n        backgroundColor: 'gray.100',\n      },\n    },\n  },\n  defaultVariants: {},\n  variants: {},\n})\n```\n\n## Styling with Tailwind CSS\n\n[Tailwind CSS](https://tailwindcss.com/) is a utility-first CSS framework providing a flexible way to style your\ncomponents.\n\n### Styling a Part\n\nTo style a part, apply classes directly to the parts using either `class` or `className`, depending on the JavaScript\nframework.\n\n```jsx\n<Accordion.Root>\n  <Accordion.Item className=\"border-b border-gray-300\">{/* … */}</Accordion.Item>\n</Accordion.Root>\n```\n\n### Styling a State\n\nLeverage Tailwind CSS's variant selector to style a component based on its data-state attribute.\n\n```jsx\n<Accordion.Root>\n  <Accordion.Item className=\"border-b border-gray-300 data-[state=open]:bg-gray-100\">{/* … */}</Accordion.Item>\n</Accordion.Root>\n```",
        "slug": "guides/styling",
        "category": "guides"
    },
    {
        "id": "about",
        "title": "About",
        "description": "Driven by amazing open source projects.",
        "metadata": {
            "readingTime": 1,
            "wordCount": 74
        },
        "content": "<h2>Acknowledgments</h2>\n<p>We are committed to open source and the power of collaboration. Our work has been inspired by numerous projects and\nindividuals who continually drive us to innovate and improve.</p>\n<ul>\n<li><a href=\"https://zagjs.com/\">Zag.js</a> - The foundation of this project</li>\n<li><a href=\"https://park-ui.com\">Park UI</a> - For providing the styled component demos featured in this project</li>\n<li><a href=\"https://www.radix-vue.com/\">Radix Vue</a> - For <code>useForwardPropsEmits</code>, which we re-export to build closed Vue\ncomponents</li>\n</ul>\n<h2>License</h2>\n<p>This project is licensed under the terms of the <a href=\"https://github.com/chakra-ui/ark/blob/main/LICENSE\">MIT license</a>.</p>",
        "framework": "*",
        "toc": [
            {
                "title": "Acknowledgments",
                "url": "#acknowledgments",
                "items": []
            },
            {
                "title": "License",
                "url": "#license",
                "items": []
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:i}=arguments[0];function _createMdxContent(o){const r={a:\"a\",code:\"code\",h2:\"h2\",li:\"li\",p:\"p\",span:\"span\",ul:\"ul\",...o.components};return i(e,{children:[i(r.h2,{id:\"acknowledgments\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#acknowledgments\",children:n(r.span,{className:\"icon icon-link\"})}),\"Acknowledgments\"]}),\"\\n\",n(r.p,{children:\"We are committed to open source and the power of collaboration. Our work has been inspired by numerous projects and\\nindividuals who continually drive us to innovate and improve.\"}),\"\\n\",i(r.ul,{children:[\"\\n\",i(r.li,{children:[n(r.a,{href:\"https://zagjs.com/\",children:\"Zag.js\"}),\" - The foundation of this project\"]}),\"\\n\",i(r.li,{children:[n(r.a,{href:\"https://park-ui.com\",children:\"Park UI\"}),\" - For providing the styled component demos featured in this project\"]}),\"\\n\",i(r.li,{children:[n(r.a,{href:\"https://www.radix-vue.com/\",children:\"Radix Vue\"}),\" - For \",n(r.code,{children:\"useForwardPropsEmits\"}),\", which we re-export to build closed Vue\\ncomponents\"]}),\"\\n\"]}),\"\\n\",i(r.h2,{id:\"license\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#license\",children:n(r.span,{className:\"icon icon-link\"})}),\"License\"]}),\"\\n\",i(r.p,{children:[\"This project is licensed under the terms of the \",n(r.a,{href:\"https://github.com/chakra-ui/ark/blob/main/LICENSE\",children:\"MIT license\"}),\".\"]})]})}return{default:function(e={}){const{wrapper:i}=e.components||{};return i?n(i,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};",
        "llm": "## Acknowledgments\n\nWe are committed to open source and the power of collaboration. Our work has been inspired by numerous projects and\nindividuals who continually drive us to innovate and improve.\n\n- [Zag.js](https://zagjs.com/) - The foundation of this project\n- [Park UI](https://park-ui.com) - For providing the styled component demos featured in this project\n- [Radix Vue](https://www.radix-vue.com/) - For `useForwardPropsEmits`, which we re-export to build closed Vue\n  components\n\n## License\n\nThis project is licensed under the terms of the [MIT license](https://github.com/chakra-ui/ark/blob/main/LICENSE).",
        "slug": "overview/about",
        "category": "overview"
    },
    {
        "id": "getting-started",
        "title": "Getting Started",
        "description": "A Step-by-step Guide to Using Ark UI",
        "metadata": {
            "readingTime": 1,
            "wordCount": 182
        },
        "content": "<h2>Quickstart</h2>\n<p>Running tight on schedule? No worries! Check out our quickstart examples to get started with Ark UI in seconds.</p>\n<quickstart>\n<h2>Setup Guide</h2>\n<steps>\n<step title=\"Prerequisite\" number=\"1\">\n<p>Before you start, ensure you have a proper project setup. If not, follow your preferred application framework setup\nguide and then return to this guide.</p>\n</step>\n<step title=\"Install Ark UI\" number=\"2\">\n<p>Install the Ark UI dependency using your preferred package manager.</p>\n<installcmd>\n</installcmd></step>\n<step number=\"3\" title=\"Add a component\">\n<p>In this guide, we will be adding a Slider component. Copy the following code to your project.</p>\n<example component=\"slider\" id=\"basic\">\n</example></step>\n<step number=\"4\" title=\"Style a component\">\nArk UI is a headless component library that doesn't include default styles.\nYou can leverage the `data-scope` and `data-part` attributes to style your components with custom CSS.\n<p>For example, to style a slider component, you can target its parts using these attributes:</p>\n<pre><code class=\"language-css\">/* Targets the &#x3C;Slider.Root /> */\n[data-scope='slider'][data-part='root'] {\n  display: flex;\n  flex-direction: column;\n}\n</code></pre>\n<p>Check out the <a href=\"/react/docs/guides/styling\">Styling Components guide</a> to learn more about styling components in Ark UI.</p>\n</step>\n<step number=\"5\" title=\"That&#x27;s it\">\n<p>Congratulations! You've successfully set up and styled your components using Ark UI. If you run into any issues or have\nquestions, open an issue on our <a href=\"https://github.com/chakra-ui/ark/issues/new/choose\">GitHub</a> or reach out on\n<a href=\"https://discord.gg/ww6HE5xaZ2\">Discord</a>.</p>\n<p>Happy hacking! ✌️</p>\n</step>\n</steps></quickstart>",
        "framework": "*",
        "toc": [
            {
                "title": "Quickstart",
                "url": "#quickstart",
                "items": []
            },
            {
                "title": "Setup Guide",
                "url": "#setup-guide",
                "items": []
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:t}=arguments[0];function _createMdxContent(r){const i={a:\"a\",code:\"code\",h2:\"h2\",p:\"p\",pre:\"pre\",span:\"span\",...r.components},{Example:o,InstallCmd:s,Quickstart:a,Step:c,Steps:d}=i;return o||_missingMdxReference(\"Example\",!0),s||_missingMdxReference(\"InstallCmd\",!0),a||_missingMdxReference(\"Quickstart\",!0),c||_missingMdxReference(\"Step\",!0),d||_missingMdxReference(\"Steps\",!0),t(e,{children:[t(i.h2,{id:\"quickstart\",children:[n(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#quickstart\",children:n(i.span,{className:\"icon icon-link\"})}),\"Quickstart\"]}),\"\\n\",n(i.p,{children:\"Running tight on schedule? No worries! Check out our quickstart examples to get started with Ark UI in seconds.\"}),\"\\n\",n(a,{}),\"\\n\",t(i.h2,{id:\"setup-guide\",children:[n(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#setup-guide\",children:n(i.span,{className:\"icon icon-link\"})}),\"Setup Guide\"]}),\"\\n\",t(d,{children:[n(c,{title:\"Prerequisite\",number:\"1\",children:n(i.p,{children:\"Before you start, ensure you have a proper project setup. If not, follow your preferred application framework setup\\nguide and then return to this guide.\"})}),t(c,{title:\"Install Ark UI\",number:\"2\",children:[n(i.p,{children:\"Install the Ark UI dependency using your preferred package manager.\"}),n(s,{})]}),t(c,{number:\"3\",title:\"Add a component\",children:[n(i.p,{children:\"In this guide, we will be adding a Slider component. Copy the following code to your project.\"}),n(o,{component:\"slider\",id:\"basic\"})]}),t(c,{number:\"4\",title:\"Style a component\",children:[t(i.p,{children:[\"Ark UI is a headless component library that doesn't include default styles.\\nYou can leverage the \",n(i.code,{children:\"data-scope\"}),\" and \",n(i.code,{children:\"data-part\"}),\" attributes to style your components with custom CSS.\"]}),n(i.p,{children:\"For example, to style a slider component, you can target its parts using these attributes:\"}),n(i.pre,{children:n(i.code,{className:\"language-css\",children:\"/* Targets the <Slider.Root /> */\\n[data-scope='slider'][data-part='root'] {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\"})}),t(i.p,{children:[\"Check out the \",n(i.a,{href:\"/react/docs/guides/styling\",children:\"Styling Components guide\"}),\" to learn more about styling components in Ark UI.\"]})]}),t(c,{number:\"5\",title:\"That's it\",children:[t(i.p,{children:[\"Congratulations! You've successfully set up and styled your components using Ark UI. If you run into any issues or have\\nquestions, open an issue on our \",n(i.a,{href:\"https://github.com/chakra-ui/ark/issues/new/choose\",children:\"GitHub\"}),\" or reach out on\\n\",n(i.a,{href:\"https://discord.gg/ww6HE5xaZ2\",children:\"Discord\"}),\".\"]}),n(i.p,{children:\"Happy hacking! ✌️\"})]})]})]})}return{default:function(e={}){const{wrapper:t}=e.components||{};return t?n(t,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};function _missingMdxReference(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "## Quickstart\n\nRunning tight on schedule? No worries! Check out our quickstart examples to get started with Ark UI in seconds.\n\n<Quickstart />\n\n## Setup Guide\n\n<Steps>\n<Step title=\"Prerequisite\" number=\"1\">\n\nBefore you start, ensure you have a proper project setup. If not, follow your preferred application framework setup\nguide and then return to this guide.\n\n</Step>\n<Step title=\"Install Ark UI\" number=\"2\">\n\nInstall the Ark UI dependency using your preferred package manager.\n\n<InstallCmd />\n\n</Step>\n<Step number=\"3\" title=\"Add a component\">\n\nIn this guide, we will be adding a Slider component. Copy the following code to your project.\n\n<Example component=\"slider\" id=\"basic\" />\n\n</Step>\n\n<Step number=\"4\" title=\"Style a component\">\nArk UI is a headless component library that doesn't include default styles.\nYou can leverage the `data-scope` and `data-part` attributes to style your components with custom CSS.\n\nFor example, to style a slider component, you can target its parts using these attributes:\n\n```css\n/* Targets the <Slider.Root /> */\n[data-scope='slider'][data-part='root'] {\n  display: flex;\n  flex-direction: column;\n}\n```\n\nCheck out the [Styling Components guide](/react/docs/guides/styling) to learn more about styling components in Ark UI.\n\n</Step>\n\n<Step number=\"5\" title=\"That's it\">\n\nCongratulations! You've successfully set up and styled your components using Ark UI. If you run into any issues or have\nquestions, open an issue on our [GitHub](https://github.com/chakra-ui/ark/issues/new/choose) or reach out on\n[Discord](https://discord.gg/ww6HE5xaZ2).\n\nHappy hacking! ✌️\n\n</Step>\n</Steps>",
        "slug": "overview/getting-started",
        "category": "overview"
    },
    {
        "id": "introduction",
        "title": "Introduction",
        "description": "The headless component library for a wide range of JavaScript frameworks",
        "metadata": {
            "readingTime": 1,
            "wordCount": 84
        },
        "content": "<h2>Motivation</h2>\n<p>Most popular UI component libraries are designed to work with a specific JavaScript framework. Building UI components\nthat work across different JavaScript frameworks presents significant challenges for organizations working with diverse\ntechnology stacks.</p>\n<h2>Solution</h2>\n<p>Ark UI provides components for building complex, interactive, and accessible user interfaces across multiple JavaScript\nframeworks. To achieve this, Ark UI is built on top of <a href=\"https://zagjs.com\">Zag.js</a>, a UI component library powered by\nFinite State Machines. Check out the architecture diagram below for a high-level overview.</p>\n<p><themeimage srclight=\"/images/architecture_light.svg\" srcdark=\"/images/architecture_dark.svg\" alt=\"Shows the highlevel architecture\" width=\"720\" height=\"588\"></themeimage></p>\n<h2>FAQ</h2>\n<faq></faq>",
        "framework": "*",
        "toc": [
            {
                "title": "Motivation",
                "url": "#motivation",
                "items": []
            },
            {
                "title": "Solution",
                "url": "#solution",
                "items": []
            },
            {
                "title": "FAQ",
                "url": "#faq",
                "items": []
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:i}=arguments[0];function _createMdxContent(a){const t={a:\"a\",h2:\"h2\",p:\"p\",span:\"span\",...a.components},{Faq:r,ThemeImage:o}=t;return r||_missingMdxReference(\"Faq\",!0),o||_missingMdxReference(\"ThemeImage\",!0),i(e,{children:[i(t.h2,{id:\"motivation\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#motivation\",children:n(t.span,{className:\"icon icon-link\"})}),\"Motivation\"]}),\"\\n\",n(t.p,{children:\"Most popular UI component libraries are designed to work with a specific JavaScript framework. Building UI components\\nthat work across different JavaScript frameworks presents significant challenges for organizations working with diverse\\ntechnology stacks.\"}),\"\\n\",i(t.h2,{id:\"solution\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#solution\",children:n(t.span,{className:\"icon icon-link\"})}),\"Solution\"]}),\"\\n\",i(t.p,{children:[\"Ark UI provides components for building complex, interactive, and accessible user interfaces across multiple JavaScript\\nframeworks. To achieve this, Ark UI is built on top of \",n(t.a,{href:\"https://zagjs.com\",children:\"Zag.js\"}),\", a UI component library powered by\\nFinite State Machines. Check out the architecture diagram below for a high-level overview.\"]}),\"\\n\",n(o,{srcLight:\"/images/architecture_light.svg\",srcDark:\"/images/architecture_dark.svg\",alt:\"Shows the highlevel architecture\",width:\"720\",height:\"588\"}),\"\\n\",i(t.h2,{id:\"faq\",children:[n(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#faq\",children:n(t.span,{className:\"icon icon-link\"})}),\"FAQ\"]}),\"\\n\",n(r,{})]})}return{default:function(e={}){const{wrapper:i}=e.components||{};return i?n(i,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};function _missingMdxReference(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "## Motivation\n\nMost popular UI component libraries are designed to work with a specific JavaScript framework. Building UI components\nthat work across different JavaScript frameworks presents significant challenges for organizations working with diverse\ntechnology stacks.\n\n## Solution\n\nArk UI provides components for building complex, interactive, and accessible user interfaces across multiple JavaScript\nframeworks. To achieve this, Ark UI is built on top of [Zag.js](https://zagjs.com), a UI component library powered by\nFinite State Machines. Check out the architecture diagram below for a high-level overview.\n\n<ThemeImage\n  srcLight=\"/images/architecture_light.svg\"\n  srcDark=\"/images/architecture_dark.svg\"\n  alt=\"Shows the highlevel architecture\"\n  width=\"720\"\n  height=\"588\"\n/>\n\n## FAQ\n\n<Faq />",
        "slug": "overview/introduction",
        "category": "overview"
    },
    {
        "id": "llms.txt",
        "title": "LLMs.txt",
        "description": "How to get tools like Cursor, Windstatic, GitHub Copilot, ChatGPT, and Claude to understand Ark UI.",
        "metadata": {
            "readingTime": 1,
            "wordCount": 211
        },
        "content": "<h2>What is LLMs.txt?</h2>\n<p>We support <a href=\"https://llmstxt.org/\">LLMs.txt</a> files for making the Ark UI documentation available to large language models\n(LLMs). This feature helps AI tools better understand our component library, its APIs, and usage patterns.</p>\n<h2>Available Routes</h2>\n<p>We provide several LLMs.txt routes to help AI tools access our documentation:</p>\n<ul>\n<li><a href=\"https://ark-ui.com/llms.txt\">llms.txt</a> - Contains a structured overview of all components and their documentation\nlinks</li>\n<li><a href=\"https://ark-ui.com/llms-full.txt\">llms-full.txt</a> - Provides comprehensive documentation including implementation\ndetails and examples</li>\n<li><a href=\"https://ark-ui.com/llms-react.txt\">llms-react.txt</a> - React-specific documentation and implementation details</li>\n<li><a href=\"https://ark-ui.com/llms-solid.txt\">llms-solid.txt</a> - SolidJS-specific documentation and implementation details</li>\n<li><a href=\"https://ark-ui.com/llms-vue.txt\">llms-vue.txt</a> - Vue-specific documentation and implementation details</li>\n<li><a href=\"https://ark-ui.com/llms-svelte.txt\">llms-svelte.txt</a> - Svelte-specific documentation and implementation details</li>\n</ul>\n<h2>Usage with AI Tools</h2>\n<h3>Cursor</h3>\n<p>Use the <code>@Docs</code> feature in Cursor to include the LLMs.txt files in your project. This helps Cursor provide more accurate\ncode suggestions and documentation for Ark UI components.</p>\n<p><a href=\"https://docs.cursor.com/context/@-symbols/@-docs\">Read more about @Docs in Cursor</a></p>\n<h3>Windstatic</h3>\n<p>Reference the LLMs.txt files using <code>@</code> or in your <code>.windsurfrules</code> files to enhance Windstatic's understanding of Ark UI\ncomponents.</p>\n<p><a href=\"https://docs.codeium.com/windsurf/memories#memories-and-rules\">Read more about Windstatic Memories</a></p>\n<h3>Other AI Tools</h3>\n<p>Any AI tool that supports LLMs.txt can use these routes to better understand Ark UI. Simply point your tool to any of\nthe routes above based on your framework of choice.</p>",
        "framework": "*",
        "toc": [
            {
                "title": "What is LLMs.txt?",
                "url": "#what-is-llmstxt",
                "items": []
            },
            {
                "title": "Available Routes",
                "url": "#available-routes",
                "items": []
            },
            {
                "title": "Usage with AI Tools",
                "url": "#usage-with-ai-tools",
                "items": [
                    {
                        "title": "Cursor",
                        "url": "#cursor",
                        "items": []
                    },
                    {
                        "title": "Windstatic",
                        "url": "#windstatic",
                        "items": []
                    },
                    {
                        "title": "Other AI Tools",
                        "url": "#other-ai-tools",
                        "items": []
                    }
                ]
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:t}=arguments[0];function _createMdxContent(i){const s={a:\"a\",code:\"code\",h2:\"h2\",h3:\"h3\",li:\"li\",p:\"p\",span:\"span\",ul:\"ul\",...i.components};return t(e,{children:[t(s.h2,{id:\"what-is-llmstxt\",children:[n(s.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#what-is-llmstxt\",children:n(s.span,{className:\"icon icon-link\"})}),\"What is LLMs.txt?\"]}),\"\\n\",t(s.p,{children:[\"We support \",n(s.a,{href:\"https://llmstxt.org/\",children:\"LLMs.txt\"}),\" files for making the Ark UI documentation available to large language models\\n(LLMs). This feature helps AI tools better understand our component library, its APIs, and usage patterns.\"]}),\"\\n\",t(s.h2,{id:\"available-routes\",children:[n(s.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#available-routes\",children:n(s.span,{className:\"icon icon-link\"})}),\"Available Routes\"]}),\"\\n\",n(s.p,{children:\"We provide several LLMs.txt routes to help AI tools access our documentation:\"}),\"\\n\",t(s.ul,{children:[\"\\n\",t(s.li,{children:[n(s.a,{href:\"https://ark-ui.com/llms.txt\",children:\"llms.txt\"}),\" - Contains a structured overview of all components and their documentation\\nlinks\"]}),\"\\n\",t(s.li,{children:[n(s.a,{href:\"https://ark-ui.com/llms-full.txt\",children:\"llms-full.txt\"}),\" - Provides comprehensive documentation including implementation\\ndetails and examples\"]}),\"\\n\",t(s.li,{children:[n(s.a,{href:\"https://ark-ui.com/llms-react.txt\",children:\"llms-react.txt\"}),\" - React-specific documentation and implementation details\"]}),\"\\n\",t(s.li,{children:[n(s.a,{href:\"https://ark-ui.com/llms-solid.txt\",children:\"llms-solid.txt\"}),\" - SolidJS-specific documentation and implementation details\"]}),\"\\n\",t(s.li,{children:[n(s.a,{href:\"https://ark-ui.com/llms-vue.txt\",children:\"llms-vue.txt\"}),\" - Vue-specific documentation and implementation details\"]}),\"\\n\",t(s.li,{children:[n(s.a,{href:\"https://ark-ui.com/llms-svelte.txt\",children:\"llms-svelte.txt\"}),\" - Svelte-specific documentation and implementation details\"]}),\"\\n\"]}),\"\\n\",t(s.h2,{id:\"usage-with-ai-tools\",children:[n(s.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#usage-with-ai-tools\",children:n(s.span,{className:\"icon icon-link\"})}),\"Usage with AI Tools\"]}),\"\\n\",t(s.h3,{id:\"cursor\",children:[n(s.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#cursor\",children:n(s.span,{className:\"icon icon-link\"})}),\"Cursor\"]}),\"\\n\",t(s.p,{children:[\"Use the \",n(s.code,{children:\"@Docs\"}),\" feature in Cursor to include the LLMs.txt files in your project. This helps Cursor provide more accurate\\ncode suggestions and documentation for Ark UI components.\"]}),\"\\n\",n(s.p,{children:n(s.a,{href:\"https://docs.cursor.com/context/@-symbols/@-docs\",children:\"Read more about @Docs in Cursor\"})}),\"\\n\",t(s.h3,{id:\"windstatic\",children:[n(s.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#windstatic\",children:n(s.span,{className:\"icon icon-link\"})}),\"Windstatic\"]}),\"\\n\",t(s.p,{children:[\"Reference the LLMs.txt files using \",n(s.code,{children:\"@\"}),\" or in your \",n(s.code,{children:\".windsurfrules\"}),\" files to enhance Windstatic's understanding of Ark UI\\ncomponents.\"]}),\"\\n\",n(s.p,{children:n(s.a,{href:\"https://docs.codeium.com/windsurf/memories#memories-and-rules\",children:\"Read more about Windstatic Memories\"})}),\"\\n\",t(s.h3,{id:\"other-ai-tools\",children:[n(s.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#other-ai-tools\",children:n(s.span,{className:\"icon icon-link\"})}),\"Other AI Tools\"]}),\"\\n\",n(s.p,{children:\"Any AI tool that supports LLMs.txt can use these routes to better understand Ark UI. Simply point your tool to any of\\nthe routes above based on your framework of choice.\"})]})}return{default:function(e={}){const{wrapper:t}=e.components||{};return t?n(t,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};",
        "llm": "## What is LLMs.txt?\n\nWe support [LLMs.txt](https://llmstxt.org/) files for making the Ark UI documentation available to large language models\n(LLMs). This feature helps AI tools better understand our component library, its APIs, and usage patterns.\n\n## Available Routes\n\nWe provide several LLMs.txt routes to help AI tools access our documentation:\n\n- [llms.txt](https://ark-ui.com/llms.txt) - Contains a structured overview of all components and their documentation\n  links\n- [llms-full.txt](https://ark-ui.com/llms-full.txt) - Provides comprehensive documentation including implementation\n  details and examples\n- [llms-react.txt](https://ark-ui.com/llms-react.txt) - React-specific documentation and implementation details\n- [llms-solid.txt](https://ark-ui.com/llms-solid.txt) - SolidJS-specific documentation and implementation details\n- [llms-vue.txt](https://ark-ui.com/llms-vue.txt) - Vue-specific documentation and implementation details\n- [llms-svelte.txt](https://ark-ui.com/llms-svelte.txt) - Svelte-specific documentation and implementation details\n\n## Usage with AI Tools\n\n### Cursor\n\nUse the `@Docs` feature in Cursor to include the LLMs.txt files in your project. This helps Cursor provide more accurate\ncode suggestions and documentation for Ark UI components.\n\n[Read more about @Docs in Cursor](https://docs.cursor.com/context/@-symbols/@-docs)\n\n### Windstatic\n\nReference the LLMs.txt files using `@` or in your `.windsurfrules` files to enhance Windstatic's understanding of Ark UI\ncomponents.\n\n[Read more about Windstatic Memories](https://docs.codeium.com/windsurf/memories#memories-and-rules)\n\n### Other AI Tools\n\nAny AI tool that supports LLMs.txt can use these routes to better understand Ark UI. Simply point your tool to any of\nthe routes above based on your framework of choice.",
        "slug": "overview/llms.txt",
        "category": "overview"
    },
    {
        "id": "download-trigger",
        "title": "Download Trigger",
        "description": "Trigger file downloads programmatically.",
        "metadata": {
            "readingTime": 1,
            "wordCount": 84
        },
        "content": "<h2>Motivation</h2>\n<p>The <code>DownloadTrigger</code> component provides a convenient way to programmatically trigger file downloads in web\napplications. It handles the complexities of downloading files, whether they are URLs, Blobs, or other data types.</p>\n<h2>Examples</h2>\n<h3>Basic</h3>\n<p>Pass the data you want to download to the <code>data</code> prop, and specify the <code>fileName</code> and <code>mimeType</code> of the file.</p>\n<example id=\"basic\">\n<h3>Download SVG</h3>\n<p>Here's an example of how to download an SVG file.</p>\n<example id=\"svg\">\n<h3>Promise</h3>\n<p>You can also trigger downloads from a promise that returns a <code>Blob</code>, <code>File</code>, or <code>string</code>.</p>\n<example id=\"with-promise\">\n<h2>API Reference</h2>\n<componenttypes id=\"download-trigger\"></componenttypes></example></example></example>",
        "framework": "*",
        "toc": [
            {
                "title": "Motivation",
                "url": "#motivation",
                "items": []
            },
            {
                "title": "Examples",
                "url": "#examples",
                "items": [
                    {
                        "title": "Basic",
                        "url": "#basic",
                        "items": []
                    },
                    {
                        "title": "Download SVG",
                        "url": "#download-svg",
                        "items": []
                    },
                    {
                        "title": "Promise",
                        "url": "#promise",
                        "items": []
                    }
                ]
            },
            {
                "title": "API Reference",
                "url": "#api-reference",
                "items": []
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:i}=arguments[0];function _createMdxContent(a){const o={a:\"a\",code:\"code\",h2:\"h2\",h3:\"h3\",p:\"p\",span:\"span\",...a.components},{ComponentTypes:c,Example:r}=o;return c||_missingMdxReference(\"ComponentTypes\",!0),r||_missingMdxReference(\"Example\",!0),i(e,{children:[i(o.h2,{id:\"motivation\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#motivation\",children:n(o.span,{className:\"icon icon-link\"})}),\"Motivation\"]}),\"\\n\",i(o.p,{children:[\"The \",n(o.code,{children:\"DownloadTrigger\"}),\" component provides a convenient way to programmatically trigger file downloads in web\\napplications. It handles the complexities of downloading files, whether they are URLs, Blobs, or other data types.\"]}),\"\\n\",i(o.h2,{id:\"examples\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#examples\",children:n(o.span,{className:\"icon icon-link\"})}),\"Examples\"]}),\"\\n\",i(o.h3,{id:\"basic\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#basic\",children:n(o.span,{className:\"icon icon-link\"})}),\"Basic\"]}),\"\\n\",i(o.p,{children:[\"Pass the data you want to download to the \",n(o.code,{children:\"data\"}),\" prop, and specify the \",n(o.code,{children:\"fileName\"}),\" and \",n(o.code,{children:\"mimeType\"}),\" of the file.\"]}),\"\\n\",n(r,{id:\"basic\"}),\"\\n\",i(o.h3,{id:\"download-svg\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#download-svg\",children:n(o.span,{className:\"icon icon-link\"})}),\"Download SVG\"]}),\"\\n\",n(o.p,{children:\"Here's an example of how to download an SVG file.\"}),\"\\n\",n(r,{id:\"svg\"}),\"\\n\",i(o.h3,{id:\"promise\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#promise\",children:n(o.span,{className:\"icon icon-link\"})}),\"Promise\"]}),\"\\n\",i(o.p,{children:[\"You can also trigger downloads from a promise that returns a \",n(o.code,{children:\"Blob\"}),\", \",n(o.code,{children:\"File\"}),\", or \",n(o.code,{children:\"string\"}),\".\"]}),\"\\n\",n(r,{id:\"with-promise\"}),\"\\n\",i(o.h2,{id:\"api-reference\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#api-reference\",children:n(o.span,{className:\"icon icon-link\"})}),\"API Reference\"]}),\"\\n\",n(c,{id:\"download-trigger\"})]})}return{default:function(e={}){const{wrapper:i}=e.components||{};return i?n(i,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};function _missingMdxReference(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "## Motivation\n\nThe `DownloadTrigger` component provides a convenient way to programmatically trigger file downloads in web\napplications. It handles the complexities of downloading files, whether they are URLs, Blobs, or other data types.\n\n## Examples\n\n### Basic\n\nPass the data you want to download to the `data` prop, and specify the `fileName` and `mimeType` of the file.\n\n<Example id=\"basic\" />\n\n### Download SVG\n\nHere's an example of how to download an SVG file.\n\n<Example id=\"svg\" />\n\n### Promise\n\nYou can also trigger downloads from a promise that returns a `Blob`, `File`, or `string`.\n\n<Example id=\"with-promise\" />\n\n## API Reference\n\n<ComponentTypes id=\"download-trigger\" />",
        "slug": "utilities/download-trigger",
        "category": "utilities"
    },
    {
        "id": "environment",
        "title": "Environment",
        "description": "Set up components for custom environments like iframes, Shadow DOM, or Electron.",
        "metadata": {
            "readingTime": 1,
            "wordCount": 214
        },
        "content": "<h2>Motivation</h2>\n<p>We use <a href=\"https://zagjs.com/overview/composition#custom-window-environment\">Zag.js</a> internally, which relies on DOM query\nmethods like <code>document.querySelectorAll</code> and <code>document.getElementById</code>. In custom environments like iframes, Shadow DOM,\nor Electron, these methods might not work as expected.</p>\n<p>To handle this, Ark UI includes the <code>EnvironmentProvider</code>, allowing you to set the appropriate root node or document,\nensuring correct DOM queries.</p>\n<h2>Setup</h2>\n<p>To support custom environments like an iframe, Shadow DOM or Electron, render the <code>EnvironmentProvider</code> component to\nprovide the environment context to all Ark UI components.</p>\n<example id=\"setup\">\n<h3>Usage in iframe</h3>\n<p>The <code>EnvironmentProvider</code> component will automatically detect the current environment and set the correct environment\ncontext. However, you can also manually set the <code>Document</code> like shown in this React example below:</p>\n<pre><code class=\"language-jsx\">import Frame, { FrameContextConsumer } from 'react-frame-component'\nimport { EnvironmentProvider } from '@ark-ui/react'\n\nexport const App = () => (\n  &#x3C;Frame title=\"IFrame Context\">\n    &#x3C;FrameContextConsumer>\n      {({ document }) => &#x3C;EnvironmentProvider value={document}>{/* Your App */}&#x3C;/EnvironmentProvider>}\n    &#x3C;/FrameContextConsumer>\n  &#x3C;/Frame>\n)\n</code></pre>\n<h3>Usage in Shadow DOM</h3>\n<p>Here's an example of how to set the <code>EnvironmentProvider</code>'s value with Shadow DOM in Solid.js <code>Portal</code> component.</p>\n<pre><code class=\"language-jsx\">import { EnvironmentProvider } from '@ark-ui/react'\nimport { Index, Portal } from 'solid-js/web'\n\nexport const App = () => {\n  let portalNode\n  return (\n    &#x3C;Portal ref={portalNode} useShadow={true}>\n      &#x3C;EnvironmentProvider value={() => portalNode?.shadowRoot ?? document}>{/* Your App */}&#x3C;/EnvironmentProvider>\n    &#x3C;/Portal>\n  )\n}\n</code></pre>\n<h2>Context</h2>\n<p>Use the <code>useEnvironmentContext</code> hook to access the <code>RootNode</code>, <code>Document</code>, and <code>Window</code>.</p>\n<example id=\"usage\">\n<h2>API Reference</h2>\n<componenttypes id=\"environment\"></componenttypes></example></example>",
        "framework": "*",
        "toc": [
            {
                "title": "Motivation",
                "url": "#motivation",
                "items": []
            },
            {
                "title": "Setup",
                "url": "#setup",
                "items": [
                    {
                        "title": "Usage in iframe",
                        "url": "#usage-in-iframe",
                        "items": []
                    },
                    {
                        "title": "Usage in Shadow DOM",
                        "url": "#usage-in-shadow-dom",
                        "items": []
                    }
                ]
            },
            {
                "title": "Context",
                "url": "#context",
                "items": []
            },
            {
                "title": "API Reference",
                "url": "#api-reference",
                "items": []
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:o}=arguments[0];function _createMdxContent(r){const i={a:\"a\",code:\"code\",h2:\"h2\",h3:\"h3\",p:\"p\",pre:\"pre\",span:\"span\",...r.components},{ComponentTypes:t,Example:a}=i;return t||_missingMdxReference(\"ComponentTypes\",!0),a||_missingMdxReference(\"Example\",!0),o(e,{children:[o(i.h2,{id:\"motivation\",children:[n(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#motivation\",children:n(i.span,{className:\"icon icon-link\"})}),\"Motivation\"]}),\"\\n\",o(i.p,{children:[\"We use \",n(i.a,{href:\"https://zagjs.com/overview/composition#custom-window-environment\",children:\"Zag.js\"}),\" internally, which relies on DOM query\\nmethods like \",n(i.code,{children:\"document.querySelectorAll\"}),\" and \",n(i.code,{children:\"document.getElementById\"}),\". In custom environments like iframes, Shadow DOM,\\nor Electron, these methods might not work as expected.\"]}),\"\\n\",o(i.p,{children:[\"To handle this, Ark UI includes the \",n(i.code,{children:\"EnvironmentProvider\"}),\", allowing you to set the appropriate root node or document,\\nensuring correct DOM queries.\"]}),\"\\n\",o(i.h2,{id:\"setup\",children:[n(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#setup\",children:n(i.span,{className:\"icon icon-link\"})}),\"Setup\"]}),\"\\n\",o(i.p,{children:[\"To support custom environments like an iframe, Shadow DOM or Electron, render the \",n(i.code,{children:\"EnvironmentProvider\"}),\" component to\\nprovide the environment context to all Ark UI components.\"]}),\"\\n\",n(a,{id:\"setup\"}),\"\\n\",o(i.h3,{id:\"usage-in-iframe\",children:[n(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#usage-in-iframe\",children:n(i.span,{className:\"icon icon-link\"})}),\"Usage in iframe\"]}),\"\\n\",o(i.p,{children:[\"The \",n(i.code,{children:\"EnvironmentProvider\"}),\" component will automatically detect the current environment and set the correct environment\\ncontext. However, you can also manually set the \",n(i.code,{children:\"Document\"}),\" like shown in this React example below:\"]}),\"\\n\",n(i.pre,{children:n(i.code,{className:\"language-jsx\",children:\"import Frame, { FrameContextConsumer } from 'react-frame-component'\\nimport { EnvironmentProvider } from '@ark-ui/react'\\n\\nexport const App = () => (\\n  <Frame title=\\\"IFrame Context\\\">\\n    <FrameContextConsumer>\\n      {({ document }) => <EnvironmentProvider value={document}>{/* Your App */}</EnvironmentProvider>}\\n    </FrameContextConsumer>\\n  </Frame>\\n)\\n\"})}),\"\\n\",o(i.h3,{id:\"usage-in-shadow-dom\",children:[n(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#usage-in-shadow-dom\",children:n(i.span,{className:\"icon icon-link\"})}),\"Usage in Shadow DOM\"]}),\"\\n\",o(i.p,{children:[\"Here's an example of how to set the \",n(i.code,{children:\"EnvironmentProvider\"}),\"'s value with Shadow DOM in Solid.js \",n(i.code,{children:\"Portal\"}),\" component.\"]}),\"\\n\",n(i.pre,{children:n(i.code,{className:\"language-jsx\",children:\"import { EnvironmentProvider } from '@ark-ui/react'\\nimport { Index, Portal } from 'solid-js/web'\\n\\nexport const App = () => {\\n  let portalNode\\n  return (\\n    <Portal ref={portalNode} useShadow={true}>\\n      <EnvironmentProvider value={() => portalNode?.shadowRoot ?? document}>{/* Your App */}</EnvironmentProvider>\\n    </Portal>\\n  )\\n}\\n\"})}),\"\\n\",o(i.h2,{id:\"context\",children:[n(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#context\",children:n(i.span,{className:\"icon icon-link\"})}),\"Context\"]}),\"\\n\",o(i.p,{children:[\"Use the \",n(i.code,{children:\"useEnvironmentContext\"}),\" hook to access the \",n(i.code,{children:\"RootNode\"}),\", \",n(i.code,{children:\"Document\"}),\", and \",n(i.code,{children:\"Window\"}),\".\"]}),\"\\n\",n(a,{id:\"usage\"}),\"\\n\",o(i.h2,{id:\"api-reference\",children:[n(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#api-reference\",children:n(i.span,{className:\"icon icon-link\"})}),\"API Reference\"]}),\"\\n\",n(t,{id:\"environment\"})]})}return{default:function(e={}){const{wrapper:o}=e.components||{};return o?n(o,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};function _missingMdxReference(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "## Motivation\n\nWe use [Zag.js](https://zagjs.com/overview/composition#custom-window-environment) internally, which relies on DOM query\nmethods like `document.querySelectorAll` and `document.getElementById`. In custom environments like iframes, Shadow DOM,\nor Electron, these methods might not work as expected.\n\nTo handle this, Ark UI includes the `EnvironmentProvider`, allowing you to set the appropriate root node or document,\nensuring correct DOM queries.\n\n## Setup\n\nTo support custom environments like an iframe, Shadow DOM or Electron, render the `EnvironmentProvider` component to\nprovide the environment context to all Ark UI components.\n\n<Example id=\"setup\" />\n\n### Usage in iframe\n\nThe `EnvironmentProvider` component will automatically detect the current environment and set the correct environment\ncontext. However, you can also manually set the `Document` like shown in this React example below:\n\n```jsx\nimport Frame, { FrameContextConsumer } from 'react-frame-component'\nimport { EnvironmentProvider } from '@ark-ui/react'\n\nexport const App = () => (\n  <Frame title=\"IFrame Context\">\n    <FrameContextConsumer>\n      {({ document }) => <EnvironmentProvider value={document}>{/* Your App */}</EnvironmentProvider>}\n    </FrameContextConsumer>\n  </Frame>\n)\n```\n\n### Usage in Shadow DOM\n\nHere's an example of how to set the `EnvironmentProvider`'s value with Shadow DOM in Solid.js `Portal` component.\n\n```jsx\nimport { EnvironmentProvider } from '@ark-ui/react'\nimport { Index, Portal } from 'solid-js/web'\n\nexport const App = () => {\n  let portalNode\n  return (\n    <Portal ref={portalNode} useShadow={true}>\n      <EnvironmentProvider value={() => portalNode?.shadowRoot ?? document}>{/* Your App */}</EnvironmentProvider>\n    </Portal>\n  )\n}\n```\n\n## Context\n\nUse the `useEnvironmentContext` hook to access the `RootNode`, `Document`, and `Window`.\n\n<Example id=\"usage\" />\n\n## API Reference\n\n<ComponentTypes id=\"environment\" />",
        "slug": "utilities/environment",
        "category": "utilities"
    },
    {
        "id": "focus-trap",
        "title": "Focus Trap",
        "description": "Trap focus within a specified container.",
        "metadata": {
            "readingTime": 1,
            "wordCount": 67
        },
        "content": "<h2>Motivation</h2>\n<p>Focus trapping is essential for modal interfaces and other interactive elements that require user attention.</p>\n<p>The <code>FocusTrap</code> component helps maintain accessibility by ensuring keyboard focus remains within a designated container\nuntil explicitly released.</p>\n<h2>Examples</h2>\n<example id=\"basic\">\n<h3>Autofocus</h3>\n<p>The focus trap respects elements with the <code>autofocus</code> attribute.</p>\n<example id=\"autofocus\">\n<h3>Initial Focus</h3>\n<p>Use the <code>initialFocus</code> prop to set the element that should receive initial focus when the trap is activated.</p>\n<example id=\"initial-focus\">\n<h2>API Reference</h2>\n<componenttypes id=\"focus-trap\"></componenttypes></example></example></example>",
        "framework": "*",
        "toc": [
            {
                "title": "Motivation",
                "url": "#motivation",
                "items": []
            },
            {
                "title": "Examples",
                "url": "#examples",
                "items": [
                    {
                        "title": "Autofocus",
                        "url": "#autofocus",
                        "items": []
                    },
                    {
                        "title": "Initial Focus",
                        "url": "#initial-focus",
                        "items": []
                    }
                ]
            },
            {
                "title": "API Reference",
                "url": "#api-reference",
                "items": []
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:i}=arguments[0];function _createMdxContent(a){const c={a:\"a\",code:\"code\",h2:\"h2\",h3:\"h3\",p:\"p\",span:\"span\",...a.components},{ComponentTypes:t,Example:o}=c;return t||_missingMdxReference(\"ComponentTypes\",!0),o||_missingMdxReference(\"Example\",!0),i(e,{children:[i(c.h2,{id:\"motivation\",children:[n(c.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#motivation\",children:n(c.span,{className:\"icon icon-link\"})}),\"Motivation\"]}),\"\\n\",n(c.p,{children:\"Focus trapping is essential for modal interfaces and other interactive elements that require user attention.\"}),\"\\n\",i(c.p,{children:[\"The \",n(c.code,{children:\"FocusTrap\"}),\" component helps maintain accessibility by ensuring keyboard focus remains within a designated container\\nuntil explicitly released.\"]}),\"\\n\",i(c.h2,{id:\"examples\",children:[n(c.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#examples\",children:n(c.span,{className:\"icon icon-link\"})}),\"Examples\"]}),\"\\n\",n(o,{id:\"basic\"}),\"\\n\",i(c.h3,{id:\"autofocus\",children:[n(c.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#autofocus\",children:n(c.span,{className:\"icon icon-link\"})}),\"Autofocus\"]}),\"\\n\",i(c.p,{children:[\"The focus trap respects elements with the \",n(c.code,{children:\"autofocus\"}),\" attribute.\"]}),\"\\n\",n(o,{id:\"autofocus\"}),\"\\n\",i(c.h3,{id:\"initial-focus\",children:[n(c.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#initial-focus\",children:n(c.span,{className:\"icon icon-link\"})}),\"Initial Focus\"]}),\"\\n\",i(c.p,{children:[\"Use the \",n(c.code,{children:\"initialFocus\"}),\" prop to set the element that should receive initial focus when the trap is activated.\"]}),\"\\n\",n(o,{id:\"initial-focus\"}),\"\\n\",i(c.h2,{id:\"api-reference\",children:[n(c.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#api-reference\",children:n(c.span,{className:\"icon icon-link\"})}),\"API Reference\"]}),\"\\n\",n(t,{id:\"focus-trap\"})]})}return{default:function(e={}){const{wrapper:i}=e.components||{};return i?n(i,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};function _missingMdxReference(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "## Motivation\n\nFocus trapping is essential for modal interfaces and other interactive elements that require user attention.\n\nThe `FocusTrap` component helps maintain accessibility by ensuring keyboard focus remains within a designated container\nuntil explicitly released.\n\n## Examples\n\n<Example id=\"basic\" />\n\n### Autofocus\n\nThe focus trap respects elements with the `autofocus` attribute.\n\n<Example id=\"autofocus\" />\n\n### Initial Focus\n\nUse the `initialFocus` prop to set the element that should receive initial focus when the trap is activated.\n\n<Example id=\"initial-focus\" />\n\n## API Reference\n\n<ComponentTypes id=\"focus-trap\" />",
        "slug": "utilities/focus-trap",
        "category": "utilities"
    },
    {
        "id": "format-byte",
        "title": "Format Byte",
        "description": "Used to format byte values with various options and units",
        "metadata": {
            "readingTime": 1,
            "wordCount": 96
        },
        "content": "<componentpreview id=\"FormatByte\">\n<h2>Usage</h2>\n<p>The byte formatting component extends the number formatting capabilities to handle byte-specific formatting, including\nautomatic unit conversion and display options.</p>\n<pre><code class=\"language-jsx\">import { Format } from '@ark-ui/react'\n</code></pre>\n<h2>Examples</h2>\n<h3>Basic</h3>\n<p>Use the <code>Format.Byte</code> component to format a byte value with default options.</p>\n<example component=\"format\" id=\"byte-basic\">\n<h3>Sizes</h3>\n<p>Use the <code>sizes</code> prop to specify custom byte sizes for formatting.</p>\n<example component=\"format\" id=\"byte-sizes\">\n<h3>Locale</h3>\n<p>Use the <code>locale</code> prop to format the byte value according to a specific locale.</p>\n<example component=\"format\" id=\"byte-with-locale\">\n<h3>Unit</h3>\n<p>Use the <code>unit</code> prop to specify the unit of the byte value.</p>\n<example component=\"format\" id=\"byte-with-unit\">\n<h3>Unit Display</h3>\n<p>Use the <code>unitDisplay</code> prop to specify the display of the unit.</p>\n<example component=\"format\" id=\"byte-with-unit-display\"></example></example></example></example></example></componentpreview>",
        "framework": "*",
        "toc": [
            {
                "title": "Usage",
                "url": "#usage",
                "items": []
            },
            {
                "title": "Examples",
                "url": "#examples",
                "items": [
                    {
                        "title": "Basic",
                        "url": "#basic",
                        "items": []
                    },
                    {
                        "title": "Sizes",
                        "url": "#sizes",
                        "items": []
                    },
                    {
                        "title": "Locale",
                        "url": "#locale",
                        "items": []
                    },
                    {
                        "title": "Unit",
                        "url": "#unit",
                        "items": []
                    },
                    {
                        "title": "Unit Display",
                        "url": "#unit-display",
                        "items": []
                    }
                ]
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:i}=arguments[0];function _createMdxContent(a){const o={a:\"a\",code:\"code\",h2:\"h2\",h3:\"h3\",p:\"p\",pre:\"pre\",span:\"span\",...a.components},{ComponentPreview:t,Example:c}=o;return t||_missingMdxReference(\"ComponentPreview\",!0),c||_missingMdxReference(\"Example\",!0),i(e,{children:[n(t,{id:\"FormatByte\"}),\"\\n\",i(o.h2,{id:\"usage\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#usage\",children:n(o.span,{className:\"icon icon-link\"})}),\"Usage\"]}),\"\\n\",n(o.p,{children:\"The byte formatting component extends the number formatting capabilities to handle byte-specific formatting, including\\nautomatic unit conversion and display options.\"}),\"\\n\",n(o.pre,{children:n(o.code,{className:\"language-jsx\",children:\"import { Format } from '@ark-ui/react'\\n\"})}),\"\\n\",i(o.h2,{id:\"examples\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#examples\",children:n(o.span,{className:\"icon icon-link\"})}),\"Examples\"]}),\"\\n\",i(o.h3,{id:\"basic\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#basic\",children:n(o.span,{className:\"icon icon-link\"})}),\"Basic\"]}),\"\\n\",i(o.p,{children:[\"Use the \",n(o.code,{children:\"Format.Byte\"}),\" component to format a byte value with default options.\"]}),\"\\n\",n(c,{component:\"format\",id:\"byte-basic\"}),\"\\n\",i(o.h3,{id:\"sizes\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#sizes\",children:n(o.span,{className:\"icon icon-link\"})}),\"Sizes\"]}),\"\\n\",i(o.p,{children:[\"Use the \",n(o.code,{children:\"sizes\"}),\" prop to specify custom byte sizes for formatting.\"]}),\"\\n\",n(c,{component:\"format\",id:\"byte-sizes\"}),\"\\n\",i(o.h3,{id:\"locale\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#locale\",children:n(o.span,{className:\"icon icon-link\"})}),\"Locale\"]}),\"\\n\",i(o.p,{children:[\"Use the \",n(o.code,{children:\"locale\"}),\" prop to format the byte value according to a specific locale.\"]}),\"\\n\",n(c,{component:\"format\",id:\"byte-with-locale\"}),\"\\n\",i(o.h3,{id:\"unit\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#unit\",children:n(o.span,{className:\"icon icon-link\"})}),\"Unit\"]}),\"\\n\",i(o.p,{children:[\"Use the \",n(o.code,{children:\"unit\"}),\" prop to specify the unit of the byte value.\"]}),\"\\n\",n(c,{component:\"format\",id:\"byte-with-unit\"}),\"\\n\",i(o.h3,{id:\"unit-display\",children:[n(o.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#unit-display\",children:n(o.span,{className:\"icon icon-link\"})}),\"Unit Display\"]}),\"\\n\",i(o.p,{children:[\"Use the \",n(o.code,{children:\"unitDisplay\"}),\" prop to specify the display of the unit.\"]}),\"\\n\",n(c,{component:\"format\",id:\"byte-with-unit-display\"})]})}return{default:function(e={}){const{wrapper:i}=e.components||{};return i?n(i,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};function _missingMdxReference(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "<ComponentPreview id=\"FormatByte\" />\n\n## Usage\n\nThe byte formatting component extends the number formatting capabilities to handle byte-specific formatting, including\nautomatic unit conversion and display options.\n\n```jsx\nimport { Format } from '@ark-ui/react'\n```\n\n## Examples\n\n### Basic\n\nUse the `Format.Byte` component to format a byte value with default options.\n\n<Example component=\"format\" id=\"byte-basic\" />\n\n### Sizes\n\nUse the `sizes` prop to specify custom byte sizes for formatting.\n\n<Example component=\"format\" id=\"byte-sizes\" />\n\n### Locale\n\nUse the `locale` prop to format the byte value according to a specific locale.\n\n<Example component=\"format\" id=\"byte-with-locale\" />\n\n### Unit\n\nUse the `unit` prop to specify the unit of the byte value.\n\n<Example component=\"format\" id=\"byte-with-unit\" />\n\n### Unit Display\n\nUse the `unitDisplay` prop to specify the display of the unit.\n\n<Example component=\"format\" id=\"byte-with-unit-display\" />",
        "slug": "utilities/format-byte",
        "category": "utilities"
    },
    {
        "id": "format",
        "title": "Format Number",
        "description": "Used to format numbers to a specific locale and options",
        "metadata": {
            "readingTime": 1,
            "wordCount": 125
        },
        "content": "<componentpreview id=\"FormatNumber\">\n<h2>Usage</h2>\n<p>The number formatting logic is handled by the native <code>Intl.NumberFormat</code> API and smartly cached to avoid performance\nissues when using the same locale and options.</p>\n<pre><code class=\"language-jsx\">import { Format } from '@ark-ui/react'\n</code></pre>\n<h2>Examples</h2>\n<h3>Basic</h3>\n<p>Use the <code>Format.Number</code> component to format a number with default options.</p>\n<example component=\"format\" id=\"number-basic\">\n<h3>Percentage</h3>\n<p>Use the <code>style=\"percent\"</code> prop to format the number as a percentage.</p>\n<example component=\"format\" id=\"number-with-percentage\">\n<h3>Currency</h3>\n<p>Use the <code>style=\"currency\"</code> prop along with the <code>currency</code> prop to format the number as a currency.</p>\n<example component=\"format\" id=\"number-with-currency\">\n<h3>Locale</h3>\n<p>Use the <code>locale</code> prop to format the number according to a specific locale.</p>\n<example component=\"format\" id=\"number-with-locale\">\n<h3>Unit</h3>\n<p>Use the <code>style=\"unit\"</code> prop along with the <code>unit</code> prop to format the number with a specific unit.</p>\n<example component=\"format\" id=\"number-with-unit\">\n<h3>Compact Notation</h3>\n<p>Use the <code>notation=\"compact\"</code> prop to format the number in compact notation.</p>\n<example component=\"format\" id=\"number-with-compact\"></example></example></example></example></example></example></componentpreview>",
        "framework": "*",
        "toc": [
            {
                "title": "Usage",
                "url": "#usage",
                "items": []
            },
            {
                "title": "Examples",
                "url": "#examples",
                "items": [
                    {
                        "title": "Basic",
                        "url": "#basic",
                        "items": []
                    },
                    {
                        "title": "Percentage",
                        "url": "#percentage",
                        "items": []
                    },
                    {
                        "title": "Currency",
                        "url": "#currency",
                        "items": []
                    },
                    {
                        "title": "Locale",
                        "url": "#locale",
                        "items": []
                    },
                    {
                        "title": "Unit",
                        "url": "#unit",
                        "items": []
                    },
                    {
                        "title": "Compact Notation",
                        "url": "#compact-notation",
                        "items": []
                    }
                ]
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:a}=arguments[0];function _createMdxContent(c){const i={a:\"a\",code:\"code\",h2:\"h2\",h3:\"h3\",p:\"p\",pre:\"pre\",span:\"span\",...c.components},{ComponentPreview:o,Example:r}=i;return o||_missingMdxReference(\"ComponentPreview\",!0),r||_missingMdxReference(\"Example\",!0),a(e,{children:[n(o,{id:\"FormatNumber\"}),\"\\n\",a(i.h2,{id:\"usage\",children:[n(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#usage\",children:n(i.span,{className:\"icon icon-link\"})}),\"Usage\"]}),\"\\n\",a(i.p,{children:[\"The number formatting logic is handled by the native \",n(i.code,{children:\"Intl.NumberFormat\"}),\" API and smartly cached to avoid performance\\nissues when using the same locale and options.\"]}),\"\\n\",n(i.pre,{children:n(i.code,{className:\"language-jsx\",children:\"import { Format } from '@ark-ui/react'\\n\"})}),\"\\n\",a(i.h2,{id:\"examples\",children:[n(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#examples\",children:n(i.span,{className:\"icon icon-link\"})}),\"Examples\"]}),\"\\n\",a(i.h3,{id:\"basic\",children:[n(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#basic\",children:n(i.span,{className:\"icon icon-link\"})}),\"Basic\"]}),\"\\n\",a(i.p,{children:[\"Use the \",n(i.code,{children:\"Format.Number\"}),\" component to format a number with default options.\"]}),\"\\n\",n(r,{component:\"format\",id:\"number-basic\"}),\"\\n\",a(i.h3,{id:\"percentage\",children:[n(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#percentage\",children:n(i.span,{className:\"icon icon-link\"})}),\"Percentage\"]}),\"\\n\",a(i.p,{children:[\"Use the \",n(i.code,{children:'style=\"percent\"'}),\" prop to format the number as a percentage.\"]}),\"\\n\",n(r,{component:\"format\",id:\"number-with-percentage\"}),\"\\n\",a(i.h3,{id:\"currency\",children:[n(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#currency\",children:n(i.span,{className:\"icon icon-link\"})}),\"Currency\"]}),\"\\n\",a(i.p,{children:[\"Use the \",n(i.code,{children:'style=\"currency\"'}),\" prop along with the \",n(i.code,{children:\"currency\"}),\" prop to format the number as a currency.\"]}),\"\\n\",n(r,{component:\"format\",id:\"number-with-currency\"}),\"\\n\",a(i.h3,{id:\"locale\",children:[n(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#locale\",children:n(i.span,{className:\"icon icon-link\"})}),\"Locale\"]}),\"\\n\",a(i.p,{children:[\"Use the \",n(i.code,{children:\"locale\"}),\" prop to format the number according to a specific locale.\"]}),\"\\n\",n(r,{component:\"format\",id:\"number-with-locale\"}),\"\\n\",a(i.h3,{id:\"unit\",children:[n(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#unit\",children:n(i.span,{className:\"icon icon-link\"})}),\"Unit\"]}),\"\\n\",a(i.p,{children:[\"Use the \",n(i.code,{children:'style=\"unit\"'}),\" prop along with the \",n(i.code,{children:\"unit\"}),\" prop to format the number with a specific unit.\"]}),\"\\n\",n(r,{component:\"format\",id:\"number-with-unit\"}),\"\\n\",a(i.h3,{id:\"compact-notation\",children:[n(i.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#compact-notation\",children:n(i.span,{className:\"icon icon-link\"})}),\"Compact Notation\"]}),\"\\n\",a(i.p,{children:[\"Use the \",n(i.code,{children:'notation=\"compact\"'}),\" prop to format the number in compact notation.\"]}),\"\\n\",n(r,{component:\"format\",id:\"number-with-compact\"})]})}return{default:function(e={}){const{wrapper:a}=e.components||{};return a?n(a,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};function _missingMdxReference(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "<ComponentPreview id=\"FormatNumber\" />\n\n## Usage\n\nThe number formatting logic is handled by the native `Intl.NumberFormat` API and smartly cached to avoid performance\nissues when using the same locale and options.\n\n```jsx\nimport { Format } from '@ark-ui/react'\n```\n\n## Examples\n\n### Basic\n\nUse the `Format.Number` component to format a number with default options.\n\n<Example component=\"format\" id=\"number-basic\" />\n\n### Percentage\n\nUse the `style=\"percent\"` prop to format the number as a percentage.\n\n<Example component=\"format\" id=\"number-with-percentage\" />\n\n### Currency\n\nUse the `style=\"currency\"` prop along with the `currency` prop to format the number as a currency.\n\n<Example component=\"format\" id=\"number-with-currency\" />\n\n### Locale\n\nUse the `locale` prop to format the number according to a specific locale.\n\n<Example component=\"format\" id=\"number-with-locale\" />\n\n### Unit\n\nUse the `style=\"unit\"` prop along with the `unit` prop to format the number with a specific unit.\n\n<Example component=\"format\" id=\"number-with-unit\" />\n\n### Compact Notation\n\nUse the `notation=\"compact\"` prop to format the number in compact notation.\n\n<Example component=\"format\" id=\"number-with-compact\" />",
        "slug": "utilities/format-number",
        "category": "utilities"
    },
    {
        "id": "frame",
        "title": "Frame",
        "description": "Used to render a component in an iframe",
        "metadata": {
            "readingTime": 1,
            "wordCount": 95
        },
        "content": "<componentpreview id=\"Frame\">\n<h2>Usage</h2>\n<p>The <code>Frame</code> component is used to render a component in an iframe.</p>\n<ul>\n<li>Tracks the size of the content and exposes them via css variables.</li>\n<li>Support for <code>head</code> prop to inject scripts and styles.</li>\n<li>Support for mount and unmount callbacks.</li>\n</ul>\n<pre><code class=\"language-jsx\">import { Frame } from '@ark-ui/react'\n</code></pre>\n<h2>Examples</h2>\n<h3>Basic</h3>\n<p>Wrap your component in the <code>Frame</code> component to render it in an iframe.</p>\n<example component=\"frame\" id=\"basic\">\n<h3>Injecting Script</h3>\n<p>Using the <code>onMount</code> prop, you can inject a script into the iframe.</p>\n<example component=\"frame\" id=\"script\">\n<h3>Custom src doc</h3>\n<p>Use the <code>srcDoc</code> prop to specify the HTML content of the page to use in the iframe.</p>\n<example component=\"frame\" id=\"src-doc\"></example></example></example></componentpreview>",
        "framework": "*",
        "status": "preview",
        "toc": [
            {
                "title": "Usage",
                "url": "#usage",
                "items": []
            },
            {
                "title": "Examples",
                "url": "#examples",
                "items": [
                    {
                        "title": "Basic",
                        "url": "#basic",
                        "items": []
                    },
                    {
                        "title": "Injecting Script",
                        "url": "#injecting-script",
                        "items": []
                    },
                    {
                        "title": "Custom src doc",
                        "url": "#custom-src-doc",
                        "items": []
                    }
                ]
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:i}=arguments[0];function _createMdxContent(c){const a={a:\"a\",code:\"code\",h2:\"h2\",h3:\"h3\",li:\"li\",p:\"p\",pre:\"pre\",span:\"span\",ul:\"ul\",...c.components},{ComponentPreview:r,Example:o}=a;return r||_missingMdxReference(\"ComponentPreview\",!0),o||_missingMdxReference(\"Example\",!0),i(e,{children:[n(r,{id:\"Frame\"}),\"\\n\",i(a.h2,{id:\"usage\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#usage\",children:n(a.span,{className:\"icon icon-link\"})}),\"Usage\"]}),\"\\n\",i(a.p,{children:[\"The \",n(a.code,{children:\"Frame\"}),\" component is used to render a component in an iframe.\"]}),\"\\n\",i(a.ul,{children:[\"\\n\",n(a.li,{children:\"Tracks the size of the content and exposes them via css variables.\"}),\"\\n\",i(a.li,{children:[\"Support for \",n(a.code,{children:\"head\"}),\" prop to inject scripts and styles.\"]}),\"\\n\",n(a.li,{children:\"Support for mount and unmount callbacks.\"}),\"\\n\"]}),\"\\n\",n(a.pre,{children:n(a.code,{className:\"language-jsx\",children:\"import { Frame } from '@ark-ui/react'\\n\"})}),\"\\n\",i(a.h2,{id:\"examples\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#examples\",children:n(a.span,{className:\"icon icon-link\"})}),\"Examples\"]}),\"\\n\",i(a.h3,{id:\"basic\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#basic\",children:n(a.span,{className:\"icon icon-link\"})}),\"Basic\"]}),\"\\n\",i(a.p,{children:[\"Wrap your component in the \",n(a.code,{children:\"Frame\"}),\" component to render it in an iframe.\"]}),\"\\n\",n(o,{component:\"frame\",id:\"basic\"}),\"\\n\",i(a.h3,{id:\"injecting-script\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#injecting-script\",children:n(a.span,{className:\"icon icon-link\"})}),\"Injecting Script\"]}),\"\\n\",i(a.p,{children:[\"Using the \",n(a.code,{children:\"onMount\"}),\" prop, you can inject a script into the iframe.\"]}),\"\\n\",n(o,{component:\"frame\",id:\"script\"}),\"\\n\",i(a.h3,{id:\"custom-src-doc\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#custom-src-doc\",children:n(a.span,{className:\"icon icon-link\"})}),\"Custom src doc\"]}),\"\\n\",i(a.p,{children:[\"Use the \",n(a.code,{children:\"srcDoc\"}),\" prop to specify the HTML content of the page to use in the iframe.\"]}),\"\\n\",n(o,{component:\"frame\",id:\"src-doc\"})]})}return{default:function(e={}){const{wrapper:i}=e.components||{};return i?n(i,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};function _missingMdxReference(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "<ComponentPreview id=\"Frame\" />\n\n## Usage\n\nThe `Frame` component is used to render a component in an iframe.\n\n- Tracks the size of the content and exposes them via css variables.\n- Support for `head` prop to inject scripts and styles.\n- Support for mount and unmount callbacks.\n\n```jsx\nimport { Frame } from '@ark-ui/react'\n```\n\n## Examples\n\n### Basic\n\nWrap your component in the `Frame` component to render it in an iframe.\n\n<Example component=\"frame\" id=\"basic\" />\n\n### Injecting Script\n\nUsing the `onMount` prop, you can inject a script into the iframe.\n\n<Example component=\"frame\" id=\"script\" />\n\n### Custom src doc\n\nUse the `srcDoc` prop to specify the HTML content of the page to use in the iframe.\n\n<Example component=\"frame\" id=\"src-doc\" />",
        "slug": "utilities/frame",
        "category": "utilities"
    },
    {
        "id": "highlight",
        "title": "Highlight",
        "description": "Used to emphasize specific words or phrases within a larger body of text.",
        "metadata": {
            "readingTime": 1,
            "wordCount": 141
        },
        "content": "<componentpreview id=\"Highlight\">\n<h2>Usage</h2>\n<p>The Highlight component takes a <code>text</code> prop containing the full text and a <code>query</code> prop specifying the text to\nhighlight. It then renders the text with highlighted portions wrapped in <code>&#x3C;mark></code> tags.</p>\n<example id=\"basic\">\n<h3>Multiple Queries</h3>\n<p>You can highlight multiple terms by passing an array of strings to the <code>query</code> prop.</p>\n<example id=\"multiple\">\n<h3>Case Sensitivity</h3>\n<p>By default, the highlighting is case-sensitive. Use the <code>ignoreCase</code> prop to make it case-insensitive.</p>\n<example id=\"ignore-case\">\n<h3>Match All</h3>\n<p>By default, the Highlight component matches the first occurrence of the query. To highlight all occurrences of the\nquery, set the <code>matchAll</code> prop to <code>true</code>.</p>\n<example id=\"match-all\">\n<h2>API Reference</h2>\n<componenttypes id=\"highlight\">\n<h2>Customization</h2>\n<p>The Highlight component wraps matched text in <code>&#x3C;mark></code> tags.</p>\n<pre><code class=\"language-tsx\">&#x3C;Highlight text=\"The quick brown fox jumps over the lazy fox.\" query=\"fox\" className=\"highlighted-text\" />\n</code></pre>\n<p>Style the <code>mark</code> tags using CSS to customize the appearance of highlighted text.</p>\n<pre><code class=\"language-css\">.highlighted-text {\n  background-color: yellow;\n}\n</code></pre></componenttypes></example></example></example></example></componentpreview>",
        "framework": "*",
        "toc": [
            {
                "title": "Usage",
                "url": "#usage",
                "items": [
                    {
                        "title": "Multiple Queries",
                        "url": "#multiple-queries",
                        "items": []
                    },
                    {
                        "title": "Case Sensitivity",
                        "url": "#case-sensitivity",
                        "items": []
                    },
                    {
                        "title": "Match All",
                        "url": "#match-all",
                        "items": []
                    }
                ]
            },
            {
                "title": "API Reference",
                "url": "#api-reference",
                "items": []
            },
            {
                "title": "Customization",
                "url": "#customization",
                "items": []
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:i}=arguments[0];function _createMdxContent(t){const a={a:\"a\",code:\"code\",h2:\"h2\",h3:\"h3\",p:\"p\",pre:\"pre\",span:\"span\",...t.components},{ComponentPreview:c,ComponentTypes:h,Example:r}=a;return c||_missingMdxReference(\"ComponentPreview\",!0),h||_missingMdxReference(\"ComponentTypes\",!0),r||_missingMdxReference(\"Example\",!0),i(e,{children:[n(c,{id:\"Highlight\"}),\"\\n\",i(a.h2,{id:\"usage\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#usage\",children:n(a.span,{className:\"icon icon-link\"})}),\"Usage\"]}),\"\\n\",i(a.p,{children:[\"The Highlight component takes a \",n(a.code,{children:\"text\"}),\" prop containing the full text and a \",n(a.code,{children:\"query\"}),\" prop specifying the text to\\nhighlight. It then renders the text with highlighted portions wrapped in \",n(a.code,{children:\"<mark>\"}),\" tags.\"]}),\"\\n\",n(r,{id:\"basic\"}),\"\\n\",i(a.h3,{id:\"multiple-queries\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#multiple-queries\",children:n(a.span,{className:\"icon icon-link\"})}),\"Multiple Queries\"]}),\"\\n\",i(a.p,{children:[\"You can highlight multiple terms by passing an array of strings to the \",n(a.code,{children:\"query\"}),\" prop.\"]}),\"\\n\",n(r,{id:\"multiple\"}),\"\\n\",i(a.h3,{id:\"case-sensitivity\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#case-sensitivity\",children:n(a.span,{className:\"icon icon-link\"})}),\"Case Sensitivity\"]}),\"\\n\",i(a.p,{children:[\"By default, the highlighting is case-sensitive. Use the \",n(a.code,{children:\"ignoreCase\"}),\" prop to make it case-insensitive.\"]}),\"\\n\",n(r,{id:\"ignore-case\"}),\"\\n\",i(a.h3,{id:\"match-all\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#match-all\",children:n(a.span,{className:\"icon icon-link\"})}),\"Match All\"]}),\"\\n\",i(a.p,{children:[\"By default, the Highlight component matches the first occurrence of the query. To highlight all occurrences of the\\nquery, set the \",n(a.code,{children:\"matchAll\"}),\" prop to \",n(a.code,{children:\"true\"}),\".\"]}),\"\\n\",n(r,{id:\"match-all\"}),\"\\n\",i(a.h2,{id:\"api-reference\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#api-reference\",children:n(a.span,{className:\"icon icon-link\"})}),\"API Reference\"]}),\"\\n\",n(h,{id:\"highlight\"}),\"\\n\",i(a.h2,{id:\"customization\",children:[n(a.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#customization\",children:n(a.span,{className:\"icon icon-link\"})}),\"Customization\"]}),\"\\n\",i(a.p,{children:[\"The Highlight component wraps matched text in \",n(a.code,{children:\"<mark>\"}),\" tags.\"]}),\"\\n\",n(a.pre,{children:n(a.code,{className:\"language-tsx\",children:'<Highlight text=\"The quick brown fox jumps over the lazy fox.\" query=\"fox\" className=\"highlighted-text\" />\\n'})}),\"\\n\",i(a.p,{children:[\"Style the \",n(a.code,{children:\"mark\"}),\" tags using CSS to customize the appearance of highlighted text.\"]}),\"\\n\",n(a.pre,{children:n(a.code,{className:\"language-css\",children:\".highlighted-text {\\n  background-color: yellow;\\n}\\n\"})})]})}return{default:function(e={}){const{wrapper:i}=e.components||{};return i?n(i,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};function _missingMdxReference(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "<ComponentPreview id=\"Highlight\" />\n\n## Usage\n\nThe Highlight component takes a `text` prop containing the full text and a `query` prop specifying the text to\nhighlight. It then renders the text with highlighted portions wrapped in `<mark>` tags.\n\n<Example id=\"basic\" />\n\n### Multiple Queries\n\nYou can highlight multiple terms by passing an array of strings to the `query` prop.\n\n<Example id=\"multiple\" />\n\n### Case Sensitivity\n\nBy default, the highlighting is case-sensitive. Use the `ignoreCase` prop to make it case-insensitive.\n\n<Example id=\"ignore-case\" />\n\n### Match All\n\nBy default, the Highlight component matches the first occurrence of the query. To highlight all occurrences of the\nquery, set the `matchAll` prop to `true`.\n\n<Example id=\"match-all\" />\n\n## API Reference\n\n<ComponentTypes id=\"highlight\" />\n\n## Customization\n\nThe Highlight component wraps matched text in `<mark>` tags.\n\n```tsx\n<Highlight text=\"The quick brown fox jumps over the lazy fox.\" query=\"fox\" className=\"highlighted-text\" />\n```\n\nStyle the `mark` tags using CSS to customize the appearance of highlighted text.\n\n```css\n.highlighted-text {\n  background-color: yellow;\n}\n```",
        "slug": "utilities/highlight",
        "category": "utilities"
    },
    {
        "id": "locale",
        "title": "Locale",
        "description": "Locale provider for setting the locale and direction of the app.",
        "metadata": {
            "readingTime": 1,
            "wordCount": 56
        },
        "content": "<h2>Setup</h2>\n<p>The <code>LocaleProvider</code> component sets the locale for your app, formatting dates, numbers, and other locale-specific data.</p>\n<blockquote>\n<p><strong>Note:</strong> If no <code>LocaleProvider</code> is setup, the default locale for the app will be <code>en-US</code> and therefore the direction\nwill be <code>ltr</code>.</p>\n</blockquote>\n<example id=\"setup\">\n<h2>Usage</h2>\n<p>To access the current locale and direction settings, use the <code>useLocaleContext</code> hook.</p>\n<example id=\"usage\">\n<h2>API Reference</h2>\n<componenttypes id=\"locale\"></componenttypes></example></example>",
        "framework": "*",
        "toc": [
            {
                "title": "Setup",
                "url": "#setup",
                "items": []
            },
            {
                "title": "Usage",
                "url": "#usage",
                "items": []
            },
            {
                "title": "API Reference",
                "url": "#api-reference",
                "items": []
            }
        ],
        "code": "const{Fragment:e,jsx:n,jsxs:o}=arguments[0];function _createMdxContent(c){const r={a:\"a\",blockquote:\"blockquote\",code:\"code\",h2:\"h2\",p:\"p\",span:\"span\",strong:\"strong\",...c.components},{ComponentTypes:t,Example:i}=r;return t||_missingMdxReference(\"ComponentTypes\",!0),i||_missingMdxReference(\"Example\",!0),o(e,{children:[o(r.h2,{id:\"setup\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#setup\",children:n(r.span,{className:\"icon icon-link\"})}),\"Setup\"]}),\"\\n\",o(r.p,{children:[\"The \",n(r.code,{children:\"LocaleProvider\"}),\" component sets the locale for your app, formatting dates, numbers, and other locale-specific data.\"]}),\"\\n\",o(r.blockquote,{children:[\"\\n\",o(r.p,{children:[n(r.strong,{children:\"Note:\"}),\" If no \",n(r.code,{children:\"LocaleProvider\"}),\" is setup, the default locale for the app will be \",n(r.code,{children:\"en-US\"}),\" and therefore the direction\\nwill be \",n(r.code,{children:\"ltr\"}),\".\"]}),\"\\n\"]}),\"\\n\",n(i,{id:\"setup\"}),\"\\n\",o(r.h2,{id:\"usage\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#usage\",children:n(r.span,{className:\"icon icon-link\"})}),\"Usage\"]}),\"\\n\",o(r.p,{children:[\"To access the current locale and direction settings, use the \",n(r.code,{children:\"useLocaleContext\"}),\" hook.\"]}),\"\\n\",n(i,{id:\"usage\"}),\"\\n\",o(r.h2,{id:\"api-reference\",children:[n(r.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#api-reference\",children:n(r.span,{className:\"icon icon-link\"})}),\"API Reference\"]}),\"\\n\",n(t,{id:\"locale\"})]})}return{default:function(e={}){const{wrapper:o}=e.components||{};return o?n(o,{...e,children:n(_createMdxContent,{...e})}):_createMdxContent(e)}};function _missingMdxReference(e,n){throw new Error(\"Expected \"+(n?\"component\":\"object\")+\" `\"+e+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "## Setup\n\nThe `LocaleProvider` component sets the locale for your app, formatting dates, numbers, and other locale-specific data.\n\n> **Note:** If no `LocaleProvider` is setup, the default locale for the app will be `en-US` and therefore the direction\n> will be `ltr`.\n\n<Example id=\"setup\" />\n\n## Usage\n\nTo access the current locale and direction settings, use the `useLocaleContext` hook.\n\n<Example id=\"usage\" />\n\n## API Reference\n\n<ComponentTypes id=\"locale\" />",
        "slug": "utilities/locale",
        "category": "utilities"
    },
    {
        "id": "presence",
        "title": "Presence",
        "description": "Helps control the rendering and unmounting of your content based on a given state.",
        "metadata": {
            "readingTime": 1,
            "wordCount": 121
        },
        "content": "<h2>Examples</h2>\n<p>By default the child component starts out as hidden and remains hidden after the <code>present</code> state is toggled off. This is\nuseful for situations where the element needs to be hidden initially and continue to stay hidden after its presence is\nno longer required.</p>\n<example id=\"basic\">\n<h3>Lazy Mount</h3>\n<p>To delay the mounting of a child component until the <code>present</code> prop is set to true, use the <code>lazyMount</code> prop:</p>\n<example id=\"lazy-mount\">\n<h3>Unmount on Exit</h3>\n<p>To remove the child component from the DOM when it's not present, use the <code>unmountOnExit</code> prop:</p>\n<example id=\"unmount-on-exit\">\n<h3>Combining Lazy Mount and Unmount on Exit</h3>\n<p>Both <code>lazyMount</code> and <code>unmountOnExit</code> can be combined for a component to be mounted only when it's present and to be\nunmounted when it's no longer present:</p>\n<example id=\"lazy-mount-and-unmount-on-exit\">\n<h2>API Reference</h2>\n<componenttypes id=\"presence\"></componenttypes></example></example></example></example>",
        "framework": "*",
        "toc": [
            {
                "title": "Examples",
                "url": "#examples",
                "items": [
                    {
                        "title": "Lazy Mount",
                        "url": "#lazy-mount",
                        "items": []
                    },
                    {
                        "title": "Unmount on Exit",
                        "url": "#unmount-on-exit",
                        "items": []
                    },
                    {
                        "title": "Combining Lazy Mount and Unmount on Exit",
                        "url": "#combining-lazy-mount-and-unmount-on-exit",
                        "items": []
                    }
                ]
            },
            {
                "title": "API Reference",
                "url": "#api-reference",
                "items": []
            }
        ],
        "code": "const{Fragment:n,jsx:e,jsxs:o}=arguments[0];function _createMdxContent(i){const t={a:\"a\",code:\"code\",h2:\"h2\",h3:\"h3\",p:\"p\",span:\"span\",...i.components},{ComponentTypes:a,Example:c}=t;return a||_missingMdxReference(\"ComponentTypes\",!0),c||_missingMdxReference(\"Example\",!0),o(n,{children:[o(t.h2,{id:\"examples\",children:[e(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#examples\",children:e(t.span,{className:\"icon icon-link\"})}),\"Examples\"]}),\"\\n\",o(t.p,{children:[\"By default the child component starts out as hidden and remains hidden after the \",e(t.code,{children:\"present\"}),\" state is toggled off. This is\\nuseful for situations where the element needs to be hidden initially and continue to stay hidden after its presence is\\nno longer required.\"]}),\"\\n\",e(c,{id:\"basic\"}),\"\\n\",o(t.h3,{id:\"lazy-mount\",children:[e(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#lazy-mount\",children:e(t.span,{className:\"icon icon-link\"})}),\"Lazy Mount\"]}),\"\\n\",o(t.p,{children:[\"To delay the mounting of a child component until the \",e(t.code,{children:\"present\"}),\" prop is set to true, use the \",e(t.code,{children:\"lazyMount\"}),\" prop:\"]}),\"\\n\",e(c,{id:\"lazy-mount\"}),\"\\n\",o(t.h3,{id:\"unmount-on-exit\",children:[e(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#unmount-on-exit\",children:e(t.span,{className:\"icon icon-link\"})}),\"Unmount on Exit\"]}),\"\\n\",o(t.p,{children:[\"To remove the child component from the DOM when it's not present, use the \",e(t.code,{children:\"unmountOnExit\"}),\" prop:\"]}),\"\\n\",e(c,{id:\"unmount-on-exit\"}),\"\\n\",o(t.h3,{id:\"combining-lazy-mount-and-unmount-on-exit\",children:[e(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#combining-lazy-mount-and-unmount-on-exit\",children:e(t.span,{className:\"icon icon-link\"})}),\"Combining Lazy Mount and Unmount on Exit\"]}),\"\\n\",o(t.p,{children:[\"Both \",e(t.code,{children:\"lazyMount\"}),\" and \",e(t.code,{children:\"unmountOnExit\"}),\" can be combined for a component to be mounted only when it's present and to be\\nunmounted when it's no longer present:\"]}),\"\\n\",e(c,{id:\"lazy-mount-and-unmount-on-exit\"}),\"\\n\",o(t.h2,{id:\"api-reference\",children:[e(t.a,{className:\"subheading-anchor\",\"aria-label\":\"Link to section\",href:\"#api-reference\",children:e(t.span,{className:\"icon icon-link\"})}),\"API Reference\"]}),\"\\n\",e(a,{id:\"presence\"})]})}return{default:function(n={}){const{wrapper:o}=n.components||{};return o?e(o,{...n,children:e(_createMdxContent,{...n})}):_createMdxContent(n)}};function _missingMdxReference(n,e){throw new Error(\"Expected \"+(e?\"component\":\"object\")+\" `\"+n+\"` to be defined: you likely forgot to import, pass, or provide it.\")}",
        "llm": "## Examples\n\nBy default the child component starts out as hidden and remains hidden after the `present` state is toggled off. This is\nuseful for situations where the element needs to be hidden initially and continue to stay hidden after its presence is\nno longer required.\n\n<Example id=\"basic\" />\n\n### Lazy Mount\n\nTo delay the mounting of a child component until the `present` prop is set to true, use the `lazyMount` prop:\n\n<Example id=\"lazy-mount\" />\n\n### Unmount on Exit\n\nTo remove the child component from the DOM when it's not present, use the `unmountOnExit` prop:\n\n<Example id=\"unmount-on-exit\" />\n\n### Combining Lazy Mount and Unmount on Exit\n\nBoth `lazyMount` and `unmountOnExit` can be combined for a component to be mounted only when it's present and to be\nunmounted when it's no longer present:\n\n<Example id=\"lazy-mount-and-unmount-on-exit\" />\n\n## API Reference\n\n<ComponentTypes id=\"presence\" />",
        "slug": "utilities/presence",
        "category": "utilities"
    }
]
