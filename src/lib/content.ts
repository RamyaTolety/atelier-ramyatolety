export type QuizOption = { id: string; label: string; correct?: boolean };

export type Lesson = {
  slug: string;
  title: string;
  summary: string;
  body: string[];
  practice: string;
  applyIt: string;
  quiz: {
    question: string;
    options: QuizOption[];
  };
};

export type ResourceLink = { label: string; url: string; source: string };

export type Track = {
  slug: string;
  title: string;
  tagline: string;
  category: "tool" | "medium" | "style" | "writing";
  region?: string;
  accent: "clay" | "sage" | "blush" | "gold";
  description: string;
  gettingStarted: string[];
  resources: {
    free: ResourceLink[];
    paid: ResourceLink[];
  };
  lessons: Lesson[];
};

export const tracks: Track[] = [
  {
    slug: "figma",
    title: "Figma Fundamentals",
    tagline: "Frames, components, and a clickable prototype",
    category: "tool",
    accent: "clay",
    description:
      "The essential Figma workflow, from your first frame to a prototype someone else can click through.",
    gettingStarted: [
      "Recreate one screen from an app you use daily. Copying a real, well-designed layout teaches spacing and hierarchy faster than a blank canvas.",
      "Duplicate a free file from Figma Community and take it apart layer by layer to see how it was built.",
      "Practice in short, frequent sessions (15 to 20 minutes most days) rather than long, occasional ones. Tool fluency comes from repetition.",
      "Keep a running file of components you build so you're not rebuilding the same button or card from scratch on your next project.",
    ],
    resources: {
      free: [
        { label: "Figma Learn: official tutorials", url: "https://www.figma.com/resources/learn-design/", source: "Figma" },
        { label: "Figma on YouTube", url: "https://www.youtube.com/@Figma", source: "YouTube" },
      ],
      paid: [
        { label: "Figma courses on Coursera", url: "https://www.coursera.org/courses?query=figma", source: "Coursera" },
        { label: "Figma classes on Skillshare", url: "https://www.skillshare.com/en/search?query=figma", source: "Skillshare" },
      ],
    },
    lessons: [
      {
        slug: "frames-and-auto-layout",
        title: "Frames & Auto Layout",
        summary: "Build a screen that resizes itself instead of breaking.",
        body: [
          "A frame is Figma's canvas-within-a-canvas: think of it as a piece of paper with a fixed size, like a phone screen or a poster. Everything you design lives inside one.",
          "Auto Layout turns a frame into a flexible container: give it padding, a direction (stack items vertically or horizontally), and a gap, and Figma keeps everything spaced evenly as content changes. Add a longer headline and the button below it just moves down instead of overlapping.",
          "The habit worth building early: reach for Auto Layout on almost every group of elements, even simple ones. It's the difference between a mockup that only looks right once and a design system that survives edits.",
        ],
        practice:
          "Create a 375x600 frame, add a heading and a button, wrap them in Auto Layout with 16px padding and a 12px gap, then lengthen the heading text and watch the button reflow.",
        applyIt:
          "Design a simple card (image placeholder, title, one line of body text) using Auto Layout so it grows cleanly when you swap in a longer title.",
        quiz: {
          question: "What does Auto Layout primarily do for a frame?",
          options: [
            { id: "a", label: "Automatically picks a color palette" },
            { id: "b", label: "Keeps spacing consistent as content changes size", correct: true },
            { id: "c", label: "Exports the frame as a PNG" },
            { id: "d", label: "Locks the frame so it can't be edited" },
          ],
        },
      },
      {
        slug: "components-and-variants",
        title: "Components & Variants",
        summary: "Build one button, reuse it everywhere, and keep it in sync.",
        body: [
          "A component is a master version of an element (a button, a card, an icon) that you can place anywhere as an 'instance'. Edit the master, and every instance updates with it. This is how one small fix propagates across fifty screens instead of fifty manual edits.",
          "Variants group related components, such as a button's default, hover, and disabled states, or small, medium, and large sizes, into a single component with switchable properties, so anyone using it picks a state from a dropdown instead of hunting for the right layer.",
          "The payoff shows up fast: once your buttons, inputs, and cards are components, redesigning a screen becomes an act of assembly, not redrawing.",
        ],
        practice:
          "Turn a button you designed into a component, then create two variants of it: 'default' and 'disabled' (lower opacity, no shadow).",
        applyIt:
          "Build a small set of 3 components (button, input field, tag chip) and assemble a login form using only instances of them.",
        quiz: {
          question: "If you edit a component's master, what happens to its instances?",
          options: [
            { id: "a", label: "Nothing, instances are frozen copies" },
            { id: "b", label: "They update automatically to match", correct: true },
            { id: "c", label: "They get deleted" },
            { id: "d", label: "You have to manually re-place each one" },
          ],
        },
      },
      {
        slug: "prototyping-a-click-through",
        title: "Prototyping a Click-Through",
        summary: "Wire frames together so a reviewer can actually click around.",
        body: [
          "Prototyping mode lets you connect frames with interactions: click this button, navigate to that screen. It turns a stack of static images into something that feels like a real app for testing and demos.",
          "Start simple: connect a 'Sign in' button to a home screen, and a back arrow or nav bar item back to where it came from. Use 'Smart Animate' between similar frames (like a tab switch) for a transition that feels native instead of an abrupt jump cut.",
          "A good prototype answers one question: can someone unfamiliar with the design get through the core flow without you explaining it out loud?",
        ],
        practice:
          "Connect three frames into a flow (home, then detail, then confirmation) with at least one interaction on each, then hit Present and click through it yourself.",
        applyIt:
          "Prototype the full loop of a small flow you care about (a signup, a checkout, an onboarding) and send the Present link to a friend to test cold.",
        quiz: {
          question: "What's the main purpose of Figma's Prototyping mode?",
          options: [
            { id: "a", label: "To generate production code" },
            { id: "b", label: "To connect frames into a clickable flow", correct: true },
            { id: "c", label: "To compress image file sizes" },
            { id: "d", label: "To check color contrast ratios" },
          ],
        },
      },
    ],
  },
  {
    slug: "canva",
    title: "Canva Quickstart",
    tagline: "Templates, type pairing, and clean exports",
    category: "tool",
    accent: "gold",
    description:
      "Get from blank canvas to a polished, on-brand graphic fast, using Canva's templates and brand tools well instead of fighting them.",
    gettingStarted: [
      "Set up a Brand Kit on day one, even for personal projects. It saves the most time of any single habit in Canva.",
      "Remix three templates a week instead of starting from scratch. You'll absorb layout patterns without noticing.",
      "Keep a swipe file (a folder of graphics you admire) and pull specific choices from it: a font pairing, a color combo, a layout.",
      "Export and actually view your work at the size it will be seen (a phone screen, a printed flyer) before calling it done.",
    ],
    resources: {
      free: [
        { label: "Canva's official learn hub", url: "https://www.canva.com/learn/", source: "Canva" },
        { label: "Canva on YouTube", url: "https://www.youtube.com/@canva", source: "YouTube" },
      ],
      paid: [
        { label: "Canva courses on Skillshare", url: "https://www.skillshare.com/en/search?query=canva", source: "Skillshare" },
        { label: "Canva courses on Udemy", url: "https://www.udemy.com/courses/search/?q=canva", source: "Udemy" },
      ],
    },
    lessons: [
      {
        slug: "templates-and-brand-kits",
        title: "Templates & Brand Kits",
        summary: "Start from a strong layout instead of a blank page.",
        body: [
          "Canva's real strength isn't the editor. It's the template library. Searching by the format you need (Instagram post, resume, presentation) gets you a professionally spaced starting point, which matters more than any single design skill when you're moving fast.",
          "A Brand Kit stores your colors, fonts, and logo once so every new design can pull from it instead of you re-picking a hex code each time. Setting this up for even a personal project (2 to 3 colors, 2 fonts) pays for itself after the third design.",
          "Treat templates as scaffolding to edit heavily, not a finish line: swap the stock photo, tighten the copy, and change at least one structural thing so it doesn't read as 'generic template'.",
        ],
        practice:
          "Set up a Brand Kit with two colors and a heading and body font pair, then apply it to a template.",
        applyIt:
          "Take one template and customize it enough (photo, copy, one layout tweak) that someone couldn't find the original by searching Canva's library.",
        quiz: {
          question: "What's the main benefit of a Brand Kit?",
          options: [
            { id: "a", label: "It makes your fonts load faster" },
            { id: "b", label: "It reuses your colors and fonts across designs without re-picking them", correct: true },
            { id: "c", label: "It automatically writes your copy" },
            { id: "d", label: "It's required to export a design" },
          ],
        },
      },
      {
        slug: "typography-pairing",
        title: "Typography Pairing",
        summary: "Two fonts, one job each: headline and body.",
        body: [
          "The most common typography mistake is using three or more fonts. A reliable pairing formula: one expressive font for headlines (a serif or display font with personality) and one quiet, highly readable font for body text (a clean sans-serif).",
          "Contrast, not similarity, is what makes a pairing work: a bold display headline next to a light, simple body font reads as intentional. Two similar-weight sans-serifs next to each other often just looks like a mistake.",
          "Size and weight do a lot of the hierarchy work before color ever needs to: a big bold headline, a medium-weight subhead, and regular-weight body text already guides the eye in the right order.",
        ],
        practice:
          "Pick one display font and one body font from Canva's library and apply them consistently across a 3-slide mini deck.",
        applyIt:
          "Redesign a plain text announcement using only two fonts and clear size hierarchy. No color changes are needed to make it readable.",
        quiz: {
          question: "A common, reliable typography rule of thumb is:",
          options: [
            { id: "a", label: "Use as many fonts as fit on the page" },
            { id: "b", label: "One expressive font for headlines, one quiet font for body text", correct: true },
            { id: "c", label: "Always use the same font size everywhere" },
            { id: "d", label: "Never use bold text" },
          ],
        },
      },
      {
        slug: "exporting-for-social",
        title: "Exporting for Social",
        summary: "Right size, right format, no surprises on upload.",
        body: [
          "Different platforms crop and compress differently: an Instagram post, a story, and a LinkedIn banner all need different dimensions. Starting from the correct preset in Canva avoids the awkward re-crop after the fact.",
          "For static graphics, PNG preserves text sharpness and transparency; JPG is smaller but can blur fine text at high compression. For anything with a lot of text, export PNG.",
          "Always preview at actual size before posting. Text that looks fine zoomed in on your editor can be unreadable as a thumbnail in a feed.",
        ],
        practice:
          "Export the same design as both PNG and JPG and compare file size and text sharpness at 100% zoom.",
        applyIt:
          "Resize one design into two different platform presets (Instagram post and story) and adjust the layout so nothing important gets cropped.",
        quiz: {
          question: "For a graphic with a lot of small text, which export format usually holds up better?",
          options: [
            { id: "a", label: "JPG, always" },
            { id: "b", label: "PNG", correct: true },
            { id: "c", label: "It never matters" },
            { id: "d", label: "GIF" },
          ],
        },
      },
    ],
  },
  {
    slug: "paper-art",
    title: "Paper Art & Collage",
    tagline: "Cutting, tearing, and layering as a design language",
    category: "medium",
    accent: "sage",
    description:
      "Build images out of torn edges, clean cuts, and layered depth. No drawing skill is required to start.",
    gettingStarted: [
      "Work from a small, deliberate paper stash (5 to 8 colors and a couple of textures) instead of hoarding scraps. Constraint makes composition decisions easier.",
      "Cut or tear more shapes than you think you need, then edit down. Having options on the table beats committing to the first shape you make.",
      "Dry-place everything before gluing anything. Composition mistakes are easy to fix before adhesive, expensive to fix after.",
      "Photograph your work in raking light (a lamp held at a low angle) to see the physical texture that flat scans miss.",
    ],
    resources: {
      free: [
        { label: "Wikipedia: Collage", url: "https://en.wikipedia.org/wiki/Collage", source: "Wikipedia" },
        { label: "Wikipedia: Kirigami", url: "https://en.wikipedia.org/wiki/Kirigami", source: "Wikipedia" },
      ],
      paid: [
        { label: "Paper art courses on Domestika", url: "https://www.domestika.org/en/search?query=paper+art", source: "Domestika" },
        { label: "Collage courses on Skillshare", url: "https://www.skillshare.com/en/search?query=collage", source: "Skillshare" },
      ],
    },
    lessons: [
      {
        slug: "torn-paper-collage",
        title: "Torn-Paper Collage",
        summary: "A rough edge can carry more feeling than a clean one.",
        body: [
          "Tearing paper (instead of cutting) gives you a soft, irregular edge that reads as organic: great for clouds, mountains, fur, or anything that shouldn't look mechanically precise. Tear slowly, and toward you, for more control over the line.",
          "Layer light-to-dark or back-to-front: place your furthest-back shapes down first, then build forward, letting each new piece overlap the last slightly. This overlap is what creates depth without any shading.",
          "Mixed paper weights and textures (newsprint, cardstock, tissue) add variety even within a single color family, so a monochrome collage doesn't read as flat.",
        ],
        practice:
          "Tear five shapes from one sheet of colored paper and arrange them into a simple landscape (sky, hill, horizon) using only overlap for depth.",
        applyIt:
          "Make a torn-paper portrait or scene using at least three different paper textures, gluing back-to-front for layered depth.",
        quiz: {
          question: "Why tear paper instead of cutting it for organic shapes?",
          options: [
            { id: "a", label: "Tearing is faster than cutting, that's the only reason" },
            { id: "b", label: "It produces a soft, irregular edge that reads as natural", correct: true },
            { id: "c", label: "Torn paper holds glue better" },
            { id: "d", label: "Scissors can't cut curves" },
          ],
        },
      },
      {
        slug: "kirigami-cuts",
        title: "Kirigami Cuts",
        summary: "Symmetry and repetition, built from folds and cuts.",
        body: [
          "Kirigami extends origami with cutting: fold paper, cut into the folded edges, then unfold to reveal a symmetric pattern. Because the cuts mirror across each fold line, complex-looking patterns come from just a few simple snips.",
          "A basic accordion fold (repeated back-and-forth folds of equal width) is the easiest starting structure: cuts along the folded edge repeat across every panel when unfolded, giving you an instant repeating border or garland.",
          "Work from simple to complex: start with straight and V-shaped cuts before attempting curves, since curved cuts on folded paper are easy to tear through by accident.",
        ],
        practice:
          "Accordion-fold a strip of paper into 6 equal panels, cut a simple triangle notch into the folded edge, and unfold to see the repeating pattern.",
        applyIt:
          "Design a symmetric kirigami piece (a snowflake, a garland, or a card pop-up) using at least two different cut shapes.",
        quiz: {
          question: "What role does folding play in kirigami?",
          options: [
            { id: "a", label: "It's optional, kirigami is just freehand cutting" },
            { id: "b", label: "It makes cuts repeat symmetrically once unfolded", correct: true },
            { id: "c", label: "It's only for strengthening the paper" },
            { id: "d", label: "It determines the paper's color" },
          ],
        },
      },
      {
        slug: "layered-paper-relief",
        title: "Layered Paper Relief",
        summary: "Give a flat medium real, physical depth.",
        body: [
          "Layered relief stacks cut paper shapes on small foam spacers (or rolled tape) so each layer sits slightly above the one behind it. The piece casts real shadows instead of drawn ones.",
          "Plan in layers from the start: sketch your image, then separate it into 3 to 5 depth planes (background, midground, foreground details) before cutting anything, so each shape is sized to sit cleanly on the layer below it.",
          "Light direction matters once there's physical depth: deciding where your 'light source' is (and keeping shadows consistent with it) is what makes the relief read as coherent rather than random bumps.",
        ],
        practice:
          "Cut three simple shapes of decreasing size and stack them with foam spacers to create a 3-layer relief of a basic object (a flower, a house, a star).",
        applyIt:
          "Plan and build a 4 to 5 layer paper relief scene, sketching the depth planes before cutting a single shape.",
        quiz: {
          question: "What creates the sense of depth in layered paper relief?",
          options: [
            { id: "a", label: "Painting darker colors in the background" },
            { id: "b", label: "Physically raising layers above each other with spacers", correct: true },
            { id: "c", label: "Using thicker paper only" },
            { id: "d", label: "Adding a drop shadow in Photoshop afterward" },
          ],
        },
      },
    ],
  },
  {
    slug: "watercolor",
    title: "Watercolor Basics",
    tagline: "Water, pigment, and knowing when to stop",
    category: "medium",
    accent: "clay",
    description:
      "The core watercolor controls (wetness, mixing, and layering) that separate muddy paintings from luminous ones.",
    gettingStarted: [
      "Buy the best paper you can afford before upgrading paint or brushes. Paper affects how forgiving the medium feels more than any other material.",
      "Practice value studies in plain water-diluted black or gray before worrying about color at all.",
      "Keep a scrap sheet next to your painting to test every mix before it touches the real piece.",
      "Let a painting sit overnight before deciding it's a failure. Watercolor often looks harsher wet than it does once fully dry and viewed fresh.",
    ],
    resources: {
      free: [
        { label: "Wikipedia: Watercolor painting", url: "https://en.wikipedia.org/wiki/Watercolor_painting", source: "Wikipedia" },
        { label: "Watercolor tutorials", url: "https://www.youtube.com/results?search_query=watercolor+painting+for+beginners", source: "YouTube" },
      ],
      paid: [
        { label: "Watercolor courses on Domestika", url: "https://www.domestika.org/en/search?query=watercolor", source: "Domestika" },
        { label: "Watercolor courses on Skillshare", url: "https://www.skillshare.com/en/search?query=watercolor", source: "Skillshare" },
      ],
    },
    lessons: [
      {
        slug: "materials-and-wet-on-wet",
        title: "Materials & Wet-on-Wet",
        summary: "Let water do half the work.",
        body: [
          "Three things matter more than brand: paper weight (140 pound, roughly 300 gsm, cold-press resists warping and lets you rework areas), a round brush that holds a point, and two water jars, one for rinsing and one for clean mixing water.",
          "Wet-on-wet means applying paint to paper that's already damp: the pigment blooms and spreads on its own, giving soft, blurred edges perfect for skies, water, or backgrounds. The wetter the paper, the more the color travels, so a light misting gives subtle bleed, and a fully soaked sheet gives dramatic blooms.",
          "The technique's one real trap is over-control: once paint hits wet paper, fighting it with more brushstrokes usually just muddies the color. Let it settle before deciding it needs more work.",
        ],
        practice:
          "Wet a small area of paper with clean water, then touch a loaded brush to the edge and watch the color bloom without touching it again for 30 seconds.",
        applyIt:
          "Paint a simple sky or water scene using only wet-on-wet blooms for at least two colors that blend into each other.",
        quiz: {
          question: "What happens when you apply pigment to already-wet paper?",
          options: [
            { id: "a", label: "The pigment stays exactly where you place it" },
            { id: "b", label: "It spreads and blooms softly on its own", correct: true },
            { id: "c", label: "The paper immediately tears" },
            { id: "d", label: "Nothing different happens compared to dry paper" },
          ],
        },
      },
      {
        slug: "color-mixing-and-value",
        title: "Color Mixing & Value",
        summary: "Fewer, better colors beat a crowded palette.",
        body: [
          "Value (how light or dark a color is) does more to create a convincing painting than hue does: a monochrome painting with a full range of values reads as more realistic than a full-color one with everything at the same lightness.",
          "Mix from a small palette on purpose: one warm and one cool version of red, yellow, and blue (six tubes total) can mix nearly any color you'll need, and staying within a limited set keeps your painting's colors feeling related rather than random.",
          "Watercolor lightens as it dries, so mix your color slightly darker and more saturated than you want the final result. A common beginner mistake is judging color while it's still wet and glossy on the page.",
        ],
        practice:
          "Mix five value steps (very light to very dark) using just one color plus water, and paint them as a swatch strip.",
        applyIt:
          "Paint a simple object using only one color's full value range, no other hues, to practice value before color.",
        quiz: {
          question: "Why should you mix watercolor slightly darker than your target?",
          options: [
            { id: "a", label: "Watercolor gets darker as it dries" },
            { id: "b", label: "Watercolor dries lighter than it looks when wet", correct: true },
            { id: "c", label: "It's not necessary, wet and dry look the same" },
            { id: "d", label: "Darker paint costs less" },
          ],
        },
      },
      {
        slug: "washes-and-layering",
        title: "Washes & Layering",
        summary: "Build up color in patient, transparent layers.",
        body: [
          "A wash is a broad, even layer of diluted color: the foundation of most watercolor paintings, laid down first for skies, walls, or skin tones before any detail goes on top.",
          "Glazing (layering one transparent wash over a fully dry one) is how watercolor builds depth and shadow without going muddy. The key word is 'dry': layering onto damp paint underneath is what causes colors to blend into an unwanted brown.",
          "Patience is the actual technique here: most watercolor mistakes come from working too fast and touching paint before it's dry rather than from any brush skill.",
        ],
        practice:
          "Paint a flat wash over a small area, let it dry completely, then glaze a second transparent layer over just half of it to see the value change.",
        applyIt:
          "Paint a simple shaded object (a sphere or fruit) using only washes and dry-layer glazing to build the shadow, no wet-on-wet.",
        quiz: {
          question: "What's the most common cause of muddy colors when layering washes?",
          options: [
            { id: "a", label: "Using too much water overall" },
            { id: "b", label: "Layering new paint before the layer underneath is dry", correct: true },
            { id: "c", label: "Using a round brush instead of a flat one" },
            { id: "d", label: "Mixing warm and cool colors" },
          ],
        },
      },
    ],
  },
  {
    slug: "painting-foundations",
    title: "Painting Foundations",
    tagline: "Composition, color theory, and brushwork that transfer across media",
    category: "medium",
    accent: "blush",
    description:
      "The fundamentals that apply whether you're holding acrylic, oil, or gouache: where to put things, what colors to use, and how to move the brush.",
    gettingStarted: [
      "Study composition and value in grayscale before adding color into the mix. It isolates the skill you're actually practicing.",
      "Mix a limited palette (six tubes or fewer) for your first ten paintings. Constraint builds color intuition faster than access to every hue.",
      "Step back from the canvas often, physically, not just mentally. Most value and balance problems are invisible from 12 inches away.",
      "Finish small studies rather than abandoning large ones. A completed 5 by 7 inch piece teaches more than an unfinished large canvas.",
    ],
    resources: {
      free: [
        { label: "Wikipedia: Color theory", url: "https://en.wikipedia.org/wiki/Color_theory", source: "Wikipedia" },
        { label: "Khan Academy: art history", url: "https://www.khanacademy.org/humanities/art-history", source: "Khan Academy" },
      ],
      paid: [
        { label: "Painting courses on MasterClass", url: "https://www.masterclass.com", source: "MasterClass" },
        { label: "Painting courses on Domestika", url: "https://www.domestika.org/en/search?query=painting", source: "Domestika" },
      ],
    },
    lessons: [
      {
        slug: "composition-and-rule-of-thirds",
        title: "Composition & the Rule of Thirds",
        summary: "Where you place things changes what the painting says.",
        body: [
          "Divide your canvas into a 3x3 grid. Placing your main subject near one of the four intersection points (instead of dead center) generally creates a more dynamic, natural-feeling composition than perfect symmetry.",
          "Leave room for the eye to move: if your subject faces or moves in one direction, more empty space on that side (not behind it) reads as intentional rather than off-balance.",
          "Center compositions aren't wrong: they read as calm, formal, or confrontational on purpose (a portrait, a still life). The rule of thirds is a default to break deliberately, not a law.",
        ],
        practice:
          "Sketch the same simple scene twice, once with the subject centered and once with it on a rule-of-thirds intersection, and compare how each feels.",
        applyIt:
          "Plan a small painting's composition on paper first, marking the rule-of-thirds grid and placing your focal point on an intersection before you paint.",
        quiz: {
          question: "What does the rule of thirds suggest?",
          options: [
            { id: "a", label: "Always center your subject" },
            { id: "b", label: "Place key elements near grid intersections, not dead center", correct: true },
            { id: "c", label: "Use exactly three colors" },
            { id: "d", label: "Divide the canvas into three separate paintings" },
          ],
        },
      },
      {
        slug: "color-theory-in-practice",
        title: "Color Theory in Practice",
        summary: "Complementary, analogous, and why some pairings just work.",
        body: [
          "Complementary colors (opposite each other on the color wheel, such as red and green, or blue and orange) create maximum contrast and energy when placed together, which is why they show up so often in things meant to grab attention.",
          "Analogous colors (neighbors on the wheel, such as blue, blue-green, and green) create harmony and calm because they share an underlying hue, making them a safer default for backgrounds or anything that shouldn't compete with the subject.",
          "A small amount of a complementary color mixed into its opposite (rather than used pure, side by side) is also the classic way to mute or 'gray down' a color naturally, without just adding black.",
        ],
        practice:
          "Paint two small swatches side by side using a complementary pair, then two more using an analogous set, and notice the difference in energy.",
        applyIt:
          "Paint a simple scene twice with two different palettes, one complementary and one analogous, to feel how the color scheme changes the mood.",
        quiz: {
          question: "What effect do complementary colors have when placed next to each other?",
          options: [
            { id: "a", label: "They cancel out and appear gray" },
            { id: "b", label: "They create maximum visual contrast and energy", correct: true },
            { id: "c", label: "They always clash and should be avoided" },
            { id: "d", label: "They have no particular effect" },
          ],
        },
      },
      {
        slug: "brushwork-and-texture",
        title: "Brushwork & Texture",
        summary: "How you apply paint is part of the image.",
        body: [
          "Brush pressure and loading change everything: a fully loaded, lightly pressed brush glides and leaves smooth, even color; a nearly dry brush dragged with more pressure ('dry-brushing') catches only the canvas's texture, great for grass, fur, or worn surfaces.",
          "Direction of the stroke should usually follow the form it's describing: strokes that curve along a sphere's surface (rather than random or straight) help it read as round even before shading is added.",
          "Impasto (thick, textured paint applied with a brush or palette knife) adds real physical texture and catches light. Reserve it for a painting's brightest highlights or focal point, since using it everywhere flattens its impact.",
        ],
        practice:
          "Practice three brush techniques on scrap paper: a smooth even stroke, a dry-brush texture stroke, and a thick impasto dab.",
        applyIt:
          "Paint a small study using at least two different brush techniques deliberately, for example smooth strokes for a background and dry-brush texture for a foreground detail.",
        quiz: {
          question: "What is dry-brushing typically used for?",
          options: [
            { id: "a", label: "Smooth, even color fields" },
            { id: "b", label: "Rough, textured effects like fur or grass", correct: true },
            { id: "c", label: "Mixing new colors on the canvas" },
            { id: "d", label: "Cleaning the brush" },
          ],
        },
      },
    ],
  },
  {
    slug: "sumi-e",
    title: "Japanese Sumi-e Ink Wash",
    tagline: "Black ink, water, and controlled breath",
    category: "style",
    region: "Japan",
    accent: "sage",
    description:
      "A centuries-old ink painting tradition built on economy of stroke: saying the most with the fewest marks.",
    gettingStarted: [
      "Practice the same single stroke fifty times before moving to a new one. Repetition, not variety, is how control is built here.",
      "Mix only as much ink as one sitting needs. Fresh ink behaves differently than ink left to sit.",
      "Work on cheap practice paper first, and save good rice paper for pieces you've already rehearsed on scrap.",
      "Sit and breathe for a moment before the first stroke of a session. Posture and breath control genuinely affect line quality here.",
    ],
    resources: {
      free: [
        { label: "Wikipedia: Ink wash painting", url: "https://en.wikipedia.org/wiki/Ink_wash_painting", source: "Wikipedia" },
        { label: "Sumi-e tutorials", url: "https://www.youtube.com/results?search_query=sumi-e+ink+wash+painting+tutorial", source: "YouTube" },
      ],
      paid: [
        { label: "Ink painting courses on Domestika", url: "https://www.domestika.org/en/search?query=ink+painting", source: "Domestika" },
        { label: "Sumi-e courses on Udemy", url: "https://www.udemy.com/courses/search/?q=sumi-e", source: "Udemy" },
      ],
    },
    lessons: [
      {
        slug: "the-four-gentlemen",
        title: "The Four Gentlemen",
        summary: "Bamboo, orchid, plum blossom, chrysanthemum: the classic training subjects.",
        body: [
          "The 'Four Gentlemen' (bamboo, orchid, plum blossom, and chrysanthemum) are the traditional starting subjects in sumi-e and Chinese brush painting, each associated with a season and a virtue: bamboo for resilience, plum blossom for perseverance through winter.",
          "They're taught in this order because each isolates a different stroke skill: bamboo teaches straight, controlled strokes and joints; orchid teaches long, tapering curved strokes; plum blossom teaches branch structure and dot-clusters for blossoms; chrysanthemum teaches layered petal strokes.",
          "Painting the same subject repeatedly (a bamboo stalk, a hundred times) is a deliberate part of the tradition. Mastery here is about stroke confidence, not novelty.",
        ],
        practice:
          "Paint five bamboo stalks with a single confident stroke each, varying pressure from thick at the base to thin at the tip.",
        applyIt:
          "Choose one of the Four Gentlemen and paint it three times, trying to make each version more economical (fewer strokes) than the last.",
        quiz: {
          question: "Why are the Four Gentlemen taught in a specific order?",
          options: [
            { id: "a", label: "They're ranked by difficulty of mixing color" },
            { id: "b", label: "Each isolates a different core brush-stroke skill", correct: true },
            { id: "c", label: "It's just tradition with no technical reason" },
            { id: "d", label: "They must be painted in the same season" },
          ],
        },
      },
      {
        slug: "ink-gradation-notan",
        title: "Ink Gradation (Notan)",
        summary: "One ink stick, a full range of values, no color needed.",
        body: [
          "Notan refers to the balance of light and dark in a composition. In sumi-e, this is achieved entirely through ink dilution (more water gives a pale gray wash, less water gives near-black) without ever mixing in another color.",
          "Loading a single brush with two or three graded values at once (dip in water, then touch just the tip into concentrated ink) lets one stroke shift from dark to light naturally, a hallmark technique for painting things like a single leaf or petal in one motion.",
          "Because there's no color to rely on for interest, value contrast alone has to carry the whole composition. This is why notan is taught as a design principle even outside ink painting.",
        ],
        practice:
          "Mix three ink dilutions (dark, medium, pale) and paint three horizontal bands to see the value range from just water ratio.",
        applyIt:
          "Load a single brush with graded ink (dark tip, pale base) and paint a leaf or petal shape in one continuous stroke.",
        quiz: {
          question: "How does sumi-e primarily create value range without color?",
          options: [
            { id: "a", label: "By mixing black with white paint" },
            { id: "b", label: "By diluting ink with more or less water", correct: true },
            { id: "c", label: "By using colored paper" },
            { id: "d", label: "By layering many colored washes" },
          ],
        },
      },
      {
        slug: "brush-control-and-breath",
        title: "Brush Control & Breath",
        summary: "One stroke, no going back, so the whole body has to be steady.",
        body: [
          "Sumi-e strokes are meant to be committed in one pass: there's no erasing ink, and reworking a stroke usually makes it look labored rather than confident. This constraint is the point: it forces decisiveness.",
          "Breath and posture matter more than in most painting styles. Practitioners are traditionally taught to exhale slowly during a long stroke, which steadies the hand more reliably than gripping the brush tighter.",
          "Holding the brush more vertically and loosely than a Western paintbrush grip allows the wrist and arm (not just the fingers) to guide the stroke, which is what makes long, even tapering lines possible.",
        ],
        practice:
          "Practice ten long vertical strokes, exhaling slowly through each one, aiming for even pressure without stopping mid-stroke.",
        applyIt:
          "Paint a simple subject (a single stalk, a fish, a mountain outline) in five strokes or fewer, committing to each one without correction.",
        quiz: {
          question: "Why is 'one stroke, no going back' central to sumi-e practice?",
          options: [
            { id: "a", label: "Ink is too expensive to waste" },
            { id: "b", label: "It builds decisiveness since reworked strokes look labored", correct: true },
            { id: "c", label: "Paper can only absorb ink once" },
            { id: "d", label: "It's a rule with no practical effect" },
          ],
        },
      },
    ],
  },
  {
    slug: "madhubani",
    title: "Madhubani Painting",
    tagline: "Line, pattern, and natural pigment from Bihar, India",
    category: "style",
    region: "India, Bihar",
    accent: "gold",
    description:
      "A folk art tradition of dense line work, bold pattern-filled forms, and natural pigments, traditionally practiced by women of the Mithila region.",
    gettingStarted: [
      "Start with pattern-filling practice on plain shapes before attempting a full composition. The fill patterns are the technical core of the style.",
      "Study real examples closely (museum collections and books) before improvising your own motifs, since the tradition's meaning lives in specific, recognizable symbols.",
      "Draw the double-line outline first in pencil, then ink it, then fill the pattern. Trying to freehand all three at once usually gets messy.",
      "Work at a larger scale than feels natural at first. Fine pattern work is easier to control on bigger paper.",
    ],
    resources: {
      free: [
        { label: "Wikipedia: Madhubani art", url: "https://en.wikipedia.org/wiki/Madhubani_art", source: "Wikipedia" },
        { label: "Madhubani painting tutorials", url: "https://www.youtube.com/results?search_query=madhubani+painting+tutorial", source: "YouTube" },
      ],
      paid: [
        { label: "Folk art courses on Domestika", url: "https://www.domestika.org/en/search?query=folk+art", source: "Domestika" },
        { label: "Madhubani courses on Udemy", url: "https://www.udemy.com/courses/search/?q=madhubani", source: "Udemy" },
      ],
    },
    lessons: [
      {
        slug: "line-pattern-and-border",
        title: "Line, Pattern & Border",
        summary: "No empty space: pattern fills every gap.",
        body: [
          "Madhubani's signature look comes from double-line outlines (two parallel lines with the gap between them filled with small repeating patterns, such as dots, crosshatching, or fish scales) rather than a single clean contour.",
          "Empty background space is traditionally avoided: gaps between figures get filled with smaller motifs (flowers, fish, birds, geometric fillers) so the whole composition reads as densely, deliberately patterned rather than sparse.",
          "A decorative border usually frames the whole piece, often echoing the same repeating motifs used inside. It's not an afterthought but part of the composition's structure.",
        ],
        practice:
          "Draw a simple shape (a leaf or fish) with a double-line outline and fill the gap between the lines with a small repeating pattern.",
        applyIt:
          "Compose a small piece with two or three figures and fill every remaining gap with small filler motifs so no background space is left empty.",
        quiz: {
          question: "What's distinctive about Madhubani outlines?",
          options: [
            { id: "a", label: "They're always a single thin clean line" },
            { id: "b", label: "Double parallel lines filled with small repeating patterns", correct: true },
            { id: "c", label: "No outlines are used at all" },
            { id: "d", label: "Outlines are drawn only in gold" },
          ],
        },
      },
      {
        slug: "natural-pigments",
        title: "Natural Pigments",
        summary: "Color traditionally comes from the kitchen and the garden.",
        body: [
          "Traditional Madhubani pigments are made from readily available natural materials: turmeric or marigold for yellow, indigo for blue, sandalwood or red sandalwood for red, and soot (lampblack) mixed with cow dung and gum for black outlines.",
          "These pigments are typically bound with a natural gum (like gum arabic) and applied with a bamboo twig or matchstick wrapped in cotton, tools that produce a slightly rougher, more textured line than a fine brush would.",
          "Modern practitioners often use poster paints for convenience, but the traditional bold, flat, high-saturation color fields (with almost no blending or shading) remain the stylistic signature regardless of pigment source.",
        ],
        practice:
          "Using flat, unblended color, paint one motif entirely in a single saturated color with no shading, mimicking the traditional flat-fill approach.",
        applyIt:
          "Recreate a small motif using a limited natural-inspired palette (yellow, red, blue, black) applied as flat, unblended fields of color.",
        quiz: {
          question: "What's characteristic about traditional Madhubani color application?",
          options: [
            { id: "a", label: "Heavy blending and gradients" },
            { id: "b", label: "Bold, flat, saturated color fields with little shading", correct: true },
            { id: "c", label: "Exclusively grayscale ink" },
            { id: "d", label: "Airbrushed soft edges" },
          ],
        },
      },
      {
        slug: "motifs-and-mythology",
        title: "Motifs & Mythology",
        summary: "Fish, peacocks, the sun, and stories passed through symbols.",
        body: [
          "Recurring motifs carry specific meaning: fish represent fertility and good fortune, peacocks represent beauty and love, the sun and moon represent cosmic balance, and lotus flowers represent purity. A viewer familiar with the tradition can read a painting's intent through its symbols.",
          "Many pieces depict Hindu deities and scenes from mythology (Krishna, Ram, wedding ceremonies), traditionally painted on the walls and floors of homes for festivals and celebrations before the practice moved onto paper and canvas for wider circulation.",
          "Figures are typically drawn with minimal facial detail but bold, elongated eyes, a stylistic choice that prioritizes symbolic presence over realistic likeness.",
        ],
        practice:
          "Draw one traditional motif (a fish, a peacock, or the sun) and write one sentence on the symbolic meaning it traditionally carries.",
        applyIt:
          "Compose a small piece combining two or three motifs (sun, fish, lotus) that tells a simple symbolic story through their meanings, not through realism.",
        quiz: {
          question: "In Madhubani tradition, what does a fish motif typically symbolize?",
          options: [
            { id: "a", label: "Danger" },
            { id: "b", label: "Fertility and good fortune", correct: true },
            { id: "c", label: "Mourning" },
            { id: "d", label: "Nothing in particular, purely decorative" },
          ],
        },
      },
    ],
  },
  {
    slug: "papel-picado",
    title: "Papel Picado & Mexican Folk Art",
    tagline: "Punched paper banners and bold folk color",
    category: "style",
    region: "Mexico",
    accent: "blush",
    description:
      "The craft of cutting intricate patterns into tissue paper, plus the bold color language of Mexican folk art more broadly.",
    gettingStarted: [
      "Practice cutting on a single folded sheet before stacking multiple layers. Control on one layer transfers to control on many.",
      "Sketch a design fully on paper before making a single cut. Papel picado leaves no room to undo a cut once it's made.",
      "Use a self-healing cutting mat and a sharp craft knife. Dull blades tear tissue paper instead of cutting it cleanly.",
      "Look at real examples from Mexican folk art traditions (Talavera tile, alebrijes, papel picado banners) side by side to notice their shared color and pattern logic.",
    ],
    resources: {
      free: [
        { label: "Wikipedia: Papel picado", url: "https://en.wikipedia.org/wiki/Papel_picado", source: "Wikipedia" },
        { label: "Wikipedia: Alebrije", url: "https://en.wikipedia.org/wiki/Alebrije", source: "Wikipedia" },
      ],
      paid: [
        { label: "Folk art courses on Domestika", url: "https://www.domestika.org/en/search?query=mexican+folk+art", source: "Domestika" },
        { label: "Paper cutting courses on Skillshare", url: "https://www.skillshare.com/en/search?query=paper+cutting", source: "Skillshare" },
      ],
    },
    lessons: [
      {
        slug: "papel-picado-cutting-patterns",
        title: "Papel Picado Cutting Patterns",
        summary: "Stack, fold, cut: a whole banner from one design.",
        body: [
          "Papel picado ('perforated paper') banners are traditionally cut from stacks of colored tissue paper, as many as 40 to 50 sheets at once, using a sharp chisel and mallet, so one design produces dozens of identical banners in one pass.",
          "Designs combine cut-out shapes (removed entirely, letting light through) with fold-based symmetry, similar to kirigami. Folding the paper before cutting means a single motif repeats evenly across the whole sheet.",
          "Traditional motifs include birds, flowers, skeletons (especially for Dia de los Muertos), and geometric borders. The paper's fragility is part of the meaning, historically representing the impermanence of life.",
        ],
        practice:
          "Fold a square of tissue paper into quarters and cut 3 to 4 small shapes into the folded edges, then unfold to reveal the symmetric pattern.",
        applyIt:
          "Design and cut a small papel picado banner with a themed motif (flowers, birds, or a seasonal symbol) using folded symmetry.",
        quiz: {
          question: "What does folding the paper before cutting achieve in papel picado?",
          options: [
            { id: "a", label: "It makes the paper stronger" },
            { id: "b", label: "It creates a repeating symmetric pattern from one cut", correct: true },
            { id: "c", label: "It's purely for storage convenience" },
            { id: "d", label: "It changes the paper's color" },
          ],
        },
      },
      {
        slug: "alebrije-inspired-color-and-form",
        title: "Alebrije-Inspired Color & Form",
        summary: "Fantastical creatures in impossibly bright color.",
        body: [
          "Alebrijes are brightly colored fantastical creatures, originally carved from wood and papier-mache, that blend features from multiple animals (wings on a jaguar, a lizard's tail on a rabbit) into one imagined being.",
          "Their defining visual trait is dense, high-contrast pattern covering the entire surface: small repeating geometric or organic patterns painted in clashing bright colors, with almost no plain unpatterned surface left.",
          "Designing one starts with combining two or three real animals' features before any color is applied. The color and pattern work comes second, layered on top of an already-invented creature.",
        ],
        practice:
          "Sketch a simple creature combining features from two different animals, then fill one section of its body with a small repeating pattern in bright color.",
        applyIt:
          "Design a full alebrije-style creature and cover its entire surface in dense, high-contrast patterns using at least four bright colors.",
        quiz: {
          question: "What's a defining trait of alebrije design?",
          options: [
            { id: "a", label: "Muted, realistic color palettes" },
            { id: "b", label: "Dense pattern in bright, high-contrast color over the whole surface", correct: true },
            { id: "c", label: "Always depicting real, single animal species" },
            { id: "d", label: "Leaving most of the surface plain" },
          ],
        },
      },
      {
        slug: "talavera-style-motifs",
        title: "Talavera-Style Motifs",
        summary: "Blue-and-white (and beyond) ceramic pattern, translated to paper.",
        body: [
          "Talavera pottery (centered in Puebla, Mexico) is known for hand-painted ceramic tile and dishware featuring cobalt blue, yellow, and green florals and geometric borders on a white ground, blending Spanish, Arabic, and Indigenous Mexican influences.",
          "Patterns are built from repeating structural units, a central floral or geometric motif surrounded by a symmetric border, which makes the style translate well to flat 2D pattern design even outside ceramics.",
          "Precision matters here more than in freer folk styles: motifs are typically drawn with a compass or ruler-guided symmetry, since the style's identity comes from its orderly, tile-like repetition.",
        ],
        practice:
          "Draw a simple circular motif (a flower) inside a square tile, then design a matching repeating border for two edges of the tile.",
        applyIt:
          "Design a 4-tile repeating pattern in a limited palette (blue, yellow, white) with a central motif and symmetric border, as if it were meant for ceramic tile.",
        quiz: {
          question: "What most distinguishes Talavera-style pattern work?",
          options: [
            { id: "a", label: "Loose, freehand asymmetry" },
            { id: "b", label: "Precise, symmetric repeating motifs, often blue and white", correct: true },
            { id: "c", label: "Exclusively black and white patterns" },
            { id: "d", label: "No use of borders" },
          ],
        },
      },
    ],
  },
  {
    slug: "newsletter-writing",
    title: "Newsletter Writing",
    tagline: "An angle worth opening, and a structure worth finishing",
    category: "writing",
    accent: "clay",
    description:
      "The craft of writing a newsletter people actually open and finish: angle, structure, and the subject line that earns the click.",
    gettingStarted: [
      "Write your subject line before you write the issue, not after. It keeps the whole issue honest to one clear idea.",
      "Read your draft out loud before sending. Awkward sentences are much easier to hear than to see.",
      "Keep a running swipe file of subject lines you personally opened, and note what made you click.",
      "Publish on a fixed schedule. An imperfect issue on time builds more trust than a perfect issue that's late.",
    ],
    resources: {
      free: [
        { label: "Reedsy: writing resources", url: "https://www.reedsy.com", source: "Reedsy" },
        { label: "Newsletter writing tutorials", url: "https://www.youtube.com/results?search_query=how+to+write+a+newsletter", source: "YouTube" },
      ],
      paid: [
        { label: "Newsletter writing courses on Udemy", url: "https://www.udemy.com/courses/search/?q=newsletter+writing", source: "Udemy" },
        { label: "Writing courses on Skillshare", url: "https://www.skillshare.com/en/search?query=newsletter%20writing", source: "Skillshare" },
      ],
    },
    lessons: [
      {
        slug: "finding-your-angle-and-hook",
        title: "Finding Your Angle & Hook",
        summary: "The topic isn't the angle. The angle is what you're saying about it.",
        body: [
          "A topic ('productivity tips') isn't an angle. An angle is a specific claim or take on that topic ('most productivity advice fails because it optimizes for busy, not for done'). Readers subscribe to angles and opinions, not subjects.",
          "The hook is your first one or two sentences, and its only job is to make the very next sentence feel necessary to read. A surprising claim, a specific number, or a question the reader didn't know they had works better than a broad throat-clearing intro ('In today's world, productivity is important...').",
          "A fast way to find your angle: finish the sentence 'Most people think X, but actually Y' about your topic. Whatever fills in Y is usually your real angle.",
        ],
        practice:
          "Write three different 'Most people think X, but actually Y' sentences about a topic you know well, and pick the one that surprises you most.",
        applyIt:
          "Draft an opening two sentences for a newsletter issue using your strongest angle from the practice, no throat-clearing, straight into the hook.",
        quiz: {
          question: "What's the difference between a topic and an angle?",
          options: [
            { id: "a", label: "There is no real difference" },
            { id: "b", label: "An angle is a specific claim or take on the topic", correct: true },
            { id: "c", label: "An angle is just a shorter version of the topic" },
            { id: "d", label: "A topic is more specific than an angle" },
          ],
        },
      },
      {
        slug: "structure-that-keeps-people-reading",
        title: "Structure That Keeps People Reading",
        summary: "Every section should make the next one feel necessary.",
        body: [
          "Short paragraphs (one to three sentences) and frequent line breaks aren't just stylistic. They lower the perceived effort of reading on a phone screen, which is where most newsletters get opened.",
          "Each section should end on something that pulls the reader forward, such as a question, an unresolved thread, or a 'here's where it gets interesting' turn, rather than fully closing the loop before the next section starts.",
          "A simple reliable structure: hook, then the core idea explained, then a concrete example or story that proves it, then a specific, actionable takeaway. Readers forgive a weak middle if the opening earns trust and the ending pays off.",
        ],
        practice:
          "Take a paragraph you've written and break it into three shorter paragraphs, each ending on a small unresolved thread.",
        applyIt:
          "Outline a full newsletter issue using the hook, idea, example, takeaway structure before writing full sentences.",
        quiz: {
          question: "Why do newsletters favor short paragraphs and frequent line breaks?",
          options: [
            { id: "a", label: "It's a stylistic trend with no real function" },
            { id: "b", label: "It lowers perceived reading effort, especially on phones", correct: true },
            { id: "c", label: "It increases word count for SEO" },
            { id: "d", label: "Long paragraphs are against email rules" },
          ],
        },
      },
      {
        slug: "subject-lines-and-the-open",
        title: "Subject Lines & The Open",
        summary: "The subject line's only job is earning the open, nothing else.",
        body: [
          "A subject line competes with dozens of other unread emails, not with your own newsletter's content. Its only job is earning the tap, which means specificity and curiosity usually beat cleverness or completeness.",
          "Concrete beats vague: 'Why your onboarding emails get ignored' outperforms 'Some thoughts on email' almost every time, because it promises the reader a specific, relevant payoff.",
          "The preview text (the snippet shown after the subject line in most inboxes) is free real estate most writers waste by leaving it to default to the email's first line. Writing it deliberately as a second, complementary hook meaningfully lifts open rates.",
        ],
        practice:
          "Write five subject line variations for the same piece of content, then pick the most specific and concrete one.",
        applyIt:
          "Write a subject line and a distinct, deliberate preview-text line for a newsletter issue so they work together rather than repeating each other.",
        quiz: {
          question: "What generally makes a subject line more effective?",
          options: [
            { id: "a", label: "Being as vague and mysterious as possible" },
            { id: "b", label: "Being specific and concrete about the payoff", correct: true },
            { id: "c", label: "Being as long as possible" },
            { id: "d", label: "Always including the word 'newsletter'" },
          ],
        },
      },
    ],
  },
  {
    slug: "novel-writing",
    title: "Novel Writing",
    tagline: "Structure, character, and the scenes that earn their place",
    category: "writing",
    accent: "sage",
    description:
      "The load-bearing craft elements of long-form fiction (structure, character motivation, and pacing) that hold a novel together across hundreds of pages.",
    gettingStarted: [
      "Finish a full rough draft before editing anything. Editing an unfinished draft is one of the most common ways novels never get completed.",
      "Keep a one-page outline of your story's structure nearby while drafting, and update it as the story changes rather than rewriting from memory.",
      "Read your dialogue out loud. Awkward phrasing is far more obvious to the ear than to the eye.",
      "Set a small, consistent word or time goal per session rather than relying on inspiration to show up.",
    ],
    resources: {
      free: [
        { label: "Wikipedia: Three-act structure", url: "https://en.wikipedia.org/wiki/Three-act_structure", source: "Wikipedia" },
        { label: "Reedsy: novel writing resources", url: "https://www.reedsy.com", source: "Reedsy" },
      ],
      paid: [
        { label: "Writing courses on MasterClass", url: "https://www.masterclass.com", source: "MasterClass" },
        { label: "Creative writing courses on Coursera", url: "https://www.coursera.org/search?query=creative%20writing", source: "Coursera" },
      ],
    },
    lessons: [
      {
        slug: "story-structure-and-the-three-acts",
        title: "Story Structure & the Three Acts",
        summary: "A shape readers recognize, even when they can't name it.",
        body: [
          "The three-act structure breaks a story into setup (establish the world, character, and the problem), confrontation (the character struggles against escalating obstacles), and resolution (the problem is resolved, for better or worse), roughly a 25-50-25 split by length.",
          "The midpoint (the center of act two) is where many novels place a major turn, such as new information, a reversal, or raised stakes, that shifts the story from reactive to proactive, or from one goal to a deeper one.",
          "Structure is a diagnostic tool more than a formula to follow rigidly: if a draft feels saggy, checking which 'act' a scene belongs to often reveals whether it's actually advancing the story or just delaying it.",
        ],
        practice:
          "Outline a story you know well (a favorite book or film) into its three acts and identify the midpoint turn.",
        applyIt:
          "Sketch a one-page outline of an original story idea broken into setup, confrontation, and resolution, with a clear midpoint turn.",
        quiz: {
          question: "What typically happens at a story's midpoint?",
          options: [
            { id: "a", label: "The story ends" },
            { id: "b", label: "A turn shifts the story's direction or stakes", correct: true },
            { id: "c", label: "All characters are introduced for the first time" },
            { id: "d", label: "Nothing significant, it's just the middle" },
          ],
        },
      },
      {
        slug: "character-wants-vs-needs",
        title: "Character Wants and Needs",
        summary: "What they're chasing, and what they actually need instead.",
        body: [
          "A want is the concrete, external goal a character consciously pursues (win the race, get the promotion, find the treasure). It drives plot and gives the reader something to root for or against.",
          "A need is the internal, often unconscious thing the character actually requires to be whole (to forgive themselves, to trust someone, to let go of control). It drives character arc, and is usually in tension with the want.",
          "The most satisfying character arcs come from the want and need pulling in different directions. The character often has to fail at getting the want, or get it and find it hollow, before they can address the need underneath it.",
        ],
        practice:
          "For a character you know well (yours or a favorite book's), write one sentence for their want and one for their underlying need, and note how they conflict.",
        applyIt:
          "Draft a short character profile for an original character with a clear external want and a conflicting internal need.",
        quiz: {
          question: "How do a character's want and need typically differ?",
          options: [
            { id: "a", label: "They're always identical" },
            { id: "b", label: "The want is external and conscious; the need is internal and often unconscious", correct: true },
            { id: "c", label: "Only villains have needs" },
            { id: "d", label: "Need is only relevant in the first chapter" },
          ],
        },
      },
      {
        slug: "scene-vs-summary-pacing",
        title: "Scene and Summary Pacing",
        summary: "Slow down for what matters, speed past what doesn't.",
        body: [
          "A scene plays out moment-to-moment with dialogue and action. Use it for anything emotionally or plot-critical, where the reader needs to experience the beats directly rather than be told about them.",
          "Summary compresses time and events into narration ('the next three weeks passed in a blur of rehearsals'). Use it to skip the unimportant connective tissue between scenes without boring the reader with every step.",
          "A common pacing problem is writing everything as a full scene, including transitions and routine events. Trimming those to a sentence of summary is often the single highest-leverage edit for tightening a slow draft.",
        ],
        practice:
          "Take a routine moment from a draft or idea (a character commuting, getting ready) and compress it into one sentence of summary instead of a full scene.",
        applyIt:
          "Write one full scene (with dialogue) for your story's most important moment, and one paragraph of summary for a less important stretch of time before it.",
        quiz: {
          question: "When is summary generally preferable to a full scene?",
          options: [
            { id: "a", label: "For every moment in the story, always" },
            { id: "b", label: "For unimportant connective time that doesn't need moment-to-moment detail", correct: true },
            { id: "c", label: "Only in the story's climax" },
            { id: "d", label: "Never, scenes are always better" },
          ],
        },
      },
    ],
  },
  {
    slug: "video-editing",
    title: "Video Editing Basics",
    tagline: "Cuts, pacing, and sound that make footage feel intentional",
    category: "tool",
    accent: "gold",
    description:
      "The core editing moves that turn raw footage into something watchable: cutting on action, layering sound, and shaping pace.",
    gettingStarted: [
      "Edit with your project's target platform in mind before you start. A YouTube video needs different pacing than a 15 second clip.",
      "Turn on keyboard shortcuts for ripple and insert editing early. Keyboard-driven editing is dramatically faster than dragging clips by mouse.",
      "Watch your rough cut once with the sound off, and once with picture hidden, to judge pacing and audio separately.",
      "Keep a small folder of transitions and sound effects you actually finish using, not everything you've ever downloaded.",
    ],
    resources: {
      free: [
        { label: "DaVinci Resolve (free tier)", url: "https://www.blackmagicdesign.com/products/davinciresolve", source: "Blackmagic Design" },
        { label: "Premiere Pro tutorials", url: "https://helpx.adobe.com/premiere-pro/tutorials.html", source: "Adobe" },
      ],
      paid: [
        { label: "Video editing courses on Skillshare", url: "https://www.skillshare.com/en/search?query=video%20editing", source: "Skillshare" },
        { label: "Video editing courses on Domestika", url: "https://www.domestika.org/en/search?query=video+editing", source: "Domestika" },
      ],
    },
    lessons: [
      {
        slug: "cuts-and-pacing",
        title: "Cuts & Pacing",
        summary: "Where you cut is a decision, not an accident.",
        body: [
          "A cut on action (making the cut in the middle of a movement, like a door starting to close) is far less noticeable than a cut between two static shots, because the motion itself distracts the eye from the edit point.",
          "Pacing is controlled mostly by shot length: fast cuts (under one second) read as urgent or chaotic, longer holds (three seconds or more) read as calm or contemplative. Matching cut length to the emotion of the scene is more effective than a fixed editing rhythm.",
          "A rough cut should be assembled for story first, and trimmed for pace second. Editing both at once usually produces a sequence that's technically tight but doesn't actually work.",
        ],
        practice:
          "Cut together three clips of the same simple action (someone standing up, for example) using a cut on action, and compare it to cutting between static frames of the same clips.",
        applyIt:
          "Edit a 30 second sequence from your own footage, first assembling every clip for story, then going back through only to trim for pace.",
        quiz: {
          question: "Why is a cut on action less noticeable than a cut between static shots?",
          options: [
            { id: "a", label: "It isn't, cuts are always equally noticeable" },
            { id: "b", label: "The motion draws the eye's attention away from the edit point", correct: true },
            { id: "c", label: "It requires less rendering time" },
            { id: "d", label: "It only works in black and white footage" },
          ],
        },
      },
      {
        slug: "j-cuts-and-l-cuts",
        title: "J-Cuts and L-Cuts",
        summary: "Let sound arrive before or linger after the picture cuts.",
        body: [
          "An L-cut lets a clip's audio continue playing after the video has already cut to the next shot, commonly used so a speaker's voice carries over a reaction shot or cutaway.",
          "A J-cut is the reverse: the next clip's audio starts before its picture appears, which primes the viewer for what's coming and smooths the transition into a new scene or location.",
          "Both techniques exist to hide the cut. A hard cut where picture and audio change at exactly the same frame tends to feel more abrupt than one where sound and image are staggered.",
        ],
        practice:
          "Take two clips of dialogue and create an L-cut by extending the first clip's audio a few frames into the second clip's video.",
        applyIt:
          "Edit a short conversation scene using at least one J-cut and one L-cut, and notice how much smoother it feels than hard cuts.",
        quiz: {
          question: "What does an L-cut do?",
          options: [
            { id: "a", label: "Lets the outgoing clip's audio continue into the next shot", correct: true },
            { id: "b", label: "Removes all audio from a clip" },
            { id: "c", label: "Only applies to black and white footage" },
            { id: "d", label: "Reverses the video playback" },
          ],
        },
      },
      {
        slug: "color-grading-basics",
        title: "Color Grading Basics",
        summary: "Small, consistent adjustments beat one dramatic filter.",
        body: [
          "Color correction (fixing exposure and white balance so footage looks natural and consistent) should happen before color grading (pushing footage toward a deliberate mood or look). Grading footage that isn't corrected first just makes inconsistencies more visible.",
          "Contrast and saturation changes read faster and stronger than most editors expect. Small adjustments usually look more professional than one aggressive preset applied at full strength.",
          "Consistency across a whole video matters more than any single shot looking perfect: matching skin tones and exposure between cuts is what keeps an audience from noticing the edit at all.",
        ],
        practice:
          "Take two clips shot in different lighting and adjust exposure and white balance on each until they match, before applying any stylized look.",
        applyIt:
          "Grade a short sequence with a deliberate mood (warm and nostalgic, or cool and clinical) using small, consistent adjustments across every clip.",
        quiz: {
          question: "What should generally happen before color grading?",
          options: [
            { id: "a", label: "Adding background music" },
            { id: "b", label: "Color correction for exposure and white balance", correct: true },
            { id: "c", label: "Exporting the final file" },
            { id: "d", label: "Nothing, grading always comes first" },
          ],
        },
      },
    ],
  },
  {
    slug: "youtube-content-craft",
    title: "YouTube Content Craft",
    tagline: "Hooks, structure, and packaging that earn the click and the watch",
    category: "tool",
    accent: "clay",
    description:
      "The craft decisions behind a YouTube video that actually gets watched: the hook, the structure, and the thumbnail and title that earn the click in the first place.",
    gettingStarted: [
      "Watch your own video's retention graph before doing anything else. It tells you exactly where you lost people.",
      "Study three channels in your niche and note the first ten seconds of their most-viewed videos, not their average ones.",
      "Publish on a consistent schedule you can actually sustain. Consistency compounds more than any single viral attempt.",
      "Write your title and sketch your thumbnail before you film, not after. It keeps the video honest to what it promised.",
    ],
    resources: {
      free: [
        { label: "YouTube Creator Academy", url: "https://creatoracademy.youtube.com", source: "YouTube" },
        { label: "YouTube Creators channel", url: "https://www.youtube.com/@YouTubeCreators", source: "YouTube" },
      ],
      paid: [
        { label: "YouTube growth courses on Skillshare", url: "https://www.skillshare.com/en/search?query=youtube%20growth", source: "Skillshare" },
        { label: "YouTube courses on Udemy", url: "https://www.udemy.com/courses/search/?q=youtube", source: "Udemy" },
      ],
    },
    lessons: [
      {
        slug: "hooks-and-retention",
        title: "Hooks & Retention",
        summary: "The first 15 seconds decide whether anyone sees the rest.",
        body: [
          "A hook's job is to make the value of watching immediately obvious: state the payoff, show a preview of the most interesting moment, or open on a specific, concrete question rather than a slow introduction of yourself or your channel.",
          "Retention graphs (available in YouTube Analytics) typically show the steepest drop in the first 15 to 30 seconds. Most creators lose the most viewers not in the middle of a video but before it has really started.",
          "Cutting the traditional 'Hey guys, welcome back to my channel' intro entirely, and starting on the actual content, is one of the single highest-leverage retention changes a new creator can make.",
        ],
        practice:
          "Write two different opening lines for the same video idea: one that explains what the channel is, and one that leads straight into the payoff. Compare which one you'd actually keep watching.",
        applyIt:
          "Script the first 15 seconds of a video idea using a concrete hook (a preview clip, a specific claim, or a direct question) with no channel introduction.",
        quiz: {
          question: "Where does retention typically drop the most in a video?",
          options: [
            { id: "a", label: "In the final ten seconds" },
            { id: "b", label: "In the first 15 to 30 seconds", correct: true },
            { id: "c", label: "It drops evenly throughout" },
            { id: "d", label: "Retention never drops" },
          ],
        },
      },
      {
        slug: "thumbnails-and-titles",
        title: "Thumbnails & Titles",
        summary: "They work as a pair, not separately.",
        body: [
          "A thumbnail and title should not repeat the same information. The strongest pairs split the story: the thumbnail shows a visual and the title adds a question or detail the image alone doesn't answer.",
          "High contrast, a clear focal point, and a readable expression or object at a small size (the size it appears in a phone feed) matter more than density of detail in a thumbnail. Most thumbnails are viewed at under 200 pixels wide.",
          "Titles that promise something specific and testable ('I tried X for 30 days') tend to outperform vague ones ('My experience with X'), because the specificity itself is what earns the click.",
        ],
        practice:
          "Design two thumbnail concepts for the same video idea, one text-heavy and one image-led with a short title, and judge which reads faster at a glance.",
        applyIt:
          "Write five title and thumbnail-concept pairs for one video idea, making sure the title and thumbnail each add different information.",
        quiz: {
          question: "What's a common mistake when pairing a thumbnail and title?",
          options: [
            { id: "a", label: "Making the thumbnail too colorful" },
            { id: "b", label: "Having both repeat the exact same information", correct: true },
            { id: "c", label: "Using a question in the title" },
            { id: "d", label: "Testing multiple versions" },
          ],
        },
      },
      {
        slug: "structuring-a-video",
        title: "Structuring a Video",
        summary: "Outline before you film, or you'll pay for it in the edit.",
        body: [
          "A simple, reliable structure for most videos: hook, then setup (why this matters), then the body broken into clear beats, then a payoff or resolution. Filming without this outlined first usually means discovering the structure during editing, which costs far more time.",
          "Each beat or section should be plannable in one sentence before filming: if you can't summarize what a segment is for, it's a sign to cut it or combine it with another.",
          "Leaving intentional transition moments (a clear verbal bridge like 'now that we've covered X, let's look at Y') gives the editor clean points to cut on, and gives viewers a sense of progress through the video.",
        ],
        practice:
          "Outline a video idea as a single sentence per beat (hook, setup, three body beats, payoff) before writing a full script.",
        applyIt:
          "Film a short video from a beat outline written in advance, and note in editing how much less restructuring it needed compared to unscripted footage.",
        quiz: {
          question: "What's the benefit of outlining beats before filming?",
          options: [
            { id: "a", label: "It guarantees more views" },
            { id: "b", label: "It reduces how much restructuring is needed in the edit", correct: true },
            { id: "c", label: "It's required by YouTube's algorithm" },
            { id: "d", label: "It has no real effect on editing time" },
          ],
        },
      },
    ],
  },
  {
    slug: "short-form-video",
    title: "Short-Form Video: TikTok and Reels",
    tagline: "The three-second hook, vertical pacing, and sound-led editing",
    category: "tool",
    accent: "sage",
    description:
      "The specific craft of vertical, short-form video: hooking attention in the first beat, editing to sound, and pacing for a swipe-away audience.",
    gettingStarted: [
      "Post consistently for at least a few weeks before judging what's working. Early, inconsistent data is noisy.",
      "Watch the first second of your last five videos back to back, out of context, and ask honestly if you'd keep watching.",
      "Turn captions on by default. A large share of viewers watch with sound off, especially in public places.",
      "Save trending sounds as soon as you notice them. By the time you search for them later, the trend has often moved on.",
    ],
    resources: {
      free: [
        { label: "TikTok Creator Portal", url: "https://www.tiktok.com/creators/creator-portal/en-us/", source: "TikTok" },
        { label: "Short-form editing tutorials", url: "https://www.youtube.com/results?search_query=short+form+video+editing+tutorial", source: "YouTube" },
      ],
      paid: [
        { label: "Short-form video courses on Skillshare", url: "https://www.skillshare.com/en/search?query=short-form%20video%20editing", source: "Skillshare" },
        { label: "TikTok and Reels courses on Udemy", url: "https://www.udemy.com/courses/search/?q=tiktok+reels", source: "Udemy" },
      ],
    },
    lessons: [
      {
        slug: "the-three-second-hook",
        title: "The Three-Second Hook",
        summary: "You have less time than you think to earn the rest of the video.",
        body: [
          "Short-form platforms show a video's opening frame before anyone commits to watching, so the very first visual (not just the first line of narration) has to be interesting on its own: motion, an unusual object, or a mid-action moment all outperform a static talking-head start.",
          "Text overlays in the first second, stating exactly what the video is about or promises, reliably outperform waiting for narration to explain it, since many viewers watch with sound off.",
          "A common technique is starting mid-action or mid-sentence, as if the viewer walked in partway through something already happening, which reads as more urgent than a clean beginning.",
        ],
        practice:
          "Film the same simple action three ways: starting before it happens, starting exactly as it happens, and starting after it's already underway. Compare which feels most watchable in the first second.",
        applyIt:
          "Storyboard the first three seconds only of a short-form video idea, including any on-screen text, before planning the rest.",
        quiz: {
          question: "Why do text overlays in the first second matter on short-form video?",
          options: [
            { id: "a", label: "They're required by the platform" },
            { id: "b", label: "Many viewers watch with sound off, so text carries the hook", correct: true },
            { id: "c", label: "They replace the need for a good opening shot" },
            { id: "d", label: "They only matter for videos over one minute" },
          ],
        },
      },
      {
        slug: "editing-for-vertical-attention",
        title: "Editing for Vertical Attention",
        summary: "Cut faster and frame tighter than you would for widescreen.",
        body: [
          "Vertical framing shows less of a scene at once than widescreen, so cuts on short-form video tend to be tighter and closer on the subject, with less reliance on wide establishing shots to set context.",
          "Average cut length on high-retention short-form video is typically well under two seconds. Treat any shot held for three seconds or more as a deliberate choice, not a default, since attention on these platforms drops fast without a visual change.",
          "Captions are functionally part of the edit, not an afterthought added at the end: timing them to land on emphasis words, in sync with cuts, noticeably improves how watchable a video feels.",
        ],
        practice:
          "Take one minute of horizontal footage and re-edit a 15 second vertical cut from it, framing tighter and cutting more frequently than the original.",
        applyIt:
          "Edit a short-form video with captions timed to land precisely on emphasized words rather than added as a flat transcript afterward.",
        quiz: {
          question: "How does vertical short-form editing typically differ from widescreen editing?",
          options: [
            { id: "a", label: "It relies more on wide establishing shots" },
            { id: "b", label: "Cuts are generally tighter and more frequent", correct: true },
            { id: "c", label: "It never uses captions" },
            { id: "d", label: "There's no meaningful difference" },
          ],
        },
      },
      {
        slug: "trends-sounds-and-timing",
        title: "Trends, Sounds, and Timing",
        summary: "The sound often drives the edit, not the other way around.",
        body: [
          "On these platforms, audio (a trending sound, a song, a viral audio clip) frequently gets chosen before the footage, and the edit is cut to hit specific beats or lyrics in that audio rather than sound being added afterward to finished footage.",
          "Trends move fast: using a trending sound or format within its first few days of momentum performs meaningfully better than using the same trend two or three weeks later, once the algorithm has moved on to newer variations.",
          "Not every trend fits every account. The strongest short-form creators adapt a trend's structure to their own niche and voice rather than copying it exactly, which is also what keeps an account's content feeling coherent.",
        ],
        practice:
          "Pick a currently trending sound and identify the exact beat or lyric where a cut or reveal would land, before filming anything.",
        applyIt:
          "Edit a short video cut precisely to the beats of a chosen audio clip, adapting a trend's structure to your own subject matter instead of copying it directly.",
        quiz: {
          question: "On short-form platforms, how is audio commonly used in editing?",
          options: [
            { id: "a", label: "It's added last, after the visual edit is finished" },
            { id: "b", label: "It's often chosen first, and the edit is cut to match its beats", correct: true },
            { id: "c", label: "It's rarely used at all" },
            { id: "d", label: "It has no effect on how a video performs" },
          ],
        },
      },
    ],
  },
];

export function getTrack(slug: string): Track | undefined {
  return tracks.find((t) => t.slug === slug);
}

export function getLesson(trackSlug: string, lessonSlug: string) {
  const track = getTrack(trackSlug);
  const lesson = track?.lessons.find((l) => l.slug === lessonSlug);
  if (!track || !lesson) return null;
  return { track, lesson };
}

export function totalLessonCount(): number {
  return tracks.reduce((sum, t) => sum + t.lessons.length, 0);
}
