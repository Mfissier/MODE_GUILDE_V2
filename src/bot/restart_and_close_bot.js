const reset_Bot = (channel) => {
    channel.send('Resetting...')
    .then(msg => client.destroy())
    .then(() => client.login('Njk0MTgwMzMzODgwNDc1NjY4.XoH5Wg.nFKkM80vfVSOZASC4ZVcVWy0tZY'));
}


const destroy_Bot = (channel) =>  {
    channel.send('Destroying Bot... sorry...')
    .then(msg => client.destroy())
  }

  exports.reset_Bot = reset_Bot;
  exports.destroy_Bot = destroy_Bot;

