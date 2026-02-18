import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5E6D3', // tan background
  },

  header: {
    backgroundColor: '#1B4332', // forest green
    paddingTop: 50,
    paddingBottom: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },

  subtitle: {
    fontSize: 14,
    color: '#DCC3A5', // soft tan accent
  },

  content: {
    padding: 20,
  },

  section: {
    backgroundColor: '#EAD7C3', // soft tan card
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1B4332',
    marginBottom: 8,
  },

  description: {
    fontSize: 14,
    color: '#5A5A5A',
    marginBottom: 16,
  },

  button: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 50,
  },

  generateButton: {
    backgroundColor: '#1B4332',
  },

  shareButton: {
    backgroundColor: '#1B4332',
  },

  driveButton: {
    backgroundColor: '#1B4332',
  },

  disabledButton: {
    backgroundColor: '#C9B8A6',
  },

  buttonText: {
    color: '#F5E6D3',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
  },

  statusText: {
    marginTop: 12,
    color: '#1B4332',
    fontSize: 14,
    fontWeight: '500',
  },

  infoSection: {
    backgroundColor: '#EAD7C3',
    borderRadius: 16,
    padding: 16,
    marginBottom: 40,
    borderLeftWidth: 5,
    borderLeftColor: '#1B4332',
  },

  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1B4332',
    marginBottom: 8,
  },

  infoText: {
    fontSize: 14,
    color: '#2C2C2C',
    lineHeight: 22,
  },

  imageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#DCC3A5',
  },

  thumbnail: {
    width: 80,
    height: 80,
    borderRadius: 12,
    marginRight: 12,
    backgroundColor: '#F5E6D3',
  },

  imageInfo: {
    flex: 1,
  },

  imageText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2C2C2C',
    marginBottom: 6,
  },

  removeButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#FFB4B4',
  },

  removeButtonText: {
    color: '#1B4332',
    fontSize: 12,
    fontWeight: '600',
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#DCC3A5',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 12,
    fontSize: 16,
    color: '#1B4332',
    backgroundColor: '#fbf2e7',
  },
});
