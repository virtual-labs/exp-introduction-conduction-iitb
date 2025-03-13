let act3_div;
function activity3(btn) {
    btn && btn.remove();
    internal_calculation3();
    let btn_text = get_collapse_btn_text('Activity 3', 'act3-div');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' style='margin-top: 2vw; margin: auto;' id='act3-div'>
      <h3>Activity 3</h3>
      <br>
      <img src="./images/image3.png" style="width:30%">
      <br>
      <br>
      <p style="text-align:left">
         The inner and outer radius of sphere are ${r1_cm_a3} cm & ${r2_cm_a3} cm, respectively. <br>
         Inner surface and outer surface is maintained at ${T1_a3}&deg;C & ${T2_a3}&deg;C, respectively. K = ${K_a3} W/m-K. <br>
         Find the heat transfer and temperature at radius ${r_cm_a3} cm.
      </p>
      <br>
      <p class="fs-24px fb-600" style="text-align:left;">
         Geometric mean area
      </p>
      <div id="act3-Ae-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-4">
               $$Ae = 4\πr_1r_2 =  $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act3-Ae-inp' class='form-control fs-16px' /><span style="display:contents;"> m<sup>2</sup></span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a3_verify_Ae();' id='act3-vf-btn1'>Verify</button>
      </div>
   </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act3-div');
    }, 150);
    act3_div = document.getElementById('act3-div');
}
function internal_calculation3() {
    T1_a3 = random1(100, 111);
    T2_a3 = random1(30, 46);
    r1_cm_a3 = parseFloat(random(5.0, 6.0).toFixed(1));
    r2_cm_a3 = parseFloat(random(10.0, 12.0).toFixed(1));
    r_cm_a3 = parseFloat(random(7.0, 8.0).toFixed(1));
    r1_m_a3 = parseFloat((r1_cm_a3 / 100).toFixed(3));
    r2_m_a3 = parseFloat((r2_cm_a3 / 100).toFixed(3));
    r_m_a3 = parseFloat((r_cm_a3 / 100).toFixed(3));
    Ae_a3 = 4 * Math.PI * r1_m_a3 * r2_m_a3;
    Q_a3 = K_a3 * Ae_a3 * ((T1_a3 - T2_a3) / (r2_m_a3 - r1_m_a3));
    Tr_a3 =
        T1_a3 -
            ((1 / r1_m_a3 - 1 / r_m_a3) / (1 / r1_m_a3 - 1 / r2_m_a3)) *
                (T1_a3 - T2_a3);
    console.log('T1_a3', T1_a3);
    console.log('T2_a3', T2_a3);
    console.log('r1_cm_a3', r1_cm_a3);
    console.log('r2_cm_a3', r2_cm_a3);
    console.log('r_cm_a3', r_cm_a3);
    console.log('r1_m_a3', r1_m_a3);
    console.log('r2_m_a3', r2_m_a3);
    console.log('r_m_a3', r_m_a3);
    console.log('Ae_a3', Ae_a3);
    console.log('Q_a3', Q_a3);
    console.log('Tr_a3', Tr_a3);
}
function a3_verify_Ae() {
    let inp = (document.getElementById('act3-Ae-inp'));
    console.log(Ae_a3);
    if (!verify_values(parseFloat(inp.value), Ae_a3)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act3-Ae-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$Ae = 4\πr_1r_2 =  ${parseFloat(Ae_a3.toFixed(3))} \\ m^2 $$
      </p>
      <br>
   `;
    act3_div.innerHTML += `
      <p class="fs-24px fb-600" style="text-align:left;">
         Heat transfer
      </p>
      <div id="act3-ht-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-4">
               $$Q = KAe\\left(\\frac{T_1 - T_2}{r_2 - r_1}\\right) = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act3-ht-inp' class='form-control fs-16px' /><span style="display:contents;"> W</span>
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a3_verify_ht();' id='act3-vf-btn2'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a3_verify_ht() {
    let inp = (document.getElementById('act3-ht-inp'));
    console.log(Q_a3);
    if (!verify_values(parseFloat(inp.value), Q_a3)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act3-ht-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$Q = kAe\\left(\\frac{T_1 - T_2}{r_2 - r_1}\\right)  =  ${parseFloat(Q_a3.toFixed(3))} W $$
      </p>
      <br>
   `;
    act3_div.innerHTML += `
         <p class="fs-24px fb-600" style="text-align:left;">
            Now, r = ${r_m_a3} m 
         </p>
         <p>
            $$
               \\frac{T_1 - T_r}{T_1 - T_2} = \\frac{\\frac{1}{r_1} - \\frac{1}{r}}{\\frac{1}{r_1} - \\frac{1}{r_2}}
            $$
         </p>
         <div id="act3-tr-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-5">
               $$T_r = T_1 - \\frac{\\frac{1}{r_1} - \\frac{1}{r}}{\\frac{1}{r_1} - \\frac{1}{r_2}} (T_1 - T_2) =  $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act3-tr-inp' class='form-control fs-16px' /><span style="display:contents;">&deg;C</span>
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a3_verify_tr();' id='act3-vf-btn3'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a3_verify_tr() {
    let inp = (document.getElementById('act3-tr-inp'));
    console.log(Tr_a3);
    if (!verify_values(parseFloat(inp.value), Tr_a3)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act3-tr-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$T_r = T_1 - \\frac{\\frac{1}{r_1} - \\frac{1}{r}}{\\frac{1}{r_1} - \\frac{1}{r_2}} (T_1 - T_2) =  ${parseFloat(Tr_a3.toFixed(3))}\°C $$
      </p>
      <br>
   `;
    act3_div.innerHTML += `

         <button class='btn btn-info btn-sm std-btn' onclick='activity_completed(this);' id='act3-btn1'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
// activity3();
//# sourceMappingURL=activity3.js.map