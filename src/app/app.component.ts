import { TranslateService } from '@ngx-translate/core';
import { APP_CONFIG, ConfigManager, setLang } from './core/core_api';
import { Component, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// UI
import { SelectItems } from '../../projects/select/src/public-api';
// Component parts
import { environment } from '../environments/environment';

@Component({
  selector: 'dogs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  languages: SelectItems = [];
  currentLanguage: string;

  constructor(
    @Inject(APP_CONFIG) private _configManager: ConfigManager,
    private _translateService: TranslateService,
    private _store: Store
  ) {}

  ngOnInit() {
    this._translateService.addLangs(this._configManager.config.i18n.langs || [environment.defaultLang]);
    const availableLanguages = this._translateService.getLangs();
    const defaultLang = this._configManager.config.i18n.default || environment.defaultLang;
    const browserLang = this._translateService.getBrowserLang();
    this.currentLanguage = availableLanguages.indexOf(browserLang) > -1 ? browserLang : defaultLang;
    this._translateService.setDefaultLang(this.currentLanguage);
    this._mapLanguages(availableLanguages);
    this.changeLang(this.currentLanguage);
  }

  changeLang(lang: string): void {
    this._store.dispatch(setLang(lang));
  }

  // Private
  _mapLanguages(languages: string[]) {
    this.languages = languages.map(language => ({
      name: language.toUpperCase(),
      value: language
    }));
  }
}
