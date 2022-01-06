const date = localStorage.getItem("date");

function sendEmail() {
  const room = document.getElementById("roomType").innerHTML;
  const time = document.getElementById("saatler").value;
  const player = document.getElementById("oyuncular").value;
  const name = document.getElementById("adsoyad").value;
  const email = document.getElementById("eposta").value;
  const tel = document.getElementById("telefon").value;
  const message = document.getElementById("message").value;
  var onay_kontrol = document.querySelector("#onaylama");
  var onaylama = onay_kontrol.checked;

  if (time == 0) {
    swal({
      title: "Opps!",
      text: "Please select a time.",
      type: "error",
    });
    return false;
  } else if (oyuncular == 0) {
    swal({
      title: "Opps!",
      text: "Please select the number of players.",
      type: "error",
    });
    return false;
  } else if (name == "") {
    swal({
      title: "Opps!",
      text: "Please enter your name and surname.",
      type: "error",
    });
    return false;
  } else if (email == "") {
    swal({ title: "Opps!", text: "Please enter e-mail.", type: "error" });
    return false;
  } else if (tel == "") {
    swal({
      title: "Opps!",
      text: "Please enter a phone.",
      type: "error",
    });
    return false;
  } else if (message == "false") {
    swal({
      title: "Opps!",
      text: "You must read and accept all terms.",
      type: "error",
    });
    return false;
  } else if (onaylama == false) {
    swal({
      title: "Opps!",
      text: "You must read and accept all terms.",
      type: "error",
    });
  } else {
    const html = `
  <div id=":16h" class="ii gt" jslog="20277; u014N:xr6bB; 4:W251bGwsbnVsbCxbXV0."><div id=":1rh" class="a3s aiL "><div class="adM">
      </div><table width="100%" border="0" cellpadding="0" cellspacing="0">
        <tbody><tr>
          <td colspan="3" width="100%" height="40" style="background:#333;font-family:Arial;color:#fff;padding-left:10px;font-size:16px;font-weight:bold">Reservation</td>
        </tr>

        <tr style="border-bottom:1px solid #ccc">
          <td width="30%" height="36" style="font-family:Arial;color:#666;padding-left:10px;font-size:14px;font-weight:bold">Date</td>
          <td width="10%" height="36" style="font-family:Arial;color:#666;text-align:center;font-size:14px;font-weight:bold">:</td>
          <td width="60%" height="36" style="font-family:Arial;color:#666;font-size:14px;font-weight:normal">${date}</td>
        </tr>

        <tr style="border-bottom:1px solid #ccc">
          <td width="30%" height="36" style="font-family:Arial;color:#666;padding-left:10px;font-size:14px;font-weight:bold">Time</td>
          <td width="10%" height="36" style="font-family:Arial;color:#666;text-align:center;font-size:14px;font-weight:bold">:</td>
          <td width="60%" height="36" style="font-family:Arial;color:#666;font-size:14px;font-weight:normal">${time}</td>
        </tr>

        <tr style="border-bottom:1px solid #ccc">
          <td width="30%" height="36" style="font-family:Arial;color:#666;padding-left:10px;font-size:14px;font-weight:bold">player</td>
          <td width="10%" height="36" style="font-family:Arial;color:#666;text-align:center;font-size:14px;font-weight:bold">:</td>
          <td width="60%" height="36" style="font-family:Arial;color:#666;font-size:14px;font-weight:normal">${player}</td>
        </tr>

        <tr style="border-bottom:1px solid #ccc">
          <td width="30%" height="36" style="font-family:Arial;color:#666;padding-left:10px;font-size:14px;font-weight:bold">Room</td>
          <td width="10%" height="36" style="font-family:Arial;color:#666;text-align:center;font-size:14px;font-weight:bold">:</td>
          <td width="60%" height="36" style="font-family:Arial;color:#666;font-size:14px;font-weight:normal">${room}</td>
        </tr>
                          
        <tr style="border-bottom:1px solid #ccc">
          <td width="30%" height="36" style="font-family:Arial;color:#666;padding-left:10px;font-size:14px;font-weight:bold">Name Surname</td>
          <td width="10%" height="36" style="font-family:Arial;color:#666;text-align:center;font-size:14px;font-weight:bold">:</td>
          <td width="60%" height="36" style="font-family:Arial;color:#666;font-size:14px;font-weight:normal">${name}</td>
        </tr>
                                                
        <tr style="border-bottom:1px solid #ccc">
          <td width="30%" height="36" style="font-family:Arial;color:#666;padding-left:10px;font-size:14px;font-weight:bold">E-Mail</td>
          <td width="10%" height="36" style="font-family:Arial;color:#666;text-align:center;font-size:14px;font-weight:bold">:</td>
          <td width="60%" height="36" style="font-family:Arial;color:#666;font-size:14px;font-weight:normal"><a href="mailto:navoiy498@gmail.com" target="_blank">${email}</a></td>
        </tr>
                                    
        <tr style="border-bottom:1px solid #ccc">
          <td width="30%" height="36" style="font-family:Arial;color:#666;padding-left:10px;font-size:14px;font-weight:bold">Phone</td>
          <td width="10%" height="36" style="font-family:Arial;color:#666;text-align:center;font-size:14px;font-weight:bold">:</td>
          <td width="60%" height="36" style="font-family:Arial;color:#666;font-size:14px;font-weight:normal">${tel}</td>
        </tr>
                                    
        <tr style="border-bottom:1px solid #ccc">
          <td width="30%" height="36" style="font-family:Arial;color:#666;padding-left:10px;font-size:14px;font-weight:bold">Message</td>
          <td width="10%" height="36" style="font-family:Arial;color:#666;text-align:center;font-size:14px;font-weight:bold">:</td>
          <td width="60%" height="36" style="font-family:Arial;color:#666;font-size:14px;font-weight:normal">${message}</td>
        </tr>
        
                                    
      </tbody></table><div class="yj6qo"></div><div class="adL">

</div></div></div>
  `;

    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "jumaboyevqobiljon17@gmail.com",
      Password: "B23793D7C1E7E595BA298324EAE42A380FD3",
      To: "jumaboyevqobiljon784@gmail.com",
      From: "jumaboyevqobiljon17@gmail.com",
      Subject: "escapehouse.uz",
      Body: html,
    }).then((message) => {
      if ((message = "Ok")) {
        swal("Success", "You clicked the button!", "success");
        window.location.href = "../../index.html";
        return true;
      } else {
        swal({
          title: "Opps!",
          text: "Please select a time.",
          icon: "error",
        });
        return false;
      }
    });
  }
}

const insertDate = document.getElementById("dateOfGame");

insertDate.innerHTML = date;

function saveDate() {
  const date = document.querySelector(".js-date").value;
  localStorage.setItem("date", date);
}
