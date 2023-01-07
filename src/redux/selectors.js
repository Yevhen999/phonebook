export const contactsSelector = state => state.contacts;
export const filteredContactsSelector = state => state.filter.filter;

export const getContacts = state => state.contacts.contacts;

export const getIsLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;

// export const getStatusFilter = state => state.filters.status;
