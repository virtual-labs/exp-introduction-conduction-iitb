let act2_div;
function activity2(btn) {
    btn && btn.remove();
    internal_calculation2();
    let btn_text = get_collapse_btn_text('Activity 2', 'act2-div');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' style='margin-top: 2vw; margin: auto;' id='act2-div'>
      <h3>Activity 2</h3>
      <br>
      <img src="./images/image2.png" style="width:30%">
      <br>
      <br>
      <p style="text-align:left">
         A hollow cylinder ${L_a2} m long, the inner and outer surface temperature are ${T1_a2}&deg;C and ${T2_a2}&deg;C. <br>
         If the inner and outer radii are ${r1_cm_a2} cm & ${r2_cm_a2} cm. <br>
         Find the heat transfer. Also find the temperature at radius ${r_cm_a2} cm. <br>
         Take conductivity of material ${K_a2}W/m-K.
      </p>
      <br>
      <p class="fs-24px fb-600" style="text-align:left;">
         Log mean area
      </p>
      <div id="act2-Ae-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-4">
               $$Ae = \\frac{2\πL(r_2 - r_1)}{\\ln \\left(\\frac{r_2}{r_1}\\right)} =  $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act2-Ae-inp' class='form-control fs-16px' /><span style="display:contents;"> m<sup>2</sup></span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a2_verify_Ae();' id='act2-vf-btn1'>Verify</button>
      </div>
   </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act2-div');
    }, 150);
    act2_div = document.getElementById('act2-div');
}
function internal_calculation2() {
    T1_a2 = random1(100, 111);
    T2_a2 = random1(25, 36);
    r1_cm_a2 = parseFloat(random(4.0, 6.0).toFixed(1));
    r2_cm_a2 = parseFloat(random(10.0, 12.0).toFixed(1));
    r_cm_a2 = parseFloat(random(7.0, 9.0).toFixed(1));
    r1_m_a2 = parseFloat((r1_cm_a2 / 100).toFixed(3));
    r2_m_a2 = parseFloat((r2_cm_a2 / 100).toFixed(3));
    r_m_a2 = parseFloat((r_cm_a2 / 100).toFixed(3));
    Ae_a2 =
        (2 * Math.PI * L_a2 * (r2_m_a2 - r1_m_a2)) /
            Math.log(r2_m_a2 / r1_m_a2);
    Q_a2 = K_a2 * Ae_a2 * ((T1_a2 - T2_a2) / (r2_m_a2 - r1_m_a2));
    Tr_a2 =
        T1_a2 -
            (Math.log(r_m_a2 / r1_m_a2) / Math.log(r2_m_a2 / r1_m_a2)) *
                (T1_a2 - T2_a2);
    console.log('T1_a2', T1_a2);
    console.log('T2_a2', T2_a2);
    console.log('r1_cm_a2', r1_cm_a2);
    console.log('r2c_m_a2', r2_cm_a2);
    console.log('r_cm_a2', r_cm_a2);
    console.log('r1_m_a2', r1_m_a2);
    console.log('r2_m_a2', r2_m_a2);
    console.log('r_m_a2', r_m_a2);
    console.log('Ae_a2', Ae_a2);
    console.log('Q_a2', Q_a2);
    console.log('Tr_a2', Tr_a2);
}
function a2_verify_Ae() {
    let inp = (document.getElementById('act2-Ae-inp'));
    console.log(Ae_a2);
    if (!verify_values(parseFloat(inp.value), Ae_a2)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-Ae-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$Ae = \\frac{2\πL(r_2 - r_1)}{\\ln \\left(\\frac{r_2}{r_1}\\right)} =  ${parseFloat(Ae_a2.toFixed(3))} \\ m^2 $$
      </p>
      <br>
   `;
    act2_div.innerHTML += `
      <p class="fs-24px fb-600" style="text-align:left;">
         Heat transfer
      </p>
      <div id="act2-ht-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-4">
               $$Q = KAe\\left(\\frac{T_1 - T_2}{r_2 - r_1}\\right) = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act2-ht-inp' class='form-control fs-16px' /><span style="display:contents;"> W</span>
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a2_verify_ht();' id='act2-vf-btn2'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a2_verify_ht() {
    let inp = (document.getElementById('act2-ht-inp'));
    console.log(Q_a2);
    if (!verify_values(parseFloat(inp.value), Q_a2)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-ht-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$Q = kAe\\left(\\frac{T_1 - T_2}{r_2 - r_1}\\right)  =  ${parseFloat(Q_a2.toFixed(3))} W $$
      </p>
      <br>
   `;
    act2_div.innerHTML += `
         <p class="fs-24px fb-600" style="text-align:left;">
            Now, r = ${r_m_a2} m 
         </p>
         <p>
            $$
               \\frac{T_1 - T_r}{T_1 - T_2} = \\frac{\\ln\\left(\\frac{r}{r_1}\\right)}{\\ln\\left(\\frac{r_2}{r_1}\\right)}
            $$
         </p>
         <div id="act2-tr-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-5">
               $$T_r = T_1 - \\frac{\\ln\\left(\\frac{r}{r_1}\\right)}{\\ln\\left(\\frac{r_2}{r_1}\\right)}(T_1 - T_2) =  $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act2-tr-inp' class='form-control fs-16px' /><span style="display:contents;">&deg;C</span>
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a2_verify_tr();' id='act2-vf-btn3'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a2_verify_tr() {
    let inp = (document.getElementById('act2-tr-inp'));
    console.log(Tr_a2);
    if (!verify_values(parseFloat(inp.value), Tr_a2)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-tr-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$T_r = T_1 - \\frac{\\ln\\left(\\frac{r}{r_1}\\right)}{\\ln\\left(\\frac{r_2}{r_1}\\right)}(T_1 - T_2) =  ${parseFloat(Tr_a2.toFixed(3))}\°C $$
      </p>
      <br>
   `;
    act2_div.innerHTML += `

         <button class='btn btn-info btn-sm std-btn' onclick='activity3(this);' id='act2-btn1'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
// activity2();
//# sourceMappingURL=activity2.js.map