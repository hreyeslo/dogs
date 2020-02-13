import { TranslateService } from '@ngx-translate/core';
import { APP_CONFIG, ConfigManager, setLang } from '@app/core';
import { Component, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// Component parts
import { environment } from '../environments/environment';

@Component({
  selector: 'dogs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  languages: string[] = [];

  constructor(
    @Inject(APP_CONFIG) private _configManager: ConfigManager,
    private _translateService: TranslateService,
    private _store: Store
  ) {}

  ngOnInit() {
    this._translateService.addLangs(this._configManager.config?.i18n?.langs || [environment.defaultLang]);
    this.languages = this._translateService.getLangs();
    const defaultLang = this._configManager.config?.i18n?.default || environment.defaultLang;
    const browserLang = this._translateService.getBrowserLang();
    const currentLang = this.languages.indexOf(browserLang) > -1 ? browserLang : defaultLang;
    this._translateService.setDefaultLang(currentLang);
    this.changeLang(currentLang);
  }

  changeLang(lang: string): void {
    this._store.dispatch(setLang(lang));
  }
}
