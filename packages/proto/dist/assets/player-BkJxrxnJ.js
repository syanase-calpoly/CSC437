import{d as l,a as o}from"./reset.css-qamkHA0E.js";import{H as n,W as d}from"./header-DTag00fy.js";import{P as c}from"./player-card-_f3eTCoQ.js";l({"warriors-nav":d,"warriors-header":n,"mu-auth":o.Provider,"player-card":c});window.addEventListener("DOMContentLoaded",async()=>{const s=new URLSearchParams(window.location.search).get("playerid"),r=document.getElementById("player-detail");if(!s){r.innerHTML='<div class="error">No player specified.</div>';return}try{const t=await fetch(`http://localhost:3000/api/player/${s}`);if(!t.ok)throw new Error("Player not found");const a=await t.json();let e=a.stats;if(typeof e=="string")try{e=JSON.parse(e)}catch{}r.innerHTML=`
                <img class="player-img-large" src="${a.playerImg||"/images/default-player.png"}" alt="${a.name}">
                <div class="player-info">
                  <div class="player-name">${a.name}</div>
                  <div class="player-meta">
                    #${a.number} &bull; ${a.position}
                  </div>
                  <div class="player-bio">${a.bio||"No bio available."}</div>
                  ${e&&typeof e=="object"?`
                    <table class="player-stats-table">
                      <tr>
                        ${Object.keys(e).map(i=>`<th>${i}</th>`).join("")}
                      </tr>
                      <tr>
                        ${Object.values(e).map(i=>`<td>${i}</td>`).join("")}
                      </tr>
                    </table>
                  `:""}
                </div>
              `}catch{r.innerHTML='<div class="error">Could not load player details.</div>'}});
