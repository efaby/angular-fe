export let settings = {
  columns: {
    _id: {
      title: 'ID',
      filter: false,

    },
    name: {
      title: 'Full Name',
      filter: false
    },
    email: {
      title: 'Email',
      filter: false
    },
    password: {
      title: 'Password',
      filter: false
    }
  },
  edit: {
    confirmSave:true,
    editButtonContent: '<i class="ti-pencil text-info m-r-10"></i>',
    saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
    cancelButtonContent: '<i class="ti-close text-danger"></i>'
  },
  delete: {
    confirmDelete:true,
    deleteButtonContent: '<i class="ti-trash text-danger m-r-10"></i>',
    saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
    cancelButtonContent: '<i class="ti-close text-danger"></i>'
  },
  add: {
    confirmCreate:true
  }
};


