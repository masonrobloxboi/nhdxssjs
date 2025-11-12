<script>
document.addEventListener("keydown", function(event) {
  if (event.key === "m") {
    document.open();
    document.write(`
<!DOCTYPE html>
<html>
  <body>
    <input id="url" value="https://google.com/?igu=1" placeholder="Enter a URL" style="width: 300px;" />
    <button id="openBtn">Open unbl0cked tab!</button>

    <script>
      function opentab() {
        const url = document.getElementById('url').value;
        if (!url) return alert('Please enter a URL.');
        const win = window.open('about:blank');
        if (!win) return alert('Popup blocked!');
        win.document.write(\`<!DOCTYPE html>
<html>
<head>
<style>
html, body, embed {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  border: none;
  overflow: hidden;
}
</style>
</head>
<body>
  <embed src="\${url}" type="text/html"></embed>
</body>
</html>\`);
        win.document.close();
      }

      document.getElementById('openBtn').addEventListener('click', opentab);
    <\/script>
  </body>
</html>
    `);
    document.close();
  }
});
</script>
