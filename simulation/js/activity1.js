let maindiv = (document.getElementById('pannelcreate'));
let act1_div;
function activity1() {
    let text = `
    <div class='divide'>
        <div style='margin-top: 2vw;'>
            <br>
            <h4 class="center-text fs-20px fw-600">Conduction (Heat & Mass Transfer): Introduction to Conduction</h4>
            <br>
            <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
        </div>
    </div>`;
    maindiv.innerHTML = text;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    internal_calculation1();
}
function start_act1() {
    let temp_btn = (document.getElementById('temp-btn-1'));
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text('Activity 1', 'act1-div');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' style='margin-top: 2vw; margin: auto;' id='act1-div'>
      <h3>Activity 1</h3>
      <br>
      <img src="./images/image1.png" style="width:15%">
      <br>

      <p style="text-align:left">
         Estimate the heat loss through a red brick wall of length ${L_a1} m, height ${h_a1} m and thickness ${b_a1} m, if the temperature of the wall surface are maintained at ${T1_a1}&deg;C & ${T2_a1}&deg;C respectively. <br>
         The conductivity of brick is ${K_a1} W/m-K. <br>
         Also find the temperature at distance of ${x_a1} m from hot surface.

      </p>
      <br>

      <p class="fs-24px fb-600" style="text-align:left;">
         Heat transfer
      </p>

      <div id="act1-ht-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-4">
               $$Q = \\frac{KA}{b}(T_1 - T_2) =  $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act1-ht-inp' class='form-control fs-16px' /><span style="display:contents;"> W</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a1_verify_ht();' id='act1-vf-btn1'>Verify</button>
      </div>
   </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act1-div');
    }, 150);
    act1_div = document.getElementById('act1-div');
}
function internal_calculation1() {
    L_a1 = parseFloat(random(4.0, 6.0).toFixed(1));
    h_a1 = parseFloat(random(3.5, 4.5).toFixed(1));
    b_a1 = parseFloat(random(0.2, 0.35).toFixed(2));
    T1_a1 = random1(100, 111);
    T2_a1 = random1(35, 46);
    x_a1 = parseFloat(random(0.1, 0.15).toFixed(2));
    Q_a1 = ((K_a1 * L_a1 * h_a1) / b_a1) * (T1_a1 - T2_a1);
    Tx_a1 = T1_a1 - (x_a1 / b_a1) * (T1_a1 - T2_a1);
    console.log('L_a1', L_a1);
    console.log('h_a1', h_a1);
    console.log('b_a1', b_a1);
    console.log('T1_a1', T1_a1);
    console.log('T2_a1', T2_a1);
    console.log('x_a1', x_a1);
    console.log('Q_a1', Q_a1);
    console.log('Tx_a1', Tx_a1);
}
function a1_verify_ht() {
    let inp = (document.getElementById('act1-ht-inp'));
    console.log(Q_a1);
    if (!verify_values(parseFloat(inp.value), Q_a1)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-ht-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$Q = \\frac{kA}{b}(T_1 - T_2) =  ${parseFloat(Q_a1.toFixed(3))} \\ W $$
      </p>
      <br>
   `;
    act1_div.innerHTML += `
      <p class="fs-24px fb-600" style="text-align:left;">
         Now, x = ${x_a1}m
      </p>
      <p>
         $$
            \\frac{T_1 - T_x}{T_1 - T_2} = \\frac{x}{b}
         $$
      </p>
      <div id="act1-tx-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-4">
               $$T_x = T_1 - \\frac{x}{b} (T_1 - T_2)= $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act1-tx-inp' class='form-control fs-16px' /><span style="display:contents;">&deg;C</span>
            </div>

         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a1_verify_tx();' id='act1-vf-btn2'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a1_verify_tx() {
    let inp = (document.getElementById('act1-tx-inp'));
    console.log(Tx_a1);
    if (!verify_values(parseFloat(inp.value), Tx_a1)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-tx-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$T_x = T_1 - \\frac{x}{b} (T_1 - T_2) =  ${parseFloat(Tx_a1.toFixed(3))} \°C $$
      </p>
      <br>
   `;
    act1_div.innerHTML += `
      
         <button class='btn btn-info btn-sm std-btn' onclick='activity2(this);' id='act1-btn1'>Next</button>
      
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function activity_completed(btn) {
    btn && btn.remove();
    alert('Experiment Completed');
}
activity1();
//# sourceMappingURL=activity1.js.map