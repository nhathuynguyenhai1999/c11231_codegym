
let arrayImg = ['https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/361858723_2073901656284356_8045243738568048809_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=wf9oRLvjVC8AX-Lbibp&_nc_ht=scontent.fhan20-1.fna&oh=00_AfA7XvQCJo-rmaraecYCf7drl-Z-oZ2WSAnqPK8cHETYKQ&oe=65997482', 'https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/353813900_2050484081959447_3698497113010414433_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=x0d2Ku-zzsQAX9dbGv_&_nc_ht=scontent.fhan20-1.fna&oh=00_AfCJ1X1ARIbx-k5dJTBU17AsxQ9G6UR7wCZY81rOccJHDQ&oe=6599649F', 'https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/351513514_817638946385041_5632853341676894797_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=ccebPbtLXAUAX9bbyqc&_nc_ht=scontent.fhan20-1.fna&oh=00_AfAt6gA8XZdTp5WLNXTMK8z93R5foc2LJhnXuYPzzFqM0A&oe=659A0EF4'];
function edit(index) {
  let img = prompt("Nhập địa chỉ kèo ngon");
  arrayImg[index] = img;
  hienthi();
}

function remove(index) {
  arrayImg.splice(index,1);
  hienthi();
}
function hienthi() {
  let huy = "";
  // let arrayimg = JSON.parse(document.getElementById("address").value);
  // Assuming that arrayImg is an array, if it's a string, you might need to parse it into an array first
  // let arrayImg = JSON.parse(document.getElementById("address").value);

  for (let i = 0; i < arrayImg.length; i++) {
    huy += `<tr>
      <td>${i + 1}</td>
      <td>
        <img src='${arrayImg[i]}' width="100px" height="120px"/>
      </td>
      <td>
        <button onclick="edit(${i})">Thêm</button>
      </td>
      <td>
        <button onclick="remove(${i})">Xóa</button>
      </td>
    </tr>`;
  }
  document.getElementById("main-content").innerHTML = huy;
  // You might want to do something with the 'huy' variable, like appending it to a table or some other element.
}



function addHang() {
  let img = prompt("Nhập địa chỉ kèo ngon");
  arrayImg.push(img);
  hienthi();
}

hienthi();
