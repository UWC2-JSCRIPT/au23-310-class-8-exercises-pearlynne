describe('Tests for the dealerShouldDraw function in BlackJack Game', () => {
	it('should return false with 10 and 9, dealer should not draw ', () => {
		const hand = [
			{ displayVal: '10', val: 10, suit: 'hearts' },
			{ displayVal: '9', val: 9, suit: 'hearts' },
		]
		const result = dealerShouldDraw(hand); 
		expect(result).toEqual(false);
	})

	it('should return true with Ace and 6, dealer should draw', () => {
		const hand = [
			{ displayVal: 'Ace', val: 11, suit: 'hearts' },
			{ displayVal: '6', val: 6, suit: 'hearts' },
		]
		const result = dealerShouldDraw(hand); 
		expect(result).toEqual(true);
	})

	it('should return false with 10, 6, Ace, dealer should not draw', () => {
		const hand = [
			{ displayVal: '10', val: 10, suit: 'hearts' },
			{ displayVal: '6', val: 9, suit: 'hearts' },
			{ displayVal: 'Ace', val: 11, suit: 'hearts' },
		]
		const result = dealerShouldDraw(hand); 
		expect(result).toEqual(false);
	})

	it('should return true with 2, 4, 2, 5, dealer should draw', () => {
		const hand = [
			{ displayVal: '2', val: 2, suit: 'hearts' },
			{ displayVal: '4', val: 4, suit: 'hearts' },
			{ displayVal: '2', val: 2, suit: 'spades' },
			{ displayVal: '5', val: 5, suit: 'spades' },
		]
		const result = dealerShouldDraw(hand); 
		expect(result).toEqual(true);
	})

})