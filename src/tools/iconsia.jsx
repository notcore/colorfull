useEffect(() => {
  const wm = document.createElement("div");
  wm.innerText = "© by davadev.com";
  wm.style.position = "fixed";
  wm.style.bottom = "8px";
  wm.style.left = "8px";
  wm.style.fontSize = "12px";
  wm.style.opacity = "0.3";
  wm.style.pointerEvents = "none";
  wm.style.zIndex = "9999";
  wm.style.userSelect = "none";
  wm.style.fontFamily = "monospace";
  document.body.appendChild(wm);
}, []);
