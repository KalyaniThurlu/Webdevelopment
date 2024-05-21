const data = [
  {
    title: "Spongebob Squarepants",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeUTOfI1NenpdpNvh0T_o494ZQK79dCmiFfBx8a5iu5UPJ0f_O5l_grsEMMdFW-P_fk3k&usqp=CAU",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quamLorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quam",
  },
  {
    title: "Chota Bheem",
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/404/8937ea156344861.Y3JvcCwxMzg3LDEwODUsMjY3LDA.jpg",

    description:
      "ipisicing elit. Reprehenderit, quamLorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quam",
  },
  {
    title: "Mickey Mouse",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_aIH92G1Ww6grDmZOux7w6b36mw2u2hcSks5WYtiLGg&s",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quamLorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quam",
  },
  {
    title: "Mooshak Gungun",
    image:
      "https://i.pinimg.com/564x/46/94/73/469473fe7889a93d10a2a47eec5d193a.jpg",

    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Chota Bheem",
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/404/8937ea156344861.Y3JvcCwxMzg3LDEwODUsMjY3LDA.jpg",

    description:
      "ipisicing elit. Reprehenderit, quamLorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quam",
  },
  {
    title: "Spongebob Squarepants",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeUTOfI1NenpdpNvh0T_o494ZQK79dCmiFfBx8a5iu5UPJ0f_O5l_grsEMMdFW-P_fk3k&usqp=CAU",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quamLorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quam",
  },
  {
    title: "Spongebob Squarepants",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeUTOfI1NenpdpNvh0T_o494ZQK79dCmiFfBx8a5iu5UPJ0f_O5l_grsEMMdFW-P_fk3k&usqp=CAU",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quamLorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quam",
  },
  {
    title: "Chota Bheem",
    image:
      "https://mir-s3-cdn-cf.behance.net/projects/404/8937ea156344861.Y3JvcCwxMzg3LDEwODUsMjY3LDA.jpg",

    description:
      "ipisicing elit. Reprehenderit, quamLorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quam",
  },
];

const maindiv = document.getElementById("library");

function displayData(data) {
  data.forEach((element) => {
    const sameDiv = document.createElement("div"); //<div></div>
    sameDiv.classList.add("cartoon");

    const heading = document.createElement("h2");
    heading.textContent = element.title;

    const image = document.createElement("img");
    image.src = element.image;
    image.alt = element.title;

    const description = document.createElement("p");
    description.textContent = element.description;

    sameDiv.append(heading, image, description);
    maindiv.appendChild(sameDiv);
  });
}

displayData(data);
