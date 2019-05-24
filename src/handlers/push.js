module.exports = (push) => {
    console.log({ 'push.pushType': push.pushType });
    console.log({ 'push.repo': push.repo });
    console.log({ 'push.branch': push.branch });
    console.log({ 'push.commit': push.commit });
    push.accept();
};
