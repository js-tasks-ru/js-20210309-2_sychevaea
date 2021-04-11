export default class ColumnChart {
	constructor (config = {data: [], label: '', value: 0, link: '' }) {
		this.chartHeight = 50;
		const defaultConfig = {
			data: [],
			label: '',
			value: 0,
			link: ''
		};
		
		if (!config) {
			this.config = defaultConfig
		} else {
			this.config = config;
		}
		
		if (!this.config.data) {
			this.config.data = []
		}
		this.render();
	}
	
	dataWithProportion() {
		const max = this.config.data.reduce(function(max, current){
			return ( current > max) ? current : max;
		}, 0);
		
		const valueOfDevision =  max / this.chartHeight;
				
		return this.config.data.map(function (item) {
			let proportion = Math.floor(item/valueOfDevision);
				
			return {
				value: item,
				proportion: proportion,
				percent: ((item*100)/max).toFixed(0)
			};
		});
	}
	
	set chartHeight(value) {
		if(typeof value === "number") {
			this._chartHeight = value;
		} else {
			this._chartHeight = 0;
		};
	}
	
	get chartHeight() {
		return this._chartHeight;
	}
	
	createBody() {
		 let chartBody = document.createElement('div');
		 chartBody.innerHTML = `
			<div data-element="body" class="column-chart__chart"></div>
		 `;
		 chartBody = chartBody.lastElementChild;

		 this.dataWithProportion().map(function(item) {
			 let elem = document.createElement('div');
			 elem.innerHTML = `
				<div style="--value: ${item.proportion}" data-tooltip="${item.percent}%"></div>
			 `;
			 elem = elem.lastElementChild;
			 chartBody.append(elem);
		 });
		return chartBody;
	}
	
	render() {
		const element = document.createElement('div');
		 
		element.innerHTML = `
			<div class="column-chart" style="--chart-height: ${this.chartHeight}">
				<div class="column-chart__title">
					${this.config.label}
					<a href="${this.config.link}" class="column-chart__link">View all</a>
				</div>
				<div class="column-chart__container">
					<div data-element="header" class="column-chart__header">${this.config.value}</div>
				 </div>
			</div>
		`;	
		
		this.element = element.firstElementChild;
		
		if (this.config?.data?.length === 0) {
			this.element.classList.add('column-chart_loading');
		}
		
		this.element.lastElementChild.append(this.createBody());
	}
	
	update(newConfig) {
		this.config = newConfig;
		
		const defaultConfig = {
			data: [],
			label: '',
			value: 0,
			link: ''
		};
		
		if (!newConfig) {
			this.config = defaultConfig
		} else {
			this.config = newConfig;
		}
		
		if (!this.config.data) {
			this.config.data = []
		}
		this.config = newConfig;
		
		this.element.remove();
		this.render();
	}

	remove() {
	  this.element.remove();
	}
  
	destroy() {
	  this.remove();
	}
}
