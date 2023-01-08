export const selectContacts = state => state.contacts;
export const selectFilter = state => state.filter.filter;

// export const selectContacts = state => state.contacts.contacts;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;
