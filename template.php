<!DOCTYPE html>
<html lang="en-us">
<head>
  <meta charset="UTF-8">
  <title>Blank Notes | Cornell Notes Creator</title>
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <link rel="stylesheet" href="resources/primary.css">
  <script src="resources/controls.js"></script>
  <script src="resources/resize.js"></script>
</head>
<body>
  <noscript>
    <div class="error-cont">
      <h1>This site requires JavaScript</h1>
      <p>Please make sure you are using a modern browser and have JavaScript enabled.</p>
    </div>
  </noscript>
  <div class="small-screen">
    <div class="error-cont">
      <h1>Your screen is too small</h1>
      <p>This site requires screens with a minimum width of 700px to function correctly.
        <br>Please make sure your browser is sized correctly and that your screen's resolution settings are correct.
        <br>If you are using a mobile device, please switch to a larger device (ex: desktop, laptop, tablet, etc.).</p>
      <div class="diagnostics">
        <p><b>Don't think you shouldn't be getting this error?</b><br>Please file an issue report <a href="https://github.com/Sirius-Development/cornell-notes-creator/issues/new?assignees=Sirius-Development&labels=bug&template=bug_report.md&title=" target="_blank">here</a> if you suspect this is an error.</p>
        <p><b>MAKE SURE TO INCLUDE THIS INFORMATION IN THE "ADDITIONAL CONTEXT" SECTION:</b>
        Detected resolution: <span id="resolution"></span></p>
      </div>
    </div>
    <script>
      function screenSize() {
        var width = window.innerWidth;
        document.getElementById("resolution").innerHTML = width + 'px';
      }
      window.onload = function() {screenSize()}
      window.addEventListener('resize', screenSize)
    </script>
  </div>
  <div id="alert"></div>
  <div id="controlbar">
    <div id="modeswitch">
      <button onclick="dark()" id="dark">Switch to dark mode</button>
    </div>
    <div>
      <table>
        <thead>
          <th>Font Size</th>
        </thead>
        <tbody>
          <td>
            <div id="font-cons">
              <button style="display:inline-block;" onclick="fontIncrease()">+</button>
              <p style="display:inline-block;width:70%;text-align:center;">Current: <span id="fontSize">1.1</span></p>
              <button style="display:inline-block;"  onclick="fontDecrease()">-</button>
            </div>
          </td>
        </tbody>
      </table>
    </div>
    <div>
      <table>
        <thead>
          <th colspan="2">Section Controls</th>
        </thead>
        <tbody>
          <tr id="section-cons">
            <td style="padding-right:2%;" onclick="removeSectionAlert(0)"><button id="removeMain">Remove previous section</button></td>
            <td style="padding-left:2%;" onclick="addSection(1)"><button id="addMain">Add another section</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <form>
  <main>
    <section class="header">
      <input type="text" maxlength="75" placeholder="Enter a title..." name="title" autocomplete="off">
    </section>
    <div id="mainwrapper">
      <section class="main" id="main0">
        <div class="mainidea">
          <textarea placeholder="Main idea..." id="mainIdea0" oninput="resizeMainIdea(0)" name="mainIdea"></textarea>
        </div>
        <div class="notes">
          <textarea placeholder="Notes..." id="notes0" oninput="resizeNotes(0)" name="notes"></textarea>
        </div>
      </section>
    </div>
    <section class="summary">
      <textarea placeholder="Summary..." id="summary" oninput="resizeSummary()" name="summary"></textarea>
    </section>
  </main>
</form>
</body>
</html>