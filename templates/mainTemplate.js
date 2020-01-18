function mainTemplate(data){
    `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="https://kit.fontawesome.com/6bc802c1b6.js" crossorigin="anonymous"></script>
    <style>
        * {
            padding: 0;
            margin: 0;
        }

        body {
            min-height: 100vh;
        }

        header {
            height: 15vh;
            text-align: center;
            background-color: red;
            color: white;
            padding: 0;
            margin: 0;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .conatainer {
            width: 100%;
            padding: 0;
            margin: 0;
            margin-top: 10%;
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            flex-direction: row;
        }

        .card {
            display: flex;
            flex-direction: column;
        }

        .cardheader {
            background-color: blue;
            color: white;

        }

        .cardbody {
            background: grey;

        }
    </style>
</head>

<body>
    <header>
        <h1>My Team</h1>
    </header>
    <div class="conatainer">
        ${data}
    </div>

</body>

</html>`
}