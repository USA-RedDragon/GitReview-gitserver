module.exports = (fetch) => {
    console.log(`fetch ${fetch.commit}`);
    fetch.accept();
};
