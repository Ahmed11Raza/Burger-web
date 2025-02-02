export const app = () => {
    const header = document.createElement('header');
    header.innerHTML = '<h1>Welcome to My Website</h1>';
    document.body.appendChild(header);

    const main = document.createElement('main');
    main.innerHTML = '<p>This is the main content area.</p>';
    document.body.appendChild(main);
};

app();