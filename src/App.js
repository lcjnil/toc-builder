import React, {Component} from 'react';
import _ from 'lodash'
import cx from 'classnames'

import {academicSkills, socialSkills, techSkills, generalSkills} from './lib/skill'
import {occupations, specialMap, specialFlatMap} from './lib/occupation'

class App extends Component {
  state = {
    name: '',
    occupation: '精神病学家',

    investigates: {
      信誉等级: 0
    },
    generals: {},
    maxIns: 16,
    maxGens: 65,
    specials: []
  };

  handleSelectOccupation = (e) => {
    const occupation = e.target.value;
    this.setState({
      occupation
    })
  };

  delIns = (name) => (e) => {
    const {investigates} = this.state;
    const initial = investigates[name] || 0
    if (initial === 0) {
      return
    }

    this.setState({
      investigates: {
        ...investigates,
        [name]: initial - 1
      }
    })
  };

  addIns = (name) => (e) => {
    const {investigates, maxIns} = this.state;
    const initial = investigates[name] || 0;

    const currentIns = _.sum(_.values(investigates)) || 0;
    if (currentIns === maxIns) {
      return
    }

    this.setState({
      investigates: {
        ...investigates,
        [name]: initial + 1
      }
    })
  };

  delGens = (name) => (e) => {
    const {generals} = this.state;
    const initial = generals[name] || 0;
    if (initial === 0) {
      return
    }

    this.setState({
      generals: {
        ...generals,
        [name]: initial - 1
      }
    })
  };

  addGens = (name) => (e) => {
    const {generals, maxGens} = this.state;
    const initial = generals[name] || 0;

    const currentIns = _.sum(_.values(generals)) || 0;
    if (currentIns === maxGens) {
      return
    }

    this.setState({
      generals: {
        ...generals,
        [name]: initial + 1
      }
    })
  };

  setSpecial = (name, type) => (e) => {
    const {specials, occupation} = this.state;
    const {other} = occupations[occupation];

    if (!other || !specialFlatMap[other.type].includes(type)) {
      return
    }

    if (!specials.includes(name)) {
      if (specials.length < other.points) {
        specials.push(name)
      }
    } else {
      specials.splice(specials.indexOf(name), 1)
    }
    this.setState({
      specials
    })
  };

  isSpecial = (name) => {
    const {occupation, specials} = this.state;
    const {skills} = occupations[occupation] || {skills: []};
    return [...specials, ...skills].includes(name);
  };

  renderStar(name, type) {
    const {occupation, specials} = this.state;
    const {skills} = occupations[occupation] || {skills: []};
    const isOccupationSkill = skills.includes(name);
    const isSpecials = specials.includes(name);

    const isSpecial = isOccupationSkill || isSpecials;
    return (
      <span
        className={cx('glyphicon', isSpecial ? 'glyphicon-star' : 'glyphicon-star-empty')}
        onClick={!isOccupationSkill && this.setSpecial(name, type)}
      />
    )
  }

  getPoints = (name) => {
    const {investigates, generals} = this.state;

    const {occupation} = this.state;
    const {credit} = occupations[occupation] || {credit: [0, 0]};

    let points = investigates[name] || generals[name] || 0;
    const isSpecial = this.isSpecial(name);
    if (isSpecial) {
      points *= 2
    }

    if (name === '信誉等级') {
      points += credit[0]
    }

    if (name === '心智') {
      points += 4;
    }

    if (name === '坚毅' || name === '健康') {
      points += 1;
    }

    return points
  };

  render() {
    const {investigates, generals, maxIns, maxGens, occupation, specials, name} = this.state;
    const occupationInfo = occupations[occupation];
    return (
      <div className="container">
        <h1>克苏鲁迷踪 角色卡</h1>

        <div className="info">
          <div>
            <label className="input-label">姓名</label>
            <input type="text" value={name} onChange={e => this.setState({name: e.target.value})}/>
          </div>
          <div>
            <label className="input-label">职业</label>
            <select type="text" value={occupation} onChange={this.handleSelectOccupation}>
              <option value="" />
              {_.keys(occupations).map(v =>
                <option key={v} value={v}>{v}</option>
              )}
            </select>
          </div>
        </div>

        <div className="wrapper">
          <div className="big-section section-ins">
            <h2>调查能力</h2>

            <p>调查能力总数: {maxIns} 剩余: {maxIns - _.sum(_.values(investigates))}</p>
            {
              occupationInfo.other &&
                <p>特殊能力: {specialMap[occupationInfo.other.type]} {occupationInfo.other.points} 剩余: {occupationInfo.other.points - specials.length}</p>
            }

            <div className="sections">
              <section>
                <h3>学术能力</h3>
                {
                  academicSkills.map(v => (
                    <div key={v}>
                      {this.renderStar(v, 'academy')}
                      <label className="input-label">{v}</label>
                      <button className="input-iconButton" onClick={this.delIns(v)}>-</button>
                      <span className="input-point">{this.getPoints(v)}</span>
                      <button className="input-iconButton" onClick={this.addIns(v)}>+</button>
                    </div>
                  ))
                }
              </section>

              <section>
                <h3>社交能力</h3>
                {
                  socialSkills.map(v => (
                    <div key={v}>
                      {this.renderStar(v, 'social')}
                      <label className="input-label">{v}</label>
                      <button className="input-iconButton" onClick={this.delIns(v)}>-</button>
                      <span className="input-point">{this.getPoints(v)}</span>
                      <button className="input-iconButton" onClick={this.addIns(v)}>+</button>
                    </div>
                  ))
                }
              </section>

              <section>
                <h3>技术能力</h3>
                {
                  techSkills.map(v => (
                    <div key={v}>
                      {this.renderStar(v, 'tech')}
                      <label className="input-label">{v}</label>
                      <button className="input-iconButton" onClick={this.delIns(v)}>-</button>
                      <span className="input-point">{this.getPoints(v)}</span>
                      <button className="input-iconButton" onClick={this.addIns(v)}>+</button>
                    </div>
                  ))
                }
              </section>
            </div>
          </div>


          <div className="big-section">
            <h2>一般能力</h2>
            调查能力总数: {maxGens} 剩余: {maxGens - _.sum(_.values(generals))}
            <section>
              {
                generalSkills.map(v => (
                  <div key={v}>
                    {this.renderStar(v, 'general')}
                    <label className="input-label">{v}</label>
                    <button className="input-iconButton" onClick={this.delGens(v)}>-</button>
                    <span className="input-point">{this.getPoints(v)}</span>
                    <button className="input-iconButton" onClick={this.addGens(v)}>+</button>
                  </div>
                ))
              }
            </section>
          </div>
        </div>

        <div>
          <h2>数据</h2>
          <p>姓名: {name}</p>
          <p>职业: {occupation}</p>
          <p>自定义职业能力: {specials.join('，')}</p>
          <div>
            能力点数:
            {Object.keys(investigates).map(v =>
              <li>{v}: {this.getPoints(v)}</li>
            )}
            {Object.keys(generals).map(v =>
              <li>{v}: {this.getPoints(v)}</li>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
