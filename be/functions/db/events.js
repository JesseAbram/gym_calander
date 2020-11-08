exports.updateViews = async (
    database,
    currentEvents
  ) => {
    const updates = {}
    const path = `Events`
    updates[path] = currentEvents
    return database.ref().update(currentEvents)
  }

  exports.getEvents = async (
    database
  ) => {
    const response = await database.ref().once('value');
    console.log('response', response.val())
    return response.val();
  }