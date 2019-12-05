<template>
  <div class="home">
    <Header />
    <div class="spread">
      <h1>Traffic Overview</h1>
    </div>
    <Background />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Background from "@/components/Background.vue";
import {db} from "@/firebase";

export default {
  name: "home",
  components: {
    Header,
    Background
  },
  firestore () {
  return {
    traffic: {
        // collection reference.
        ref: db.collection('persons'),
        // Bind the collection as an object if you would like to.
        objects: true,
        resolve: (data) => {
            // collection is resolved
        },
        reject: (err) => {
            // collection is rejected
        }
      }
    }
  },
};
</script>
<style lang="scss" scoped>
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
</style>
